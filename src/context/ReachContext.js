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
import { Preloader } from '../components/Preloader'
import { Alert } from '../components/Alert'
import { Buyer, Seller } from '../components/Auction'
import { ConnectAccount, LoadingPreview } from '../components/App'

const algoExplorerURI = {
	TestNet: 'https://testnet.algoexplorer.io',
	MainNet: 'https://algoexplorer.io',
}['TestNet']

const deadline = 30

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

	const [currentAuction, setCurrentAuction] = useState({})
	const [auctions, setAuctions] = useState([])
	const [latestAuctions, setLatestAuctions] = useState([])

	const [showBuyer, setShowBuyer] = useState(false)
	const [showSeller, setShowSeller] = useState(false)
	const [showConnectAccount, setShowConnectAccount] = useState(false)
	const [contractInstance, setContractInstance] = useState(null)
	const [contract, setContract] = useState('')

	const updateLatestAuctions = (auc) => {
		const length = auc.length
		let x = length
		const newAuctions = []
		for (x; x > length - 6; x--) {
			newAuctions.push(auc[x])
			if (x === 0) break
		}
		newAuctions.push(auc[length - 1])
		setLatestAuctions((previous) => newAuctions)
	}

	const alertThis = ({
		message = 'Confirm Action',
		accept = 'Yes',
		decline = 'No',
		forConfirmation = true,
		prompt = false,
	} = {}) => {
		return new Promise((resolve) => {
			setPromiseOfConfirmation({ resolve })
			setAlertInfo((previous) => ({
				message,
				accept,
				decline,
				forConfirmation,
				prompt,
			}))
			setShowAlert((lastState) => true)
		})
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
				balance: async () => {
					const balAtomic = await instantReach.balanceOf(account)
					const balance = instantReach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: instantReach.formatAddress(account.getAddress()),
			})
			setShowConnectAccount(false)
			alertThis({
				message: 'Connection to wallet was successful',
				forConfirmation: false,
			})
		} catch (error) {
			console.error({ error })
			alertThis({
				message:
					'An error occurred, unable to connect to wallet. Please try again',
				forConfirmation: false,
			})
		}
	}

	const postAuction = ({ what }) => {
		const presentAuctions = auctions
		presentAuctions.push({
			id: parseInt(what[0]),
			contractInfo: JSON.stringify(what[1],null),
			blockCreated: parseInt(what[2]),
			owner: what[3],
			title: what[4],
			description: what[5],
			price: parseInt(what[6]),
			tokenId: parseInt(what[7]),
		})
		setAuctions((previous) => presentAuctions)
		updateLatestAuctions(presentAuctions)
	}

	const dropAuction = ({ what }) => {
		const remainingAuctions = auctions.filter(
			(el) => el.id !== parseInt(what[0])
		)
		setAuctions((previous) => remainingAuctions)
		updateLatestAuctions(remainingAuctions)
	}

	const checkForContract = async (func) => {
		if (!user.account) {
			const connect = await alertThis({
				message: 'Connect your wallet account first',
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
				})

				if (shouldDeploy) {
					startWaiting()
					try {
						const ctc = user.account.contract(mainCtc)
						setContractInstance(ctc)
						ctc.p.Admin({})
						await ctc.getInfo().then((infoStr) => {
							const ctcInfoStr = JSON.stringify(infoStr, null)
							ctc.events.create.monitor(postAuction)
							ctc.events.end.monitor(dropAuction)
							setContract({ ctcInfoStr })
							console.log(ctcInfoStr)
							stopWaiting()
							alertThis({
								message: `Deployed successfully, here's the contract info: ${ctcInfoStr}.`,
								forConfirmation: false,
							})
						})
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
						message: `Enter the contract info the 0xAuction you'll to connect to`,
						prompt: true,
					})
					try {
						const ctc = user.account.contract(mainCtc, JSON.parse(ctcInfo))
						setContractInstance(ctc)
						setContract({ ctcInfoStr: ctcInfo })
						ctc.events.create.monitor(postAuction)
						ctc.events.end.monitor(dropAuction)
						alertThis({
							message: 'Successfully attached',
							forConfirmation: false,
						})
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
		console.log(launchOpts)
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
	}

	const auctionCreated = async ({ what }) => {
		try {
			await contractInstance.apis.Auctions.created({
				id: parseInt(what[0]),
				contractInfo: what[1],
				blockCreated: parseInt(what[2]),
				owner: what[3],
				title: what[4],
				description: what[5],
				price: parseInt(what[6]),
			})
			alertThis({
				message: 'Auction has been sent to OxAuction',
				forConfirmation: false,
			})
		} catch (error) {
			console.log({ error })
			alertThis({
				message:
					'Sorry, unable to send your auction to OxAuction. Just wait a while, and after a few transaction signings, your NFT will be returned to you',
				forConfirmation: false,
			})
		}
	}

	const handleAuctionLog = async ({ what }) => {
		switch (what[0]) {
			case ifState('bidSuccess'):
				if (currentAuction.id === parseInt(what[1])) {
					setCurrentAuction({
						...currentAuction,
						liveBid: parseInt(what[2]),
					})
				}
				break
			case ifState('endSuccess'):
				alertThis({
					message: `This auction's bidding window has been closed by the Auctioneer. The final bid was ${parseInt(
						what[2]
					)}`,
					forConfirmation: false,
				})
				const remainingAuctions = auctions.filter(
					(el) => el.id !== parseInt(what[1])
				)
				setAuctions((previous) => remainingAuctions)
				updateLatestAuctions(remainingAuctions)
				setShowBuyer(false)
				setShowSeller(false)
				break
			case ifState('down'):
				try {
					await contractInstance.apis.Auctions.ended({
						id: parseInt(what[1]),
						blockEnded: await reach.getNetworkTime(),
						lastBid: currentAuction.liveBid,
					})
				} catch (error) {
					console.log({ error })
				}
				break
			case ifState('accepted'):
				// If the user is opt into this auction's live bid notification (check possibly through an object) then alert that the final bid got accepted
				break
			case ifState('rejected'):
				// If the user is opt into this auction's live bid notification (check possibly through an object) then alert that the final bid got accepted
				break
			default:
				break
		}
	}

	const createAuction = async (auctionParams) => {
		startWaiting()
		const auctionInfo = {
			...auctionParams,
			id:
				auctions.length > 0
					? auctions.length === 1
						? auctions[0].id + 1
						: Number(auctions.reduce((a, b) => (a.id > b.id ? a.id : b.id))) + 1
					: 1,
			deadline,
			owner: user.address,
		}

		try {
			const ctc = user.account.contract(auctionCtc)
			ctc.p.Seller({ getAuction: auctionInfo })
			await ctc.getInfo()
			ctc.events.created.monitor(auctionCreated)
			ctc.events.log.monitor(handleAuctionLog)
			setCurrentAuction({ ...auctionInfo, ctc, liveBid: 0 })
			stopWaiting()
			alertThis({
				message: 'Auction created successfully',
				forConfirmation: false,
			})
			setShowSeller(true)
		} catch (error) {
			console.log({ error })
			alertThis({
				message: 'Sorry, unable to create auction',
				forConfirmation: false,
			})
			stopWaiting(false)
		}
	}

	const endAuction = async () => {
		const end = await alertThis({
			message: 'Confirm action',
			accept: 'Cancel',
			decline: 'End Auction',
		})
		if (!end) {
			startWaiting()
			try {
				await currentAuction.ctc.a.Auctioneer.stopAuction().then(
					async (res) => {
						try {
							await contractInstance.apis.Auctions.ended({
								id: parseInt(res.id),
								blockCreated: parseInt(res.blockCreated),
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
					}
				)
				stopWaiting()
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
		const join = await alertThis({
			message: 'Are you interested in bidding for this auction?',
			accept: 'Yes',
			decline: 'No',
		})

		if (join) {
			const ctc = user.account.contract(auctionCtc, JSON.parse(auctionInfo.contractInfo))
			setCurrentAuction({...auctionInfo, ctc, liveBid: 0, yourBid: 0, optIn: false})
			setShowBuyer(true)
			const bid = await alertThis({
				message: 'Enter your bidding amount',
				prompt: true,
			})
			startWaiting()
			try {
				const bidRes = await ctc.a.Bidder.bid(reach.parseCurrency(bid))
				setCurrentAuction({ ...currentAuction, yourBid: bidRes[1] })
				stopWaiting()
				alertThis({
					message: 'Bid placed',
					forConfirmation: false,
				})
			} catch (error) {
				console.log({ error })
				stopWaiting()
				alertThis({
					message: `Unable to place bid. Most likely someone's outbid you`,
					forConfirmation: false,
				})
				
				const opt = await alertThis({
					message: 'To prevent this from happening during this auction, how would you like to opt into Live Bid?',
					accept: 'Opt In',
					decline: 'Decline',
				})

				if (opt) {
					optIn()
				}
			}
		}
	}

	const optIn = async () => {
		const agree = await alertThis({
			message: `To view Live Bid, you must pay a small token of 1 ${standardUnit}`,
			accept: 'Pay',
			decline: 'Forfeit',
		})
		if (agree) {
			startWaiting()
			try {
				await currentAuction.ctc.a.Bidder.optIn().then((data) => {
					setCurrentAuction({
						...currentAuction,
						optIn: data,
					})
				})
				stopWaiting()
				alertThis({
					message: 'OptIn successful',
					forConfirmation: false,
				})
			} catch (error) {
				console.log({ error })
				stopWaiting(false)
				alertThis({
					message: 'OptIn failed',
					forConfirmation: false,
				})
			}
		}
	}

	const ReachContextValue = {
		standardUnit,
		user,
		connectToWallet,
		view,
		setView,
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
								checkForContract(() => {
									setView('Buy')
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
						0xAuction is the product of Apostrophe Corp. for the Live Onchain
						Notifications Algorand Green House Hack Category.
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
