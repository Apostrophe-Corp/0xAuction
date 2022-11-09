import React, { useState } from 'react'
import Helmet from 'react-helmet'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
import * as auctionCtc from '../../build/auction.main.mjs'
import * as mainCtc from '../../build/index.main.mjs'
import { fmtClasses as cf } from '../hooks/fmtClasses'
import s from '../styles/Shared.module.css'
import '../styles/Global.module.css'
import icon from '../assets/images/preview.jpg'
import app from '../styles/App.module.css'
import { Alert } from '../components/Alert'
import { Buyer, Seller } from '../components/Auction'
import { ConnectAccount, LoadingPreview } from '../components/App'

const algoExplorerURI = {
	TestNet: 'https://testnet.algoexplorer.io',
	MainNet: 'https://algoexplorer.io',
}['TestNet']

const deadline = 10000

const reach = loadStdlib(process.env)

export const ReachContext = React.createContext()

const { standardUnit } = reach
const waitingPro = {}

const ReachContextProvider = ({ children }) => {
	const [view, setView] = useState('App')

	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})

	const [[showPreloader, setShowPreloader], [processing, setProcessing]] = [
		useState(false),
		useState(false),
	]

	const [promiseOfConfirmation, setPromiseOfConfirmation] = useState({})

	const [[alertInfo, setAlertInfo], [showAlert, setShowAlert]] = [
		useState({
			message: 'Confirm Action',
			accept: 'Yes',
			decline: 'No',
			forConfirmation: true,
			prompt: false,
		}),
		useState(false),
	]

	const [currentAuction, setCurrentAuction] = useState(null)
	const [auctions, setAuctions] = useState([])
	const [latestAuctions, setLatestAuctions] = useState([])

	const [showBuyer, setShowBuyer] = useState(false)
	const [showSeller, setShowSeller] = useState(false)
	const [showConnectAccount, setShowConnectAccount] = useState(false)
	const [contractInstance, setContractInstance] = useState(null)
	const [contract, setContract] = useState('')
	const [adminAddress, setAdminAddress] = useState('')

	const updateLatestAuctions = (auc) => {
		if (auc.length === 0) setLatestAuctions((previous) => [])
		const length = auc.length
		let x = length - 1
		const newAuctions = []
		for (x; x > length - 6; x--) {
			newAuctions.push(auc[x])
			if (x === 0) break
		}
		newAuctions.push(auc[length - 1])
		setLatestAuctions((previous) => newAuctions)
	}

	const alertThis = async ({
		message = 'Confirm Action',
		accept = 'Yes',
		decline = 'No',
		forConfirmation = true,
		prompt = false,
		persist = false,
		neutral = false,
	} = {}) => {
		await sleep(300)
		promiseOfConfirmation?.resolve && promiseOfConfirmation.resolve()
		const result = await new Promise((resolve) => {
			setPromiseOfConfirmation({ resolve })
			setAlertInfo((previous) => ({
				message,
				accept,
				decline,
				forConfirmation,
				prompt,
				persist,
				neutral,
			}))
			setShowAlert((lastState) => true)
		})
		return result
	}

	const startWaiting = async () => {
		const shouldDisplay = (display) => {
			setShowPreloader(display)
			if (display) setProcessing(display)
		}
		try {
			await new Promise((resolve, reject) => {
				waitingPro['resolve'] = resolve
				waitingPro['reject'] = reject
				shouldDisplay(true)
			})
			shouldDisplay(false)
		} catch (error) {
			shouldDisplay(false)
		}
	}

	const stopWaiting = (mode = true) => {
		if (mode && waitingPro.resolve) waitingPro.resolve()
		else if (waitingPro.reject) waitingPro.reject()
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

	const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))

	const connectToWallet = async (
		walletPreference,
		mnemonic = false,
		secret = ''
	) => {
		startWaiting()
		delete window.algorand
		const instantReach = loadStdlib(process.env)
		switch (walletPreference) {
			case 'MyAlgoConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect })
				)
				break
			case 'WalletConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv: 'TestNet', WalletConnect })
				)
				break
			case 'PeraConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv: 'TestNet', PeraConnect })
				)
				break
			default:
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv: 'TestNet', WalletConnect })
				)
				break
		}
		try {
			const account = mnemonic
				? await instantReach.newAccountFromMnemonic(secret)
				: await instantReach.getDefaultAccount()
			setUser({
				account,
				balance: async (tokenID = null) => {
					const balAtomic = await instantReach.balanceOf(account, tokenID)
					const balance = instantReach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: instantReach.formatAddress(account.getAddress()),
			})
			setShowConnectAccount(false)
			stopWaiting()
			alertThis({
				message: 'Connection to wallet was successful',
				forConfirmation: false,
			})
		} catch (error) {
			console.error({ error })
			stopWaiting(false)
			alertThis({
				message:
					'An error occurred, unable to connect to wallet. Please try again',
				forConfirmation: false,
			})
		}
	}

	const setAdmin = ({ what }) => {
		setAdminAddress(reach.formatAddress(what[0]))
	}

	const postAuction = async ({ what }) => {
		const time = await reach.getNetworkTime()
		if (time < parseInt(what[2]) + deadline) {
			const presentAuctions = auctions
			presentAuctions.push({
				id: parseInt(what[0]),
				contractInfo: JSON.stringify(what[1], null),
				blockCreated: parseInt(what[2]),
				owner: reach.formatAddress(what[3]),
				title: noneNull(what[4]),
				description: noneNull(what[5]),
				price: parseInt(what[6]),
				tokenId: parseInt(what[7]),
				yourBid: 0,
				optIn: false,
				liveBid: 0,
			})
			setAuctions((previous) => presentAuctions)
			updateLatestAuctions(presentAuctions)
			if (String(user.address) === reach.formatAddress(what[3])) {
				const tempAuctionCtc = user.account.contract(auctionCtc, what[1])
				try {
					const stillRunning = await tempAuctionCtc.v.AuctionView.isRunning()
					console.log(stillRunning)
					if (stillRunning) {
						setCurrentAuction(parseInt(what[0]))
						stopWaiting()
						alertThis({
							message: 'Your auction is live',
							forConfirmation: false,
						})
						tempAuctionCtc.events.log.monitor(handleAuctionLog)
						setShowSeller(true)
					}
				} catch (error) {
					console.log({ error })
				}
			}
		}
	}

	const dropAuction = ({ what }) => {
		if (view === 'Buy' && auctions.length <= 1) setView('App')
		if ((showBuyer || showSeller) && currentAuction === parseInt(what[0])) {
			setView('App')
			setShowBuyer(false)
			setShowSeller(false)
		}
		const auctionsToBeEdited = auctions
		const remainingAuctions = auctionsToBeEdited.filter(
			(el) => Number(el.id) !== parseInt(what[0])
		)
		if (remainingAuctions.length === 0 && view === 'Buy') setView('App')
		setAuctions((previous) => remainingAuctions)
		updateLatestAuctions(remainingAuctions)
	}

	const checkForContract = async (func) => {
		if (!user.account) {
			const connect = await alertThis({
				message: 'Connect your wallet account first, and try that again',
				accept: 'Connect now',
				decline: 'Not now',
			})

			if (connect) {
				setShowConnectAccount(true)
			}
			return
		}
		if (!contract.ctcInfoStr) {
			const shouldContinue = await alertThis({
				message:
					'Deploy or connect to an 0xAuction smart contract to proceed. Continue?',
				accept: 'Yes',
				decline: 'No',
			})

			if (shouldContinue) {
				const shouldDeploy = await alertThis({
					message: 'Would you be deploying or attaching?',
					accept: 'Deploying',
					decline: 'Attaching',
					neutral: true,
				})

				if (shouldDeploy) {
					startWaiting()
					try {
						const ctc = user.account.contract(mainCtc)
						setContractInstance(ctc)
						ctc.p.Admin({
							deployed: async (infoStr) => {
								const ctcInfoStr = JSON.stringify(infoStr, null)
								setContract({ ctcInfoStr })
								stopWaiting()
								const copy = await alertThis({
									message: `Deployed successfully, here's the contract info: ${ctcInfoStr}. Copy to clipboard?`,
									accept: 'Yes',
									decline: 'No',
								})
								if (copy) {
									navigator.clipboard.writeText(ctcInfoStr)
									alertThis({
										message: 'Copied to clipboard',
										forConfirmation: false,
									})
								}
							},
						})
						ctc.events.create.monitor(postAuction)
						ctc.events.end.monitor(dropAuction)
						ctc.events.passAddress.monitor(setAdmin)
						func()
					} catch (error) {
						console.log({ error })
						stopWaiting(false)
						alertThis({
							message: 'Deployment failed',
							forConfirmation: false,
						})
					}
				} else {
					const ctcInfo = await alertThis({
						message: `Enter the 0xAuction contract information`,
						prompt: true,
					})
					try {
						const ctc = user.account.contract(mainCtc, JSON.parse(ctcInfo))
						setContractInstance(ctc)
						setContract({ ctcInfoStr: ctcInfo })
						alertThis({
							message: 'Successfully attached',
							forConfirmation: false,
						})
						ctc.events.create.monitor(postAuction)
						ctc.events.end.monitor(dropAuction)
						ctc.events.passAddress.monitor(setAdmin)
						func()
					} catch (error) {
						console.log({ error })
						alertThis({
							message:
								'Error while attaching to contract. Please verify that the contract is accurate',
							forConfirmation: false,
						})
					}
				}
			}
		} else {
			func()
		}
	}

	const mintNFT = async (opts) => {
		startWaiting()
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
			const launchedToken = await reach.launchToken(
				user.account,
				opts['name'],
				opts['symbol'],
				launchOpts
			)
			stopWaiting()
			const viewToken = await alertThis({
				message: `NFT successfully minted with ID: ${launchedToken.id}. Would you like to view this asset on AlgoExplorer.io now?`,
				accept: 'Yes',
				decline: 'No',
			})

			if (viewToken) {
				window.open(`${algoExplorerURI}/asset/${launchedToken.id}`, '_blank')
			}
		} catch (error) {
			console.log({ error })
			stopWaiting()
			alertThis({
				message: 'Mint failed',
				forConfirmation: false,
			})
		}
	}

	const auctionCreated = async ({ what }) => {
		try {
			await contractInstance.apis.Auction.created({
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
			stopWaiting(false)
			alertThis({
				message:
					'Sorry, unable to send your auction to OxAuction. Just wait a while, and after a few transaction signings, your NFT will be returned to you',
				forConfirmation: false,
			}).then(() => {
				endAuction(JSON.stringify(what[1]))
			})
		}
	}

	const handleAuctionLog = async ({ what }) => {
		switch (what[0]) {
			case ifState('bidSuccess'):
				const newBid = reach.formatCurrency(what[2], 4)
				let yourBid = 0,
					owner = null,
					ctcInfo = null,
					opt = false
				const auctionToBeEdited = auctions.filter(
					(el) => Number(el.id) === parseInt(what[1])
				)[0]
				if (String(owner) !== String(user.address)) {
					auctionToBeEdited['liveBid'] =
						newBid > Number(auctionToBeEdited['yourBid'])
							? newBid
							: Number(auctionToBeEdited['yourBid'])
				} else auctionToBeEdited['liveBid'] = newBid
				yourBid = Number(auctionToBeEdited['yourBid'])
				owner = auctionToBeEdited['owner']
				ctcInfo = auctionToBeEdited['contractInfo']
				opt = auctionToBeEdited['optIn']
				const leftOutAuctions = auctions.filter(
					(el) => Number(el.id) !== parseInt(what[1])
				)
				const updatedAuctions = [auctionToBeEdited, ...leftOutAuctions]
				setAuctions((previous) => updatedAuctions)
				updateLatestAuctions(updatedAuctions)
				console.log(auctionToBeEdited['liveBid'], yourBid)
				if (
					auctionToBeEdited['liveBid'] > yourBid &&
					String(owner) !== String(user.address) &&
					showBuyer
				) {
					const bidAgain = await alertThis({
						message: `You just got outbid${
							opt ? `, the highest bid is now ${newBid} ${standardUnit}` : ''
						}. Would you like to bid again?`,
						accept: 'Yes',
						decline: 'No',
					})
					if (bidAgain) {
						let continue_ = false
						do {
							continue_ = await handleBid({
								auctionID: parseInt(what[1]),
								loopVar: continue_,
								ctcInfo,
								justJoining: false,
							})
						} while (continue_)
					}
				}
				break
			case ifState('endSuccess'):
				alertThis({
					message: `This auction's bidding window has been closed by the Auctioneer`,
					forConfirmation: false,
				})
				if (auctions.length === 1) setView('App')
				setShowBuyer(false)
				setShowSeller(false)
				const presentAuc = auctions
				const leftoverAuctions = presentAuc.filter(
					(el) => Number(el.id) !== parseInt(what[1])
				)
				setAuctions((previous) => leftoverAuctions)
				updateLatestAuctions(leftoverAuctions)
				break
			case ifState('down'):
				stopWaiting()
				try {
					const blockEnded = parseInt(await reach.getNetworkTime())
					const object = {
						id: parseInt(what[1]),
						blockEnded: blockEnded,
						lastBid: reach.formatCurrency(what[2], 4),
					}

					if (reach.formatAddress(what[3]) === String(user.address)) {
						const tempAuctionCtc = user.account.contract(auctionCtc, what[4])
						try {
							const awaitingConfirmation =
								await tempAuctionCtc.v.AuctionView.awaitingConfirmation()
							console.log(awaitingConfirmation)
							const time = await reach.getNetworkTime()
							if (
								awaitingConfirmation &&
								time < parseInt(what[5]) + deadline + 50
							) {
								const agreeToBid = await alertThis({
									message: `Do you accept the current bid of ${reach.formatCurrency(
										what[2],
										4
									)} ${standardUnit}?`,
									accept: 'Yes',
									decline: 'No',
								})
								try {
									if (agreeToBid) await tempAuctionCtc.a.Auctioneer.acceptSale()
									else await tempAuctionCtc.a.Auctioneer.rejectSale()
								} catch (error) {
									console.log({ error })
									alertThis({
										message:
											'Unable to process your choice, defaulting to an agreement',
										forConfirmation: false,
									})
									setShowSeller(false)
								}
							}
						} catch (error) {
							console.log({ error })
						}
					} else {
						alertThis({
							message: 'The auction has ended',
							forConfirmation: false,
						})
						setShowBuyer(false)
					}
					const endedAuction = auctions.filter(
						(el) => el.id === parseInt(what[1])
					)?.[0]
					if (endedAuction) {
						dropAuction({ what: [endedAuction.id] })
						await contractInstance.apis.Auction.ended(object)
					}
				} catch (error) {
					console.log({ error })
				}
				setCurrentAuction(null)
				break
			case ifState('accepted'):
				if (reach.formatAddress(what[3]) === String(user.address)) {
					alertThis({
						message: `🥳 Congratulations!!! NFT sold at ${reach.formatCurrency(
							what[2],
							4
						)} ${standardUnit} 🎉`,
						forConfirmation: false,
					})
				} else if (reach.formatAddress(what[4]) === String(user.address)) {
					const viewToken = await alertThis({
						message: `🥳 Congratulations!!! You now own this asset: ${parseInt(
							what[5]
						)}, at the cost of ${reach.formatCurrency(
							what[2],
							4
						)} ${standardUnit} 🎉. Proceed to view on AlgoExplorer.io?`,
						accept: 'Yes',
						decline: 'No',
					})
					if (viewToken) {
						window.open(
							`${algoExplorerURI}/asset/${parseInt(what[5])}`,
							'_blank'
						)
					}
				} else {
					alertThis({
						message: `'${noneNull(
							what[1]
						)}' finally closed at ${reach.formatCurrency(
							what[2],
							4
						)} ${standardUnit}, with the Auctioneer accepting the highest bid`,
						forConfirmation: false,
					})
				}
				break
			case ifState('rejected'):
				if (reach.formatAddress(what[3]) === String(user.address)) {
					alertThis({
						message: `Thank you for using 0xAuction, your NFT would transferred back in a short while`,
						forConfirmation: false,
					})
				} else if (reach.formatAddress(what[4]) === String(user.address)) {
					alertThis({
						message: `Hey, you were the highest Bidder for '${noneNull(
							what[1]
						)}', but the Auctioneer has decided not to sell this time`,
						forConfirmation: false,
					})
				} else {
					alertThis({
						message: `'${noneNull(
							what[1]
						)}' finally closed at ${reach.formatCurrency(
							what[2],
							4
						)} ${standardUnit}, with the Auctioneer rejecting the highest bid`,
						forConfirmation: false,
					})
				}
				break
			default:
				break
		}
	}

	const createAuction = async (auctionParams) => {
		startWaiting()
		const [, nftBal] = await reach.balancesOf(user.account, [
			null,
			auctionParams.tokenId,
		])
		if (!parseInt(nftBal)) {
			stopWaiting()
			alertThis({
				message: 'You do not own this asset',
				forConfirmation: false,
			})
			return
		}

		let id = 0

		try {
			id = await contractInstance.apis.Auction.getID()
		} catch (error) {
			console.log({ error })
			stopWaiting(false)
			alertThis({
				message: 'Sorry, unable to create auction',
				forConfirmation: false,
			})
			return
		}
		const auctionInfo = {
			...auctionParams,
			id: parseInt(id),
			deadline,
			owner: user.address,
			Admin: adminAddress,
		}
		setCurrentAuction(parseInt(id))

		try {
			const ctc = user.account.contract(auctionCtc)
			ctc.p.Seller({ getAuction: auctionInfo })
			await ctc.getInfo()
			ctc.events.created.monitor(auctionCreated)
			ctc.events.log.monitor(handleAuctionLog)
			ctc.events.down.monitor(handleAuctionLog)
			ctc.events.outcome.monitor(handleAuctionLog)
		} catch (error) {
			console.log({ error })
			stopWaiting(false)
			alertThis({
				message: 'Sorry, unable to create auction',
				forConfirmation: false,
			})
		}
	}

	const endAuction = async (ctcInfo) => {
		const end = await alertThis({
			message: 'This auction would be closed. Proceed?',
			accept: 'Cancel',
			decline: 'End Auction',
		})
		if (!end) {
			startWaiting()
			try {
				const ctc = user.account.contract(auctionCtc, JSON.parse(ctcInfo))
				await ctc.a.Auctioneer.stopAuction().then(async (res) => {
					try {
						await contractInstance.apis.Auction.ended({
							id: parseInt(res.id),
							blockEnded: parseInt(res.blockEnded),
							lastBid: parseInt(res.lastBid),
						})
					} catch (error) {
						console.log({ error })
						stopWaiting(false)
						alertThis({
							message:
								'Unable to inform OxAuction of the close of this auction',
							forConfirmation: false,
						})
					}
				})
				// stopWaiting()
				setShowSeller(false)
			} catch (error) {
				console.log({ error })
				stopWaiting(false)
				alertThis({
					message: 'An error occurred while closing this auction',
					forConfirmation: false,
				})
			}
		}
	}

	const handleBid = async ({
		auctionID = 0,
		loopVar = false,
		ctc = null,
		ctcInfo = null,
		justJoining = false,
	} = {}) => {
		const bid = await alertThis({
			message: 'Enter your bidding amount',
			prompt: true,
		})
		startWaiting()
		const userBal = reach.formatCurrency(await reach.balanceOf(user.account), 4)
		const resultingBalance = userBal - bid
		const minimumBalance = reach.formatCurrency(
			await reach.minimumBalanceOf(user.account),
			4
		)
		console.log(resultingBalance, minimumBalance)
		if (resultingBalance < minimumBalance) {
			stopWaiting()
			await alertThis({
				message: `Your balance: ${userBal} ${standardUnit}, is insufficient for this bid due to the minimum balance allowed on your account after a transfer: ${minimumBalance} ${standardUnit}`,
				forConfirmation: false,
			})
			await alertThis({
				message:
					'At this point, would you prefer to exit this auction? *You will still be notified of the outcome at the close of the auction',
				accept: 'Stay',
				decline: 'Exit',
			}).then((decision) => {
				setShowBuyer(decision)
			})
			return
		}
		const auctionToBeEdited = auctions.filter(
			(el) => Number(el.id) === auctionID
		)[0]
		try {
			if (ctc) await ctc.a.Bidder.bid(reach.parseCurrency(bid))
			else {
				ctc = user.account.contract(auctionCtc, JSON.parse(ctcInfo))
				await ctc.a.Bidder.bid(reach.parseCurrency(bid))
			}
			if (justJoining) {
				ctc.events.log.monitor(handleAuctionLog)
				ctc.events.down.monitor(handleAuctionLog)
			}
			auctionToBeEdited['yourBid'] = bid
			auctionToBeEdited['liveBid'] = bid
			const remainingAuctions = auctions.filter(
				(el) => Number(el.id) !== auctionID
			)
			const updatedAuctions = [auctionToBeEdited, ...remainingAuctions]
			setAuctions((previous) => updatedAuctions)
			updateLatestAuctions(updatedAuctions)
			loopVar = false
			setShowBuyer(true)
			stopWaiting()
			alertThis({
				message: 'Bid placed',
				forConfirmation: false,
			})
		} catch (error) {
			console.log({ error })
			stopWaiting(false)

			let opt = null
			const hadOptIn = auctionToBeEdited['optIn']
			if (hadOptIn) {
				opt = await alertThis({
					message:
						"Unable to place bid, as your bid isn't higher than the current one, would you like to bid again?",
					accept: 'Yes',
					decline: 'No',
				})
				return opt
			} else {
				opt = await alertThis({
					message:
						"Unable to place bid. Most likely your bid isn't higher than the current one. To prevent this from happening during this auction, how would you like to opt into Live Bid?",
					accept: 'Opt In',
					decline: 'Decline',
				})
			}

			let didOptIn = false
			if (opt) {
				didOptIn = await optIn(auctionID)
				if (didOptIn && justJoining) {
					setShowBuyer(true)
					if (ctc) ctc.events.log.monitor(handleAuctionLog)
					else {
						ctc = user.account.contract(auctionCtc, JSON.parse(ctcInfo))
						ctc.events.log.monitor(handleAuctionLog)
					}
					return false
				}
			} else {
				loopVar = await alertThis({
					message: 'Would you like to continue making blind bids?',
					accept: 'Yes',
					decline: 'No',
				})
				return loopVar
			}
		}
		return loopVar
	}

	const joinAuction = async (auctionInfo) => {
		const join = await alertThis({
			message: 'Are you interested in bidding for this NFT?',
			accept: 'Yes',
			decline: 'No',
		})

		if (join) {
			alertThis({
				message: 'Please confirm asset opt-in on your wallet',
				forConfirmation: false,
				persist: true,
			})
			setCurrentAuction(auctionInfo.id)
			try {
				await user.account.tokenAccept(auctionInfo.tokenId)
				alertThis({
					message: 'Opt-In confirmed',
					forConfirmation: false,
				})
			} catch (error) {
				console.log({ error })
				alertThis({
					message:
						'Opt-In failed and as such you cannot bid for this NFT at this point. But you can try again',
					forConfirmation: false,
				})
				return
			}
			const ctc = user.account.contract(
				auctionCtc,
				JSON.parse(auctionInfo.contractInfo)
			)
			let continue_ = true
			while (continue_) {
				continue_ = await handleBid({
					auctionID: auctionInfo.id,
					loopVar: continue_,
					ctc,
					justJoining: true,
				})
			}
		}
	}

	const optIn = async (id) => {
		const agree = await alertThis({
			message: `To view Live Bid, you must pay a small token of 1 ${standardUnit}`,
			accept: 'Pay',
			decline: 'Forfeit',
		})
		if (agree) {
			const userBal = reach.formatCurrency(
				await reach.balanceOf(user.account),
				4
			)
			const resultingBalance = userBal - 1 // Opt-In fee
			const minimumBalance = reach.formatCurrency(
				await reach.minimumBalanceOf(user.account),
				4
			)
			console.log(resultingBalance, minimumBalance)
			if (userBal && resultingBalance > minimumBalance) {
				startWaiting()
				try {
					const auctionToBeEdited = auctions.filter(
						(el) => Number(el.id) === Number(id)
					)[0]
					const ctc = user.account.contract(
						auctionCtc,
						JSON.parse(auctionToBeEdited['contractInfo'])
					)
					const didOptIn = await ctc.apis.Bidder.optIn()
					ctc.events.outcome.monitor(handleAuctionLog)
					auctionToBeEdited['optIn'] = didOptIn
					const leftoverAuctions = auctions.filter((el) => Number(el.id) !== id)
					const updatedAuctions = [auctionToBeEdited, ...leftoverAuctions]
					setAuctions((previous) => updatedAuctions)
					updateLatestAuctions(updatedAuctions)

					stopWaiting()
					alertThis({
						message: 'OptIn successful',
						forConfirmation: false,
					})
					return true
				} catch (error) {
					console.log({ error })
					stopWaiting(false)
					alertThis({
						message: 'OptIn failed',
						forConfirmation: false,
					})
				}
			} else if (resultingBalance < minimumBalance) {
				alertThis({
					message: `Your balance: ${userBal} ${standardUnit}, is insufficient for this bid due to the minimum balance an account should have after a transfer on this network: ${minimumBalance} ${standardUnit}`,
					forConfirmation: false,
				})
				setShowBuyer(false)
				return false
			}
		}
	}

	const ReachContextValue = {
		standardUnit,
		user,
		connectToWallet,
		view,
		setView,
		contract,
		promiseOfConfirmation,
		setPromiseOfConfirmation,
		alertInfo,
		setAlertInfo,
		showAlert,
		setShowAlert,
		showPreloader,
		setShowPreloader,
		setProcessing,
		sleep,
		currentAuction,
		auctions,
		latestAuctions,
		setShowBuyer,
		setShowSeller,
		setShowConnectAccount,
		checkForContract,
		mintNFT,
		alertThis,
		createAuction,
		endAuction,
		optIn,
		joinAuction,
	}

	return (
		<ReachContext.Provider value={ReachContextValue}>
			<Helmet>
				<title>0xAuction | NFT MarketPlace</title>
				<link
					rel='icon'
					href={icon}
				/>
				<link
					rel='apple-touch-icon'
					href={icon}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Helmet>
			{/* The Header */}
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.spaceXBetween,
					s.spaceYCenter,
					app.header
				)}
			>
				<div
					className={cf(app.branding, s.w480_100, s.w360_100)}
					onClick={() => {
						checkForContract(() => {
							setView('App')
						})
					}}
				>
					0xAuction
				</div>
				<div className={cf(s.p0, s.m0, s.w480_100, s.w360_100, app.navParent)}>
					<ul className={cf(s.p0, s.m0, s.flex, s.flexCenter)}>
						<li
							className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
							onClick={() => {
								checkForContract(() => {
									setView('Create')
								})
							}}
						>
							Create
						</li>
						<li
							className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
							onClick={() => {
								checkForContract(() => {
									setView('Sell')
								})
							}}
						>
							Sell
						</li>
						<li
							className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
							onClick={() => {
								checkForContract(async () => {
									if (auctions.length) setView('Buy')
									else
										alertThis({
											message:
												'Please hold while auctions get uploaded. Try again sometime later',
											forConfirmation: false,
										})
								})
							}}
						>
							Buy
						</li>
					</ul>
				</div>
				<button
					className={cf(s.w480_100, s.w360_100, app.connectAccount)}
					onClick={() => {
						setShowConnectAccount(true)
					}}
				>
					{user.address ? user.address : `Connect Account`}
				</button>
			</div>
			{children}
			<div className={cf(s.container, s.flex, s.wMax, app.footer)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter, app.footerBar)}>
					<div
						className={cf(app.footerBranding)}
						onClick={() => {
							setView('App')
						}}
					>
						0xAuction
					</div>
					<div className={cf(s.wMax, app.registered)}>
						0xAuction is the product of Apostrophe Corp. for the Algorand Green
						House Bounty Hack.
					</div>
				</div>
			</div>
			<Alert />
			{showBuyer && <Buyer />}
			{showSeller && <Seller />}
			{showConnectAccount && <ConnectAccount />}
			{processing && <LoadingPreview />}
		</ReachContext.Provider>
	)
}

export default ReachContextProvider

// Hannibal     https://bit.ly/3DpSWp6#i

// The Recluse    https://bit.ly/3UaJj53#i

// Tranquility        https://bit.ly/3fsT4Mv#i

// Axel Rose    https://bit.ly/3U9PGos#i

// Spirit     https://bit.ly/3h0pgYe#i

// daemon    https://bit.ly/3zxJpLG#i

// classic man    https://bit.ly/3fpEaa2#i

// pirate booty    https://bit.ly/3Du6nEs#i

// The General         https://bit.ly/3DRxHOD#i

// ape in technicolor     https://bit.ly/3DtSru3#i
