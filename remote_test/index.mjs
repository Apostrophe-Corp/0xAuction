import { loadStdlib } from '@reach-sh/stdlib'
import * as mainCtc from './build/index.main.mjs'
import * as auctionCtc from './build/auction.main.mjs'

const stdlib = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const startingBalance = stdlib.parseCurrency(1000)

const accAdmin = await stdlib.newTestAccount(startingBalance)
const auctionContract = accAdmin.contract(auctionCtc)
console.log('Admin account created')

const ifState = (x) => x.padEnd(20, '\u0000')

const handleAuctionLog = async ({ what }) => {
	switch (what[0]) {
		case ifState('live'):
			console.log('live got fired')
			try {
				// await stdlib.wait(1)
				// await new Promise((resolve) => setTimeout(resolve, 3000))
				await auctionContract.safeApis.Auctioneer.stopAuction()
			} catch (error) {
				console.log({ error })
			}
			break
		case ifState('ended'):
			console.log('ended got fired')
			break
		case ifState('down'):
			console.log('down got fired')
			break
		default:
			break
	}
}

const admin_created = ({ when, what } = {}) => {
	console.log('Remote API call for created was a success')
}

const admin_ended = ({ when, what } = {}) => {
	console.log('Remote API call for ended was a success')
}

const mainContract = accAdmin.contract(mainCtc)
mainContract.events.create.monitor(admin_created)
mainContract.events.end.monitor(admin_ended)
await Promise.all([
	mainCtc.Admin(mainContract, {
		deployed: async (contract) => {
			console.log('The main contract has been deployed')
			auctionContract.events.log.monitor(handleAuctionLog)
			await Promise.all([
				auctionCtc.Seller(auctionContract, {
					adminContract: contract,
				}),
			])
		},
	}),
])
