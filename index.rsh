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
		['link', Bytes(50)],
		['title', Bytes(15)],
		['description', Bytes(80)],
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
		// ID, ContractInfo, BlockCreated, Owner, Link, Title, Description
		create: [UInt, Contract, UInt, Address, Bytes(50), Bytes(15), Bytes(80)],
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
				auctionObject.link,
				auctionObject.title,
				auctionObject.description
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
