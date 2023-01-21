/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

export const main = Reach.App(() => {
	const Admin = Participant('Admin', {
		deployed: Fun([Contract], Null),
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

	const Auctions = API('Auctions', {
		created: Fun([objectRep], Null),
		ended: Fun([endResponse], Null),
		getID: Fun([], UInt),
		updateHighestBidder: Fun([UInt, Address], Null),
	})

	const Auction = Events({
		end: [UInt, UInt, UInt],
		create: [UInt, Contract, UInt, Address, Bytes(20), Bytes(80), UInt, Token],
		updateHighestBidder: [UInt, Address],
	})

	init()
	Admin.publish()
	commit()
	Admin.publish()
	Admin.interact.deployed(getContract())
	const auctionID = parallelReduce(0)
		.invariant(balance() == 0)
		.while(true)
		.api(Auctions.getID, (ret) => {
			ret(auctionID)
			return auctionID + 1
		})
		.api(Auctions.created, (obj, ret) => {
			ret(null)
			const auctionStruct = objectRep.fromObject(obj)
			const auctionObject = objectRep.toObject(auctionStruct)
			Auction.create(
				auctionObject.id,
				auctionObject.contractInfo,
				auctionObject.blockCreated,
				auctionObject.owner,
				auctionObject.title,
				auctionObject.description,
				auctionObject.price,
				auctionObject.tokenId
			)
			return auctionID
		})
		.api(Auctions.ended, (obj, ret) => {
			const endResponseStruct = endResponse.fromObject(obj)
			const endResponseObject = endResponse.toObject(endResponseStruct)
			Auction.end(
				endResponseObject.id,
				endResponseObject.blockEnded,
				endResponseObject.lastBid
			)
			ret(null)
			return auctionID
		})
		.api(Auctions.updateHighestBidder, (id, address, ret) => {
			Auction.updateHighestBidder(id, address)
			ret(null)
			return auctionID
		})
	commit()
	exit()
})
