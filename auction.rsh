/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const state = Bytes(20)
const amt = 1

export const main = Reach.App(() => {
	const Seller = Participant('Seller', {
		getAuction: Object({
			id: UInt,
			tokenId: Token,
			deadline: UInt,
			price: UInt,
			owner: Address,
			link: Bytes(50),
			title: Bytes(15),
			description: Bytes(80),
		}),
	})

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

	const Bidder = API('Bidder', {
		bid: Fun([UInt], Tuple(Address, UInt)),
		stopAuction: Fun([], endResponse),
	})

	const Auction = Events({
		log: [state, UInt, UInt],
		created: [UInt, Contract, UInt, Bytes(50), Bytes(15), Bytes(80)],
	})
	init()

	Seller.only(() => {
		const { tokenId, ...auctionInfo } = declassify(interact.getAuction)
	})
	Seller.publish(tokenId, auctionInfo)
	commit()
	Seller.pay([[amt, tokenId]])

	Auction.created(
		auctionInfo.id,
		getContract(),
		thisConsensusTime(),
		auctionInfo.link,
		auctionInfo.title,
		auctionInfo.description
	)

	const [timeRemaining, KeepGoing] = makeDeadline(auctionInfo.deadline)

	const [keepBidding, highestBidder, lastPrice, isFirstBid] = parallelReduce([
		true,
		auctionInfo.owner,
		0,
		true,
	])
		.invariant(balance(tokenId) == amt)
		.invariant(balance() == (isFirstBid ? 0 : lastPrice))
		.while(KeepGoing() && keepBidding)
		.api_(Bidder.bid, (bid) => {
			check(bid > lastPrice, 'Your bid is too low, please try again')
			return [
				bid,
				(notify) => {
					notify([highestBidder, lastPrice])
					if (!isFirstBid) {
						transfer(lastPrice).to(highestBidder)
					}
					const who = this
					if (bid > lastPrice) {
						Auction.log(state.pad('bidSuccess'), auctionInfo.id, bid)
					} else {
						Auction.log(state.pad('bidFailed'), auctionInfo.id, lastPrice)
					}
					return [keepBidding, who, bid, false]
				},
			]
		})
		.api(
			Bidder.stopAuction,
			() => {
				check(this == auctionInfo.owner, 'You are not the Seller')
			},
			() => 0,
			(notify) => {
				Auction.log(state.pad('endSuccess'), auctionInfo.id, lastPrice)
				const response = endResponse.fromObject({
                    id: auctionInfo.id,
					blockEnded: thisConsensusTime(),
					lastBid: lastPrice,
				})
				Auction.log(state.pad('down'), auctionInfo.id, 1)
				notify(response)
				return [false, highestBidder, lastPrice, isFirstBid]
			}
		)
		.timeout(timeRemaining(), () => {
			Seller.publish()
			return [keepBidding, highestBidder, lastPrice, isFirstBid]
		})
	transfer(amt, tokenId).to(highestBidder)
	Auction.log(state.pad('sold'), auctionInfo.id, lastPrice)
	if (!isFirstBid) {
		transfer(lastPrice).to(auctionInfo.owner)
	}
	commit()
	exit()
})
