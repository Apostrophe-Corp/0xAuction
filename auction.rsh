/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

export const main = Reach.App(() => {
	const Seller = Participant('Seller', {
		startAuction: Fun([], Token),
	})
	const Bidder = API('Bidder', {
		bid: Fun([UInt], Tuple(Address, UInt)),
	})
	const Sellers = API('Sellers', {
		stopAuction: Fun([], Null),
	})
	init()

	Seller.only(() => {
		const nftId = declassify(interact.startAuction())
	})
	Seller.publish(nftId)
	const amt = 1
	commit()
	Seller.pay([[amt, nftId]])
	assert(balance(nftId) == amt, 'Balance of the NFT is incorrect')
	// check that pay is successful and add event to inform start of auction

	const [keepGoing, highestBidder, lastPrice, isFirstBid] = parallelReduce([
		true,
		Seller,
		0,
		true,
	])
		.invariant(balance(nftId) == amt)
		.invariant(balance() == (isFirstBid ? 0 : lastPrice))
		.while(keepGoing)
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
					// add event to see bid here
					return [true, who, bid, false]
				},
			]
		})
		.api(Sellers.stopAuction, ()=>{
            check(this == Seller, 'You are not the Seller')
        },()=>{
            return 0
        },(notify) => {			
			notify(null)
			return [false, highestBidder, lastPrice, isFirstBid]
		})
	transfer(amt, nftId).to(highestBidder)
	if (!isFirstBid) {
		transfer(lastPrice).to(Seller)
	}
	commit()
})
