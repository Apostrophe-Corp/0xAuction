/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const state = Bytes(20)

export const main = Reach.App(() => {
	const Admin = Participant('Admin', {})

	const objectRep = Struct([
		['id', UInt],
		['contractInfo', Contract],
		['blockCreated', UInt],
		['owner', Address],
		['title', Bytes(20)],
		['description', Bytes(80)],
		['price', UInt],
		['tokenId', Token]
	])

	const endResponse = Struct([
		['id', UInt],
		['blockEnded', UInt],
		['lastBid', UInt],
	])

	const Auctions = API('Auction', {
		created: Fun([objectRep], Null),
		ended: Fun([endResponse], Null),
	})

	const Auction = Events({
		// ID, LastBid, BlockEnded
		end: [UInt, UInt, UInt],
		// ID, ContractInfo, BlockCreated, Owner, Title, Description
		create: [UInt, Contract, UInt, Address, Bytes(20), Bytes(80), UInt, Token],
	})

	init()
	Admin.publish()
	commit()
	Admin.publish()

	const keepGoing = parallelReduce(true)
		.invariant(balance() == 0)
		.while(keepGoing)
		.api(Auctions.created, (obj, notify) => {
			notify(null)
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
			return keepGoing
		})
		.api(Auctions.ended, (obj, notify) => {
			notify(null)
			const endResponseStruct = endResponse.fromObject(obj)
			const endResponseObject = endResponse.toObject(endResponseStruct)
			Auction.end(
				endResponseObject.id,
				endResponseObject.blockEnded,
				endResponseObject.lastBid
			)
			return keepGoing
		})
	commit()
	exit()
})
