/* eslint-disable no-self-compare */
/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const state = Bytes(32)
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

	const Admin = Participant('Admin', {})

	const objectRep = Struct([
		['id', UInt],
		['contractInfo', Contract],
		['blockCreated', UInt],
		['owner', Address],
		['title', Bytes(32)],
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
		updateState: Fun([], Null),
	})

	const Auctioneer = API('Auctioneer', {
		stopAuction: Fun([], endResponse),
		acceptSale: Fun([], Bool),
		rejectSale: Fun([], Bool),
	})

	const AdminCall = API('AdminCall', {
		adminCall: Fun([], Null),
	})

	const Auction = Events({
		created: [UInt, Address],
		bidSuccess: [UInt, UInt, Address, state],
		down: [UInt, UInt, Address, Contract, UInt, state],
		accepted: [state, UInt, Address, Address, Token],
		rejected: [state, UInt, Address, Address, Token],
		optInSuccess: [UInt, Address],
	})

	const AuctView = View({
		live: Bool,
		highestPrice: UInt,
		hasEnded: Bool,
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
	commit()
	Admin.publish()

	const externalStructure = {
		Auctions_created: Fun([objectRep], Null),
		Auctions_ended: Fun([endResponse], Null),
		Auctions_getID: Fun([], UInt),
		Auctions_updateHighestBidder: Fun([UInt, Address], Null),
		Auctions_endSuccess: Fun([UInt], Null),
	}

	const externalCalls = remote(adminContract, externalStructure)

	const id = externalCalls.Auctions_getID()

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

	AuctView.live.set(true)
	AuctView.hasEnded.set(false)
	externalCalls.Auctions_created(auction)

	const balAfter1stCall = balance()
	const end = thisConsensusTime() + auctionInfo.deadline

	Auction.created(id, Seller)
	const [keepBidding, highestBidder, lastPrice, isFirstBid, endRes] =
		parallelReduce([
			true,
			Seller,
			0,
			true,
			endResponse.fromObject({
				id: id,
				blockEnded: 0,
				lastBid: 0,
			}),
		])
			.invariant(balance(tokenId) == amt)
			.invariant(
				balance() ==
					(isFirstBid ? balAfter1stCall : lastPrice + balAfter1stCall)
			)
			.while(thisConsensusTime() < end && keepBidding)
			.api_(Bidder.bid, (bid) => {
				check(bid > lastPrice, 'Your bid is too low, please try again')
				return [
					bid,
					(notify) => {
						if (!isFirstBid) transfer(lastPrice).to(highestBidder)
						const who = this
						externalCalls.Auctions_updateHighestBidder(id, who)
						Auction.bidSuccess(id, bid, who, auctionInfo.title)
						notify([who, lastPrice])
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
						if (balance() >= adminDue) transfer(adminDue).to(Admin)
						if (balance() >= sellerDue) transfer(sellerDue).to(Seller)
						Auction.optInSuccess(id, this)
						notify(true)
						return [keepBidding, highestBidder, lastPrice, isFirstBid, endRes]
					},
				]
			})
			.api(Auctioneer.stopAuction, (notify) => {
				if (this == Seller || this == Admin) {
					const response = endResponse.fromObject({
						id: id,
						blockEnded: thisConsensusTime(),
						lastBid: lastPrice,
					})
					notify(response)
					return [false, highestBidder, lastPrice, isFirstBid, response]
				} else {
					const response = endResponse.fromObject({
						id: 0,
						blockEnded: 0,
						lastBid: 0,
					})
					notify(response)
					return [keepBidding, highestBidder, lastPrice, isFirstBid, endRes]
				}
			})

	externalCalls.Auctions_endSuccess(id)
	AuctView.live.set(false)
	AuctView.highestPrice.set(lastPrice)
	Auction.down(
		id,
		lastPrice,
		Seller,
		getContract(),
		createdAt,
		auctionInfo.title
	)

	const balAfter2ndCall = balance()

	if (lastPrice > 0) {
		const end_ = thisConsensusTime() + DEADLINE
		const [awaitingDecision, agreed] = parallelReduce([true, true])
			.invariant(balance(tokenId) == amt)
			.invariant(balance() == balAfter2ndCall)
			.while(thisConsensusTime() < end_ && awaitingDecision)
			.api(Auctioneer.acceptSale, (notify) => {
				notify(true)
				if (this == Seller || this == Admin) return [false, true]
				else return [awaitingDecision, agreed]
			})
			.api(Auctioneer.rejectSale, (notify) => {
				notify(false)
				if (this == Seller || this == Admin) return [false, false]
				else return [awaitingDecision, agreed]
			})
			.api(Bidder.updateState, (notify) => {
				notify(null)
				return [awaitingDecision, agreed]
			})

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
	} else {
		transfer(balance(tokenId), tokenId).to(Seller)
		transfer(balance()).to(highestBidder)
	}

	AuctView.hasEnded.set(true)
	externalCalls.Auctions_ended(endRes)
	const rideOn = parallelReduce(true)
		.invariant(balance(tokenId) == 0)
		.invariant(balance() == 0)
		.while(rideOn)
		.api(AdminCall.adminCall, (ret) => {
			ret(null)
			return rideOn
		})
	transfer(balance(tokenId), tokenId).to(Admin)
	transfer(balance()).to(Admin)
	commit()
	exit()
})
