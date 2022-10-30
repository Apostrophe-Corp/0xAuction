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
	const [waitingPromise, setWaitingPromise] = useState({})

	const [currentAuction, setCurrentAcution] = useState({})
	const [auctions, setAuctions] = useState([])
	const [latestAuctions, setLatestAuctions] = useState([])

	const [showBuyer, setShowBuyer] = useState(false)
	const [showSeller, setShowSeller] = useState(false)
	const [showConnectAccount, setShowConnectAccount] = useState(false)
	const [contractInstance, setContractInstance] = useState(null)
	const [contract, setContract] = useState('')

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
				// setWaitingPromise({ resolve, reject })
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
				? (await instantReach.newAccountFromMnemonic(secret))
				: (await instantReach.getDefaultAccount())
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

	const checkForContract = async (func) => {
		if (!user.account) {
			alertThis({
				message: 'Connect your wallet account first',
				forConfirmation: false,
			})
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
							// TODO assign events
							setContract({ ctcInfoStr })
							console.log(ctcInfoStr)
							stopWaiting(true)
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
						// TODO assign events
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
								setView('Buy')
							}}
						>
							Buy
						</li>
					</ul>
				</div>
				<button
					className={cf(
						s.flex,
						s.w480_100,
						s.w360_100,
						s.flexCenter,
						app.connectAccount
					)}
					onClick={() => {
						setShowConnectAccount(true)
					}}
				>
					{user.address
						? String(user.address).slice(0, 10) + '...'
						: `Connect Account`}
				</button>
			</div>
			{children}
			{/* TODO Add a footer */}
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
