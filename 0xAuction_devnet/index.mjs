import { loadStdlib } from '@reach-sh/stdlib'
import * as mainCtc from './build/index.main.mjs'
import * as auctionCtc from './build/auction.main.mjs'

const stdlib = loadStdlib(process.env)

const startingBalance = stdlib.parseCurrency(1000)

const deadline = 50

const accAdmin = await stdlib.newTestAccount(startingBalance)
const adminAdd = stdlib.formatAddress(accAdmin.getAddress())
console.log('Admin account created')
const testAccounts = await stdlib.newTestAccounts(4, startingBalance)
// const [acc1, acc2, acc3, acc4] = testAccounts
const testAddresses = testAccounts.map((acc) =>
	stdlib.formatAddress(acc.getAddress())
)
console.log('Test accounts created')

console.log('Preparing ASA options for mint')
const opts = {
	name: '0xAuction Token',
	symbol: 'OXAUCTOK',
	decimals: 0,
	url: 'ipfs://bafybeihkmhhwmjuyiachefalvxvi4dqgx3p4ybal74errpqnniu7t2q7eq#i',
}

const noneNull = (byte) => {
	let string = '',
		i = 0
	for (i; i < byte.length; i++) {
		if (String(byte[i]) !== String('\u0000')) {
			string += byte[i]
		}
	}
	return string
}

const ifState = (x) => x.padEnd(20, '\u0000')

const { standardUnit } = stdlib
let adminAddress = null
const setAdmin = ({ what }) => {
	adminAddress = stdlib.formatAddress(what[0])
}

console.log('Deploying the main contract')
const ctcInstance = accAdmin.contract(mainCtc)
const ctcInfo = await ctcInstance.getInfo()
// ctcInstance.passAddress.monitor(setAdmin)

const ecoSystem = {
	acc1: {
		ctcInstance: null,
		auctionInstance: null,
		auctions: [],
		currentAuction: 0,
		adminAddress,
	},
	acc2: {
		ctcInstance: null,
		auctionInstance: null,
		auctions: [],
		currentAuction: 0,
		adminAddress,
	},
	acc3: {
		ctcInstance: null,
		auctionInstance: null,
		auctions: [],
		currentAuction: 0,
		adminAddress,
	},
	acc4: {
		ctcInstance: null,
		auctionInstance: null,
		auctions: [],
		currentAuction: 0,
		adminAddress,
	},
}

// ctcInstance.passAddress.monitor(setAdmin)
const ecoKeys = Object.keys(ecoSystem)
const ecoLength = ecoKeys.length

