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
			title: Bytes(20),
			description: Bytes(80),
			adminContract: Contract,
		}),
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
		log: [state, UInt, UInt],
		down: [state, UInt, UInt, Address, Contract, UInt],
		outcome: [state, state, UInt, Address, Address, Token],
	})

	const AuctionView = View('AuctionView', {
		isRunning: Bool,
		awaitingConfirmation: Bool,
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
	
	const timeRemaining = thisConsensusTime() + auctionInfo.deadline
	
	AuctionView.isRunning.set(true)
	const [keepBidding, highestBidder, lastPrice, isFirstBid] = parallelReduce([
		true,
		Seller,
		0,
		true,
	])
		.invariant(balance(tokenId) == amt)
		.invariant(balance() == (isFirstBid ? 0 : lastPrice))
		.while(thisConsensusTime() <= timeRemaining && keepBidding)
		.api_(Bidder.bid, (bid) => {
			check(bid > lastPrice, 'Your bid is too low, please try again')
			return [
				bid,
				(notify) => {
					notify([highestBidder, lastPrice])
					if (!isFirstBid) transfer(lastPrice).to(highestBidder)
					const who = this
					Auction.log(state.pad('bidSuccess'), id, bid)
					return [keepBidding, who, bid, false]
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
					return [keepBidding, highestBidder, lastPrice, isFirstBid]
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
				Auction.log(state.pad('endSuccess'), id, lastPrice)
				const response = endResponse.fromObject({
					id,
					blockEnded: thisConsensusTime(),
					lastBid: lastPrice,
				})
				externalCalls.Auctions_ended(response)
				notify(response)
				return [false, highestBidder, lastPrice, isFirstBid]
			}
		)
		
	AuctionView.isRunning.set(false)
	if (thisConsensusTime() > timeRemaining && keepBidding) {
		const response = endResponse.fromObject({
			id,
			blockEnded: thisConsensusTime(),
			lastBid: lastPrice,
		})
		externalCalls.Auctions_ended(response)
	}


	Auction.down(
		state.pad('down'),
		id,
		lastPrice,
		Seller,
		getContract(),
		createdAt
	)

	const end = thisConsensusTime() + DEADLINE

	const [awaitingDecision, agreed] = parallelReduce([true, true])
		.define(() => {
			AuctionView.awaitingConfirmation.set(awaitingDecision)
		})
		.invariant(balance() == (isFirstBid ? 0 : lastPrice))
		.invariant(balance(tokenId) == amt)
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
		Auction.outcome(
			state.pad('accepted'),
			auctionInfo.title,
			lastPrice,
			Seller,
			highestBidder,
			tokenId
		)
	} else {
		transfer(balance(tokenId), tokenId).to(Seller)
		transfer(balance()).to(highestBidder)
		Auction.outcome(
			state.pad('rejected'),
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
