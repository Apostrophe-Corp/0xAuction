/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

export const main = Reach.App(() => {
	setOptions({ connectors: [ALGO] })
	const Admin = Participant('Admin', {
		deployed: Fun([Contract], Null),
	})

	const Auctions = API('Auctions', {
		created: Fun([], Null),
		ended: Fun([], Null),
	})

	const Auction = Events({
		end: [],
		create: [],
	})

	init()
	Admin.publish()
	commit()
	Admin.publish()
	Admin.interact.deployed(getContract())

	const [keepGoing] = parallelReduce([true])
		.invariant(balance() == 0)
		.while(keepGoing)
		.api(Auctions.created, (notify) => {
			notify(null)
			Auction.create()
			return [true]
		})
		.api(Auctions.ended, (notify) => {
			notify(null)
			Auction.end()
			return [false]
		})
	commit()
	exit()
})