console.log('Connecting all test accounts to the main contract and setting up')
for (
	let i = 1, ecoInfo = { tokenId: null, auctionInfo: null };
	i <= ecoLength;
	i++
) {
	const index = i
	const postAuction = async ({ what }) => {
		const time = await stdlib.getNetworkTime()
		if (time < parseInt(what[2]) + deadline) {
			const presentAuctions = ecoSystem['acc' + index].auctions
			presentAuctions.push({
				id: parseInt(what[0]),
				contractInfo: JSON.stringify(what[1], null),
				blockCreated: parseInt(what[2]),
				owner: stdlib.formatAddress(what[3]),
				title: noneNull(what[4]),
				description: noneNull(what[5]),
				price: parseInt(what[6]),
				tokenId: parseInt(what[7]),
				yourBid: 0,
				optIn: false,
				liveBid: 0,
			})
			ecoSystem['acc' + index].auctions = presentAuctions
			if (testAddresses[index - 1] === stdlib.formatAddress(what[3])) {
				const tempAuctionCtc = testAccounts[index - 1].account.contract(
					auctionCtc,
					what[1]
				)
				try {
					const stillRunning = await tempAuctionCtc.v.AuctionView.isRunning()
					console.log(stillRunning)
					if (stillRunning) {
						ecoSystem['acc' + index].currentAuction = parseInt(what[0])
						console.log('Your auction is live')
						// tempAuctionCtc.events.log.monitor(handleAuctionLog)
					}
				} catch (error) {
					console.log({ error })
				}
			}
		}
	}

	const dropAuction = ({ what }) => {
		const auctionsToBeEdited = ecoSystem['acc' + index].auctions
		const remainingAuctions = auctionsToBeEdited.filter(
			(el) => Number(el.id) !== parseInt(what[0])
		)
		ecoSystem['acc' + index].auctions = remainingAuctions
	}

	const handleAuctionLog = async ({ what }) => {
		switch (what[0]) {
			case ifState('bidSuccess'):
				const newBid = stdlib.formatCurrency(what[2], 4)
				const auctionToBeEdited = ecoSystem['acc' + index].auctions.filter(
					(el) => Number(el.id) === parseInt(what[1])
				)[0]
				let yourBid = Number(auctionToBeEdited['yourBid']),
					owner = auctionToBeEdited['owner']
				if (String(owner) !== String(testAddresses[index - 1])) {
					auctionToBeEdited['liveBid'] =
						newBid > Number(auctionToBeEdited['yourBid'])
							? newBid
							: Number(auctionToBeEdited['yourBid'])
				} else auctionToBeEdited['liveBid'] = newBid
				const leftOutAuctions = ecoSystem['acc' + index].auctions.filter(
					(el) => Number(el.id) !== parseInt(what[1])
				)
				ecoSystem['acc' + index].auctions = leftOutAuctions
				// console.log(auctionToBeEdited['liveBid'], yourBid)
				if (
					auctionToBeEdited['liveBid'] > yourBid &&
					String(owner) !== String(testAddresses[index - 1])
				) {
					console.log('acc' + index + ' just got outbid by ' + newBid + 'ALGO')
				}
				break
			case ifState('endSuccess'):
				console.log('The auction window has ended')
				const leftOutAuctions2 = ecoSystem['acc' + index].auctions.filter(
					(el) => Number(el.id) !== parseInt(what[1])
				)
				ecoSystem['acc' + index].auctions = leftOutAuctions2
				break
			case ifState('down'):
				try {
					const blockEnded = parseInt(await stdlib.getNetworkTime())
					const object = {
						id: parseInt(what[1]),
						blockEnded: blockEnded,
						lastBid: stdlib.formatCurrency(what[2], 4),
					}

					if (
						stdlib.formatAddress(what[3]) === String(testAddresses[index - 1])
					) {
						const tempAuctionCtc = testAccounts[index - 1].contract(
							auctionCtc,
							what[4]
						)
						try {
							const awaitingConfirmation =
								await tempAuctionCtc.v.AuctionView.awaitingConfirmation()
							// console.log(awaitingConfirmation)
							const time = stdlib.getNetworkTime()
							if (
								awaitingConfirmation &&
								time < parseInt(what[5]) + deadline + 50
							) {
								try {
									if (Math.floor(Math.random() * 2))
										await tempAuctionCtc.a.Auctioneer.acceptSale()
									else await tempAuctionCtc.a.Auctioneer.rejectSale()
								} catch (error) {
									console.log({ error })
									console.log(
										'Error informing the eco system of the outcome of the auction'
									)
								}
							}
						} catch (error) {
							console.log({ error })
						}
					} else {
						console.log('The auction has ended')
					}
					const endedAuction = ecoSystem['acc' + index].auctions.filter(
						(el) => el.id === parseInt(what[1])
					)?.[0]
					if (endedAuction) {
						dropAuction({ what: [endedAuction.id] })
						await ecoSystem['acc' + index].ctcInstance.apis.Auction.ended(
							object
						)
					}
				} catch (error) {
					console.log({ error })
				}
				ecoSystem['acc' + index].currentAuction = null
				break
			case ifState('accepted'):
				if (
					stdlib.formatAddress(what[3]) === String(testAddresses[index - 1])
				) {
					console.log(
						`🥳 Congratulations!!! NFT sold at ${stdlib.formatCurrency(
							what[2],
							4
						)} ${standardUnit} 🎉`
					)
				} else if (
					stdlib.formatAddress(what[4]) === String(testAddresses[index - 1])
				) {
					console.log(
						`🥳 Congratulations!!! You now own this asset: ${parseInt(
							what[5]
						)}, at the cost of ${stdlib.formatCurrency(
							what[2],
							4
						)} ${standardUnit} 🎉`
					)
				} else {
					console.log(
						`'${noneNull(what[1])}' finally closed at ${stdlib.formatCurrency(
							what[2],
							4
						)} ${standardUnit}, with the Auctioneer accepting the highest bid`
					)
				}
				break
			case ifState('rejected'):
				if (
					stdlib.formatAddress(what[3]) === String(testAddresses[index - 1])
				) {
					console.log(
						`Thank you for using 0xAuction, your NFT would transferred back in a short while`
					)
				} else if (
					stdlib.formatAddress(what[4]) === String(testAddresses[index - 1])
				) {
					console.log(
						`Hey, you were the highest Bidder for '${noneNull(
							what[1]
						)}', but the Auctioneer has decided not to sell this time`
					)
				} else {
					console.log(
						`'${noneNull(what[1])}' finally closed at ${stdlib.formatCurrency(
							what[2],
							4
						)} ${standardUnit}, with the Auctioneer rejecting the highest bid`
					)
				}
				break
			default:
				break
		}
	}

	ecoSystem['acc' + index].endAuction = async (ctcInfo) => {
		try {
			const ctc = testAccounts[index - 1].contract(auctionCtc, ctcInfo)
			const res = await ctc.a.Auctioneer.stopAuction()
			try {
				await ecoSystem['acc' + index].ctcInstance.apis.Auction.ended({
					id: parseInt(res.id),
					blockEnded: parseInt(res.blockEnded),
					lastBid: parseInt(res.lastBid),
				})
			} catch (error) {
				console.log({ error })
				console.log('Unable to inform OxAuction of the close of this auction')
			}
			// stopWaiting()
		} catch (error) {
			console.log({ error })
			console.log('An error occurred while closing this auction')
		}
	}

	const auctionCreated = async ({ what }) => {
		try {
			await ecoSystem['acc' + index].ctcInstance.apis.Auction.created({
				id: parseInt(what[0]),
				contractInfo: what[1],
				blockCreated: parseInt(what[2]),
				owner: what[3],
				title: what[4],
				description: what[5],
				price: parseInt(what[6]),
				tokenId: parseInt(what[7]),
			})
		} catch (error) {
			console.log({ error })
			console.log(
				'Sorry, unable to send your auction to OxAuction. Just wait a while, and after a few transaction signings, your NFT will be returned to you'
			)
			await ecoSystem['acc' + index].endAuction(JSON.stringify(what[1]))
		}
	}

	ecoSystem['acc' + index].ctcInstance = testAccounts[i - 1].contract(
		mainCtc,
		ctcInfo
	)
	ecoSystem['acc' + index].ctcInstance.events.create.monitor(postAuction)
	ecoSystem['acc' + index].ctcInstance.events.end.monitor(dropAuction)

	if (index === 1) {
		const mintNFT = async (opts) => {
			const optKeys = Object.keys(opts)
			const len = optKeys.length
			const note = new Uint8Array(32)
			const launchOpts = { supply: 1, note, decimals: 0 }
			let i = 0
			for (i; i < len; i++) {
				const key = optKeys[i]
				if (key === 'name' || key === 'symbol') continue
				if (opts[key]) launchOpts[key] = opts[key]
			}
			// console.log(launchOpts)
			try {
				const launchedToken = await stdlib.launchToken(
					testAccounts[index - 1],
					opts['name'],
					opts['symbol'],
					launchOpts
				)
				ecoInfo.tokenId = launchedToken.id
				console.log(`NFT successfully minted with ID: ${launchedToken.id}`)
			} catch (error) {
				console.log({ error })
				console.log('Mint failed')
			}
		}

		console.log('Minting the NFT for auction')
		await mintNFT(opts)
		console.log('Mint complete')

		const createAuction = async (auctionParams) => {
			const [, nftBal] = await stdlib.balancesOf(testAccounts[index - 1], [
				null,
				auctionParams.tokenId,
			])
			if (!parseInt(nftBal)) {
				console.log('You do not own this asset')
				return
			}

			let id = 0

			try {
				id = await ecoSystem['acc' + index].ctcInstance.apis.Auction.getID()
			} catch (error) {
				console.log({ error })
				console.log('Sorry, unable to create auction')
				return
			}
			const auctionInfo = {
				...auctionParams,
				id: parseInt(id),
				deadline,
				owner: testAddresses[index - 1],
				Admin: ecoSystem['acc' + index].adminAddress,
			}
			ecoSystem['acc' + index].currentAuction = parseInt(id)

			try {
				const ctc = testAccounts[index - 1].contract(auctionCtc)
				ctc.p.Seller({ getAuction: auctionInfo })
				await ctc.getInfo()
				ctc.events.created.monitor(auctionCreated)
				ctc.events.log.monitor(handleAuctionLog)
				ctc.events.down.monitor(handleAuctionLog)
				ctc.events.outcome.monitor(handleAuctionLog)
				ecoInfo.auctionInfo = auctionInfo
			} catch (error) {
				console.log({ error })
				console.log('Sorry, unable to create auction')
			}
		}

		const auctionParams = {
			tokenId: ecoInfo.tokenId,
			price: 9999,
			title: '0xAuction Token',
			description: '0xAuction Token Early Access Sale',
		}
		console.log('Starting the auction')
		await createAuction(auctionParams)
		console.log('Auction is live')
	} else {
		const handleBid = async ({
			auctionID = 0,
			ctc = null,
			ctcInfo = null,
			justJoining = false,
		} = {}) => {
			const bid = index
			const userBal = stdlib.formatCurrency(
				await stdlib.balanceOf(testAccounts[index - 1]),
				4
			)
			const resultingBalance = userBal - bid
			const minimumBalance = stdlib.formatCurrency(
				await stdlib.minimumBalanceOf(testAccounts[index - 1]),
				4
			)
			// console.log(resultingBalance, minimumBalance)
			if (resultingBalance < minimumBalance) {
				console.log(
					`Your balance: ${userBal} ${standardUnit}, is insufficient for this bid due to the minimum balance allowed on your account after a transfer: ${minimumBalance} ${standardUnit}`
				)
			}
			const auctionToBeEdited = ecoSystem['acc' + index].auctions.filter(
				(el) => Number(el.id) === auctionID
			)[0]
			try {
				if (ctc) await ctc.a.Bidder.bid(stdlib.parseCurrency(bid))
				else {
					ctc = testAccounts[index - 1].contract(auctionCtc, ctcInfo)
					await ctc.a.Bidder.bid(stdlib.parseCurrency(bid))
				}
				if (justJoining) {
					ctc.events.log.monitor(handleAuctionLog)
					ctc.events.down.monitor(handleAuctionLog)
				}
				auctionToBeEdited['yourBid'] = bid
				auctionToBeEdited['liveBid'] = bid
				const remainingAuctions = ecoSystem['acc' + index].auctions.filter(
					(el) => Number(el.id) !== auctionID
				)
				ecoSystem['acc' + index].auctions = remainingAuctions
				console.log('Bid placed')
			} catch (error) {
				console.log({ error })
			}
		}

		const joinAuction = async (auctionInfo) => {			
				setCurrentAuction(auctionInfo.id)
				try {
					await testAccounts[index - 1].tokenAccept(auctionInfo.tokenId)
					console.log('Opt-In confirmed')
				} catch (error) {
					console.log({ error })
					console.log('Opt-In failed and as such you cannot bid for this NFT at this point. But you can try again')
					return
				}
				const ctc = testAccounts[index - 1].contract(
					auctionCtc,
					JSON.parse(auctionInfo.contractInfo)
				)
				let continue_ = false
				do {
					continue_ = await handleBid({
						auctionID: auctionInfo.id,
						loopVar: continue_,
						ctc,
						justJoining: true,
					})
				} while (continue_)
			}
		}
	
}
console.log('Test account connections and setup complete')

// const auctionInfo = {}

// let i = 1

// for (i; i <= ecoLength; i++) {
// 	const index = i
// }

// ecoSystem.acc1.ctcInstance = acc1.contract(mainCtc, ctcInfo)
