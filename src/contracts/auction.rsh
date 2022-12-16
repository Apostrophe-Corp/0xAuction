/* eslint-disable no-self-compare */
/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const state = Bytes(20)
const DEADLINE = 50
const amt = 1
const optToken = 1000000
export const main = Reach.App(() => {
	const Seller = Participant('Seller', {
		getAuction: Object({
			tokenId: Token,
			deadline: UInt,
			price: UInt,
			owner: Address,
			title: state,
			description: Bytes(80),
			adminContract: Contract,
		}),
		published: Fun([UInt], Null),
	})

	const objectRep = Struct([
		['id', UInt],
		['contractInfo', Contract],
		['blockCreated', UInt],
		['owner', Address],
		['title', Bytes(20)],
		['description', Bytes(80)],
		['price', UInt],
		['tokenId', Token],
	])

	const endResponse = Struct([
		['id', UInt],
		['blockEnded', UInt],
		['lastBid', UInt],
	])

	const Bidder = API('Bidder', {
		bid: Fun([UInt], Tuple(Address, UInt)),
		optIn: Fun([], Bool),
	})

	const Auctioneer = API('Auctioneer', {
		stopAuction: Fun([], endResponse),
		acceptSale: Fun([], Bool),
		rejectSale: Fun([], Bool),
	})

	const Auction = Events({
		created: [UInt, Address],
		bidSuccess: [UInt, UInt],
		endSuccess: [UInt, UInt],
		down: [UInt, UInt, Address, Contract, UInt],
		accepted: [state, UInt, Address, Address, Token],
		rejected: [state, UInt, Address, Address, Token],
	})

	init()

	Seller.only(() => {
		const { tokenId, adminContract, ...auctionInfo } = declassify(
			interact.getAuction
		)
	})
	Seller.publish(tokenId, auctionInfo, adminContract)
	commit()
	Seller.pay([[amt, tokenId]])

	const externalStructure = {
		Auctions_created: Fun([objectRep], Null),
		Auctions_ended: Fun([endResponse], Null),
		Auctions_getID: Fun([], UInt),
		Auctions_getAdminAddress: Fun([], Address),
	}

	const externalCalls = remote(adminContract, externalStructure)

	const id = externalCalls.Auctions_getID()
	const AdminAddress = externalCalls.Auctions_getAdminAddress()

	const createdAt = thisConsensusTime()

	const auction = objectRep.fromObject({
		id: id,
		contractInfo: getContract(),
		blockCreated: createdAt,
		owner: Seller,
		title: auctionInfo.title,
		description: auctionInfo.description,
		price: auctionInfo.price,
		tokenId: tokenId,
	})

	externalCalls.Auctions_created(auction)

	const balAfter1stCall = balance()
	const timeRemaining = thisConsensusTime() + auctionInfo.deadline

	Auction.created(id, Seller)
	const [keepBidding, highestBidder, lastPrice, isFirstBid, endRes] =
		parallelReduce([
			true,
			Seller,
			0,
			true,
			endResponse.fromObject({
				id: 0,
				blockEnded: 0,
				lastBid: 0,
			}),
		])
			.invariant(balance(tokenId) == amt)
			.invariant(
				balance() ==
					(isFirstBid ? balAfter1stCall : lastPrice + balAfter1stCall)
			)
			.while(thisConsensusTime() <= timeRemaining && keepBidding)
			.api_(Bidder.bid, (bid) => {
				check(bid > lastPrice, 'Your bid is too low, please try again')
				return [
					bid,
					(notify) => {
						notify([highestBidder, lastPrice])
						if (!isFirstBid) transfer(lastPrice).to(highestBidder)
						const who = this
						Auction.bidSuccess(id, bid)
						return [keepBidding, who, bid, false, endRes]
					},
				]
			})
			.api_(Bidder.optIn, () => {
				return [
					optToken,
					(notify) => {
						const adminDue = (optToken / 100) * 90
						const sellerDue = (optToken / 100) * 10
						if (balance() >= adminDue) transfer(adminDue).to(AdminAddress)
						if (balance() >= sellerDue) transfer(sellerDue).to(Seller)
						notify(true)
						return [keepBidding, highestBidder, lastPrice, isFirstBid, endRes]
					},
				]
			})
			.api(
				Auctioneer.stopAuction,
				() => {
					check(this == Seller, 'You are not the Seller')
				},
				() => 0,
				(notify) => {
					const response = endResponse.fromObject({
						id: id,
						blockEnded: thisConsensusTime(),
						lastBid: lastPrice,
					})
					Auction.endSuccess(id, lastPrice)
					notify(response)
					return [false, highestBidder, lastPrice, isFirstBid, response]
				}
			)

	externalCalls.Auctions_ended(endRes)

	const balAfter2ndCall = balance()

	Auction.down(id, lastPrice, Seller, getContract(), createdAt)

	const end = thisConsensusTime() + DEADLINE

	const [awaitingDecision, agreed] = parallelReduce([true, true])
		.invariant(balance(tokenId) == amt)
		.invariant(balance() == balAfter2ndCall)
		.while(thisConsensusTime() <= end && awaitingDecision)
		.api(
			Auctioneer.acceptSale,
			() => {
				check(this == Seller, 'You are not the Seller')
			},
			() => 0,
			(notify) => {
				notify(true)
				return [false, true]
			}
		)
		.api(
			Auctioneer.rejectSale,
			() => {
				check(this == Seller, 'You are not the Seller')
			},
			() => 0,
			(notify) => {
				notify(false)
				return [false, false]
			}
		)

	if (agreed) {
		transfer(balance(tokenId), tokenId).to(highestBidder)
		transfer(balance()).to(Seller)
		Auction.accepted(
			auctionInfo.title,
			lastPrice,
			Seller,
			highestBidder,
			tokenId
		)
	} else {
		transfer(balance(tokenId), tokenId).to(Seller)
		transfer(balance()).to(highestBidder)
		Auction.rejected(
			auctionInfo.title,
			lastPrice,
			Seller,
			highestBidder,
			tokenId
		)
	}
	commit()
	exit()
})
