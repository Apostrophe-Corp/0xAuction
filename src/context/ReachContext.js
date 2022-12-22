import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_MakePeraConnect as MakePeraConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
import { PeraWalletConnect } from '@perawallet/connect'
import * as auctionCtc from '../contracts/build/auction.main.mjs'
import * as mainCtc from '../contracts/build/index.main.mjs'
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

const deadline = 1000000

const providerEnv = 'TestNet'

const reach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

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
	const [[newAuctions, setNewAuctions], [newLatest, setNewLatest]] = [
		useState([]),
		useState([]),
	]

	const [showBuyer, setShowBuyer] = useState(false)
	const [showSeller, setShowSeller] = useState(false)
	const [showConnectAccount, setShowConnectAccount] = useState(false)
	const [contractInstance, setContractInstance] = useState(null)
	const [contract, setContract] = useState('')

	const alertThis = async ({
		message = 'Confirm Action',
		accept = 'Yes',
		decline = 'No',
		forConfirmation = true,
		prompt = false,
		persist = false,
		neutral = false,
		callback = null,
		canClear = false,
	} = {}) => {
		await sleep(300)
		promiseOfConfirmation?.resolve && promiseOfConfirmation.resolve()
		const result = await new Promise((resolve, reject) => {
			setPromiseOfConfirmation({ resolve, reject })
			setAlertInfo((previous) => ({
				message,
				accept,
				decline,
				forConfirmation,
				prompt,
				persist,
				neutral,
				callback,
				canClear,
			}))
			setShowAlert((lastState) => true)
		}).catch((message) => setShowAlert((lastState) => false))
		if (result === undefined) setShowAlert((lastState) => false)
		return result
	}

	const startWaiting = async (monitor = true) => {
		const shouldDisplay = (display) => {
			setShowPreloader(display)
			if (display) setProcessing(display)
		}
		let waiter = undefined
		try {
			await new Promise((resolve, reject) => {
				waitingPro['resolve'] = resolve
				waitingPro['reject'] = reject
				shouldDisplay(true)
				if (monitor) {
					waiter = setTimeout(() => {
						alertThis({
							message: `This process is taking longer than expected. Please consider clearing the cookies used by this site, refresh and reconnect your wallet, then try this again if need be`,
							forConfirmation: false,
						})
						clearTimeout(waiter)
					}, 120000)
				}
			})
			shouldDisplay(false)
		} catch (error) {
			shouldDisplay(false)
		}
		if (monitor) {
			clearTimeout(waiter)
			waiter = undefined
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

	const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))

	const sortBy = (array, key) => {
		if (!array) return array
		if (!Array.isArray(array)) return array
		if (array.length <= 1) return array
		let isInt = false
		return array
			.map((el, i) => {
				isInt = !isNaN(el?.[key])
				return !isInt
					? `${el?.[key]?.[0]
							?.toUpperCase()
							?.concat(el?.[key]?.slice(1))}^-_-^${i}`
					: `${el?.[key]}^-_-^${i}`
			})
			?.sort(
				isInt
					? (a, b) =>
							Number(a?.split('^-_-^')?.[0]) - Number(b?.split('^-_-^')?.[0])
					: undefined
			)
			?.map((el) => array[el?.split('^-_-^')?.[1]])
	}

	const connectToWallet = async (
		walletPreference,
		mnemonic = false,
		secret = ''
	) => {
		startWaiting()
		delete window.algorand
		const instantReach = loadStdlib(process.env)
		switch (walletPreference) {
			case 'PeraConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({
						providerEnv,
						WalletConnect: MakePeraConnect(PeraWalletConnect),
					})
				)
				break
			case 'MyAlgoConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, MyAlgoConnect })
				)
				break
			case 'WalletConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
			case 'Mnemonic':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, PeraConnect })
				)
				break
			default:
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
		}

		try {
			const account = mnemonic
				? await instantReach.newAccountFromMnemonic(secret)
				: await instantReach.getDefaultAccount()
			const postAuction = async ({ what }) => {
				const presentAuctions = auctions
				const tempCtc = account.contract(auctionCtc, what[1])
				const response = await tempCtc.v.live()
				const isLive = response[1]
				if (isLive) {
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
						highestBidder: '',
						ended: async () => {
							const response = await tempCtc.v.live()
							const isLive = response[1]
							return !(
								isLive &&
								reach.bigNumberToNumber(await reach.getNetworkTime()) <
									parseInt(what[2]) + deadline
							)
						},
						ctc: tempCtc,
					})
					setAuctions((previous) => [...presentAuctions])
				}
			}
			if (process.env.REACT_APP_ADMIN_CONTRACT_INFO) {
				try {
					const ctc = account.contract(
						mainCtc,
						JSON.parse(process.env.REACT_APP_ADMIN_CONTRACT_INFO)
					)
					setContractInstance(ctc)
					setContract({ ctcInfoStr: process.env.REACT_APP_ADMIN_CONTRACT_INFO })

					ctc.events.create.monitor(postAuction)
					ctc.events.updateHighestBidder.monitor(updateHighestBidder)
					ctc.events.end.monitor(dropAuction)
				} catch (error) {
					console.log({ error })
				}
			}

			setUser({
				account,
				balance: async (tokenContract = null) => {
					const balAtomic = tokenContract
						? await reach.balanceOf(account, tokenContract)
						: await reach.balanceOf(account)
					const balance = reach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: reach.formatAddress(account.getAddress()),
			})
			setShowConnectAccount(false)
			// setAdminConnection(adminConn)
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

	const postAuction = async ({ what }) => {
		const presentAuctions = auctions
		const tempCtc = user.account.contract(auctionCtc, what[1])
		const response = await tempCtc.v.live()
		const isLive = response[1]
		if (isLive) {
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
				highestBidder: '',
				ended: async () => {
					const response = await tempCtc.v.live()
					const isLive = response[1]
					return !(
						isLive &&
						reach.bigNumberToNumber(await reach.getNetworkTime()) <
							parseInt(what[2]) + deadline
					)
				},
				ctc: tempCtc,
			})
			setAuctions((previous) => [...presentAuctions])
		}
	}

	const dropAuction = async ({ what }) => {
		await sleep(5000).then(async () => {
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
		})
		stopWaiting()
	}

	const updateHighestBidder = async ({ what }) => {
		await sleep(3000).then(async () => {
			const highestBidder = reach.formatAddress(what[1])
			const auctionToBeEdited = auctions.filter(
				(el) => Number(el.id) === parseInt(what[0])
			)[0]
			if (auctionToBeEdited) {
				auctionToBeEdited['highestBidder'] = highestBidder
				const leftOutAuctions = auctions.filter(
					(el) => Number(el.id) !== parseInt(what[0])
				)
				const updatedAuctions = [auctionToBeEdited, ...leftOutAuctions]
				setAuctions((previous) => updatedAuctions)
			}
		})
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
					if (ctcInfo === undefined) return
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
		const launchOpts = { supply: opts['supply'] ?? 1, decimals: 0 }

		let i = 0
		for (i; i < len; i++) {
			const key = optKeys[i]
			if (key === 'name' || key === 'symbol' || key === 'supply') continue
			if (opts[key]) launchOpts[key] = opts[key]
		}

		const note = new Uint8Array(0)

		// console.log(launchOpts)
		try {
			const launchedToken = await reach.launchToken(
				user.account,
				opts['name'],
				opts['symbol'],
				{ ...launchOpts, note }
			)
			setView('App')
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

	const handleAuctionLog_created = async ({ what }) => {
		if (String(user.address) === reach.formatAddress(what[1])) {
			try {
				let auction = null
				sleep(2000).then(() => {
					const presentAuctions = auctions
					auction = presentAuctions.filter(
						(el) => Number(el.id) === parseInt(what[0])
					)[0]
					if (auction) {
						setCurrentAuction(parseInt(what[0]))
						setView('App')
						stopWaiting()
						setShowSeller(true)
					} else {
						stopWaiting()
						setView('App')
						alertThis({
							message:
								'Your auction is live. Click on it on the Buy Page to monitor',
							forConfirmation: false,
						})
					}
				})
			} catch (error) {
				console.log({ error })
			}
		}
	}

	const handleAuctionLog_bidSuccess = async ({ what }) => {
		sleep(4000).then(async () => {
			const newBid = reach.formatCurrency(what[1], 4)
			const currentAuctions = auctions
			const auctionToBeEdited = currentAuctions.filter(
				(el) => Number(el.id) === parseInt(what[0])
			)[0]
			let yourBid = Number(auctionToBeEdited['yourBid']),
				owner = auctionToBeEdited['owner'],
				ctcInfo = auctionToBeEdited['contractInfo'],
				opt = auctionToBeEdited['optIn']
			if (String(owner) !== String(user.address)) {
				auctionToBeEdited['liveBid'] =
					newBid > Number(auctionToBeEdited['yourBid'])
						? newBid
						: Number(auctionToBeEdited['yourBid'])
			} else auctionToBeEdited['liveBid'] = newBid
			if (String(reach.formatAddress(what[2])) === String(user.address)) {
				auctionToBeEdited['yourBid'] = newBid
			}
			const leftOutAuctions = auctions.filter(
				(el) => Number(el.id) !== parseInt(what[0])
			)
			const updatedAuctions = [auctionToBeEdited, ...leftOutAuctions]
			setAuctions((previous) => updatedAuctions)
			if (
				auctionToBeEdited['liveBid'] > yourBid &&
				String(owner) !== String(user.address) &&
				String(auctionToBeEdited['highestBidder']) !== String(user.address)
			) {
				const bidAgain = await alertThis({
					message: `You got outbid for the '${noneNull(what[3])}' auction${
						opt ? `, the highest bid is now ${newBid} ${standardUnit}` : ''
					}. Would you like to bid again?`,
					accept: 'Yes',
					decline: 'No',
				})
				if (bidAgain) {
					let continue_ = false
					do {
						continue_ = await handleBid({
							auctionID: parseInt(what[0]),
							loopVar: continue_,
							ctcInfo,
							justJoining: false,
							callback: (x) => !isNaN(x),
						})
						if (continue_ === null) break
					} while (continue_)
				}
			}
		})
	}

	const handleAuctionLog_endSuccess = async ({ what }) => {
		if (auctions.length === 1) setView('App')
		setShowBuyer(false)
		setShowSeller(false)
		const presentAuc = auctions
		const leftoverAuctions = presentAuc.filter(
			(el) => Number(el.id) !== parseInt(what[0])
		)
		setAuctions((previous) => leftoverAuctions)
	}

	const handleAuctionLog_down = async ({ what }) => {
		stopWaiting()
		try {
			if (reach.formatAddress(what[2]) === String(user.address)) {
				const tempAuctionCtc = user.account.contract(auctionCtc, what[3])
				try {
					const time = reach.bigNumberToNumber(await reach.getNetworkTime())
					if (reach.formatCurrency(what[1], 4) <= 0) {
						alertThis({
							message: `Thank you for using 0xAuction, your NFT would transferred back in a short while`,
							forConfirmation: false,
						})
					} else if (time < parseInt(what[4]) + deadline + 50) {
						const agreeToBid = await alertThis({
							message: `Do you accept the current bid of ${reach.formatCurrency(
								what[1],
								4
							)} ${standardUnit} for the '${noneNull(what[5])}' auction?`,
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
					message: `The '${noneNull(what[5])}' auction has ended`,
					forConfirmation: false,
				})
				setShowBuyer(false)
			}
		} catch (error) {
			console.log({ error })
		}
		setCurrentAuction(null)
	}

	const handleAuctionLog_accepted = async ({ what }) => {
		if (String(reach.formatAddress(what[2])) === String(user.address)) {
			alertThis({
				message: `🥳 Congratulations!!! NFT sold at ${reach.formatCurrency(
					what[1],
					4
				)} ${standardUnit} 🎉`,
				forConfirmation: false,
			})
		} else if (String(reach.formatAddress(what[3])) === String(user.address)) {
			const viewToken = await alertThis({
				message: `🥳 Congratulations!!! You now own this asset: ${parseInt(
					what[4]
				)}, at the cost of ${reach.formatCurrency(
					what[1],
					4
				)} ${standardUnit} 🎉. Proceed to view on AlgoExplorer.io?`,
				accept: 'Yes',
				decline: 'No',
			})
			if (viewToken) {
				window.open(`${algoExplorerURI}/asset/${parseInt(what[4])}`, '_blank')
			}
		} else {
			alertThis({
				message: `The '${noneNull(
					what[0]
				)}' auction finally closed at ${reach.formatCurrency(
					what[1],
					4
				)} ${standardUnit}, with the Auctioneer accepting the highest bid`,
				forConfirmation: false,
			})
		}
	}

	const handleAuctionLog_rejected = async ({ what }) => {
		if (String(reach.formatAddress(what[2])) === String(user.address)) {
			alertThis({
				message: `Thank you for using 0xAuction, your NFT would transferred back in a short while`,
				forConfirmation: false,
			})
		} else if (String(reach.formatAddress(what[3])) === String(user.address)) {
			alertThis({
				message: `Hey, you were the highest Bidder for the '${noneNull(
					what[0]
				)}' auction, but the Auctioneer has decided not to sell this time`,
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `The '${noneNull(
					what[0]
				)}' auction finally closed at ${reach.formatCurrency(
					what[1],
					4
				)} ${standardUnit}, with the Auctioneer rejecting the highest bid`,
				forConfirmation: false,
			})
		}
	}

	const handleAuctionLog_optInSuccess = async ({ what }) => {
		const currentAuctions = auctions
		const auctionToBeEdited = currentAuctions.filter(
			(el) => Number(el.id) === parseInt(what[0])
		)[0]
		if (
			auctionToBeEdited !== undefined &&
			String(reach.formatAddress(what[1])) === String(user.address)
		) {
			auctionToBeEdited['optIn'] = true
			const leftOutAuctions = auctions.filter(
				(el) => Number(el.id) !== parseInt(what[0])
			)
			const updatedAuctions = [auctionToBeEdited, ...leftOutAuctions]
			setAuctions((previous) => updatedAuctions)
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
		const auctionInfo = {
			...auctionParams,
			deadline,
			owner: user.address,
			adminContract: JSON.parse(contract.ctcInfoStr),
		}

		try {
			const ctc = user.account.contract(auctionCtc)
			ctc.p.Seller({ getAuction: auctionInfo })
			ctc.events.created.monitor(handleAuctionLog_created)
			ctc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
			ctc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
			ctc.events.down.monitor(handleAuctionLog_down)
			ctc.events.accepted.monitor(handleAuctionLog_accepted)
			ctc.events.rejected.monitor(handleAuctionLog_rejected)
			ctc.events.optInSuccess.monitor(handleAuctionLog_optInSuccess)
		} catch (error) {
			console.log({ error })
			stopWaiting(false)
			alertThis({
				message: 'Sorry, unable to create auction',
				forConfirmation: false,
			})
		}
	}

	const rejoinAuction = ({ contractInfo = '', id = null } = {}) => {
		if (contractInfo && id !== null) {
			const aucCtc = user.account.contract(auctionCtc, JSON.parse(contractInfo))
			setCurrentAuction(id)
			aucCtc.events.created.monitor(handleAuctionLog_created)
			aucCtc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
			aucCtc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
			aucCtc.events.down.monitor(handleAuctionLog_down)
			aucCtc.events.accepted.monitor(handleAuctionLog_accepted)
			aucCtc.events.rejected.monitor(handleAuctionLog_rejected)
			aucCtc.events.optInSuccess.monitor(handleAuctionLog_optInSuccess)
			setShowSeller(true)
		}
	}

	const continueAuction = ({
		contractInfo = '',
		id = null,
		optIn = false,
	} = {}) => {
		if (contractInfo && id !== null) {
			const aucCtc = user.account.contract(auctionCtc, JSON.parse(contractInfo))
			setCurrentAuction(id)
			aucCtc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
			aucCtc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
			aucCtc.events.down.monitor(handleAuctionLog_down)
			aucCtc.events.optInSuccess.monitor(handleAuctionLog_optInSuccess)
			if (optIn) {
				aucCtc.events.accepted.monitor(handleAuctionLog_accepted)
				aucCtc.events.rejected.monitor(handleAuctionLog_rejected)
			}
			setShowBuyer(true)
			setView('App')
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
				await ctc.a.Auctioneer.stopAuction()
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

	const joinAuction = async (auctionInfo) => {
		if (String(auctionInfo.owner) === String(user.address)) {
			const rejoin = await alertThis({
				message:
					'This is your auction, and as such you are not allowed to place a bid. Would you like to return to monitoring it?',
				accept: 'Yes',
				decline: 'No',
				neutral: true,
			})
			if (rejoin) {
				rejoinAuction({ ...auctionInfo })
			}
		} else {
			const joinIn = await alertThis({
				message: 'Would you like to place a bid? Or require extra information?',
				accept: 'Place Bid',
				decline: 'More Info',
				neutral: true,
				canClear: true,
			})
			if (joinIn === undefined) return null
			const join = Boolean(joinIn)
			if (join) {
				if (String(auctionInfo.highestBidder) === String(user.address)) {
					alertThis({
						message: `You're still the highest bidder for this auction`,
						forConfirmation: false,
					})
					continueAuction({ ...auctionInfo })
				} else {
					alertThis({
						message: 'Please wait',
						forConfirmation: false,
						persist: true,
					})
					if (!(await user.account.tokenAccepted(auctionInfo.tokenId))) {
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
								persist: true,
							})
							await new Promise((resolve) => setTimeout(resolve, 2000))
						} catch (error) {
							console.log({ error })
							alertThis({
								message:
									'Opt-In failed and as such you cannot bid for this NFT at this point. But you can try again',
								forConfirmation: false,
							})
							return
						}
					}

					alertThis({
						message: 'Please wait',
						forConfirmation: false,
						persist: true,
					})
					const ctc = user.account.contract(
						auctionCtc,
						JSON.parse(auctionInfo.contractInfo)
					)
					ctc.events.optInSuccess.monitor(handleAuctionLog_optInSuccess)
					await new Promise((resolve) => {
						let waiter = setTimeout(async () => {
							const currentAuctions = auctions
							const newAuction = currentAuctions.filter(
								(el) => Number(el.id) === Number(auctionInfo.id)
							)[0]
							if (newAuction) {
								auctionInfo = newAuction
								setCurrentAuction(newAuction['id'])
								if (newAuction['optIn']) {
									ctc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
									await new Promise((resolve) => {
										let newWaiter = setTimeout(() => {
											setShowBuyer(true)
											setView('App')
											resolve()
											clearTimeout(newWaiter)
											newWaiter = undefined
										}, 2500)
									})
								} else {
									let continue_ = false
									do {
										continue_ = await handleBid({
											auctionID: auctionInfo.id,
											loopVar: continue_,
											ctc,
											justJoining: true,
										})
										if (continue_ === null) break
									} while (continue_)
								}
							}
							clearTimeout(waiter)
							waiter = undefined
							resolve()
						}, 3000)
					})
				}
			} else {
				window.open(`${algoExplorerURI}/asset/${auctionInfo.tokenId}`, '_blank')
			}
		}
	}

	const placeNewBid = async (auctionInfo) => {
		const ctc = user.account.contract(
			auctionCtc,
			JSON.parse(auctionInfo.contractInfo)
		)
		let continue_ = false
		do {
			continue_ = await handleBid({
				auctionID: auctionInfo.id,
				loopVar: continue_,
				ctc,
				justJoining: false,
			})
			if (continue_ === null) break
		} while (continue_)
	}

	const handleBid = async ({
		auctionID = 0,
		loopVar = false,
		ctc = null,
		ctcInfo = null,
		justJoining = false,
	} = {}) => {
		const auctionToBeEdited = auctions.filter(
			(el) => Number(el.id) === auctionID
		)[0]
		const bidIn = await alertThis({
			message: `Enter your bidding amount${
				auctionToBeEdited['optIn']
					? `. Current bid is at ${auctionToBeEdited['liveBid']} ${standardUnit}`
					: ''
			}`,
			prompt: true,
			callback: (x) => !isNaN(x),
			canClear: true,
		})
		if (bidIn === undefined) return null
		const bid = Number(bidIn)
		startWaiting()
		const userBal = reach.formatCurrency(await reach.balanceOf(user.account), 4)
		const resultingBalance = userBal - bid
		const minimumBalance = reach.formatCurrency(
			await reach.minimumBalanceOf(user.account),
			4
		)
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
		try {
			if (ctc) await ctc.a.Bidder.bid(reach.parseCurrency(bid))
			else {
				ctc = user.account.contract(auctionCtc, JSON.parse(ctcInfo))
				await ctc.a.Bidder.bid(reach.parseCurrency(bid))
			}
			if (justJoining) {
				ctc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
				ctc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
				ctc.events.down.monitor(handleAuctionLog_down)
				// ctc.events.optInSuccess.monitor(handleAuctionLog_optInSuccess)
			}
			auctionToBeEdited['yourBid'] = bid
			auctionToBeEdited['liveBid'] = bid
			const remainingAuctions = auctions.filter(
				(el) => Number(el.id) !== auctionID
			)
			const updatedAuctions = [auctionToBeEdited, ...remainingAuctions]
			setAuctions((previous) => updatedAuctions)
			loopVar = false
			setView('App')
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
			const liveBid = auctionToBeEdited['liveBid']
			if (hadOptIn) {
				opt = await alertThis({
					message: `Unable to place bid, as your bid isn't higher than the current ${
						liveBid ? `bid of ${liveBid} ${standardUnit}` : 'one'
					}, would you like to bid again?`,
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
					if (ctc) {
						ctc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
						ctc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
					} else {
						ctc = user.account.contract(auctionCtc, JSON.parse(ctcInfo))
						ctc.events.bidSuccess.monitor(handleAuctionLog_bidSuccess)
						ctc.events.endSuccess.monitor(handleAuctionLog_endSuccess)
					}
					return true
				} else if (didOptIn) {
					return true
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

	const optIn = async (id) => {
		const agree = await alertThis({
			message: `To view Live Bid, you must pay a small asset of 1 ${standardUnit}`,
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
					ctc.events.accepted.monitor(handleAuctionLog_accepted)
					ctc.events.rejected.monitor(handleAuctionLog_rejected)
					auctionToBeEdited['optIn'] = didOptIn
					const leftoverAuctions = auctions.filter((el) => Number(el.id) !== id)
					const updatedAuctions = [auctionToBeEdited, ...leftoverAuctions]
					setAuctions((previous) => updatedAuctions)

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
		contractInstance,
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
		newAuctions,
		setNewAuctions,
		newLatest,
		setNewLatest,
		setShowBuyer,
		setShowSeller,
		setShowConnectAccount,
		checkForContract,
		mintNFT,
		startWaiting,
		stopWaiting,
		alertThis,
		createAuction,
		endAuction,
		optIn,
		joinAuction,
		placeNewBid,
	}

	useEffect(() => {
		const updateLatestAuctions = (auc) => {
			if (auc.length === 0) return auc
			const length = auc.length
			let x = length - 1
			const newAuctions = []
			for (x; x > length - 6; x--) {
				newAuctions.push(auc[x])
				if (x === 0) break
			}
			newAuctions.push(auc[length - 1])
			return newAuctions
		}
		const updateAuctions = async () => {
			const currentAuctions = auctions
			const len = currentAuctions.length
			const newSet = []
			let i = 0
			for (i; i < len; i++) {
				const el = currentAuctions[i]
				const ended = await el.ended()
				if (ended === false) newSet.push(el)
			}
			const x = sortBy(newSet, 'id')
			setNewAuctions((previous) => [...x])
			const _currentAuctions = updateLatestAuctions(x)
			const y = sortBy(_currentAuctions, 'id')
			setNewLatest((previous) => [...y])
		}
		updateAuctions()
	}, [auctions, setNewAuctions, setNewLatest])

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
									if (newLatest.length) setView('Buy')
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
						const copyToClipboardCtc = async () => {
							navigator.clipboard.writeText(contract.ctcInfoStr)
						}
						return !user.address
							? setShowConnectAccount(true)
							: process.env.REACT_APP_ADMIN_CONTRACT_INFO
							? alertThis({
									message: 'Your wallet is connected',
									forConfirmation: false,
							  })
							: contract.ctcInfoStr
							? (copyToClipboardCtc(),
							  alertThis({
									message:
										'Your wallet is connected. Copied the 0xAuction contract information to the clipboard',
									forConfirmation: false,
							  }))
							: alertThis({
									message: 'Your wallet is connected',
									forConfirmation: false,
							  })
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
						Copyright &copy; Apostrophe Corp 2022.
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
