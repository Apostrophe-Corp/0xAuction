/* eslint-disable no-self-compare */
/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const state = Bytes(20)
export const main = Reach.App(() => {
	setOptions({ connectors: [ALGO] })
	const Seller = Participant('Seller', {
		adminContract: Contract,
	})

	const Auctioneer = API('Auctioneer', {
		stopAuction: Fun([], Null),
	})

	const Auction = Events({
		log: [state],
	})

	init()

	Seller.only(() => {
		const adminContract = declassify(interact.adminContract)
	})
	Seller.publish(adminContract)
	commit()
	Seller.publish()
	const externalStructure = {
		Auctions_created: Fun([], Null),
		Auctions_ended: Fun([], Null),
	}
	const externalCalls = remote(adminContract, externalStructure)
	externalCalls.Auctions_created()
	Auction.log(state.pad('live'))
	const [keepGoing] = parallelReduce([true])
		.invariant(balance() == 0)
		.while(true)
		.api(Auctioneer.stopAuction, (notify) => {
			Auction.log(state.pad('ended'))
			notify(null)
			return [false]
		})

	Auction.log(state.pad('down'))
	externalCalls.Auctions_ended()

	commit()
	exit()
})
