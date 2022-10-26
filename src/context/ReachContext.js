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
import app from '../styles/App.module.css'
import { Preloader } from '../components/Preloader'
import { Alert } from '../components/Alert'

const reach = loadStdlib(process.env)

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	const [view, setView] = useState('App')

	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})

	const connectToWallet = async (
		walletPreference,
		mnemonic = false,
		secret = ''
	) => {
		delete window.algorand
		switch (walletPreference) {
			case 'MyAlgoConnect':
				reach.setWalletFallback(
					reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect })
				)
				break
			case 'WalletConnect':
				reach.setWalletFallback(
					reach.walletFallback({ providerEnv: 'TestNet', WalletConnect })
				)
				break
			case 'PeraConnect':
				reach.setWalletFallback(
					reach.walletFallback({ providerEnv: 'TestNet', PeraConnect })
				)
				break
			default:
				reach.setWalletFallback(
					reach.walletFallback({ providerEnv: 'TestNet', WalletConnect })
				)
				break
		}
		try {
			const account = mnemonic
				? await reach.newAccountFromMnemonic(secret)
				: await reach.getDefaultAccount()
			setUser({
				account,
				balance: async () => {
					const balAtomic = await reach.balanceOf(account)
					const balance = reach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: reach.formatAddress(account.getAddress()),
			})
		} catch (error) {
			console.error({ error })
		}
	}

	const ReachContextValue = {
		user,
		connectToWallet,
		view,
		setView,
	}

	return (
		<ReachContext.Provider value={ReachContextValue}>
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
				<div className={cf(app.branding)}>Auctoken</div>
				<div className={cf(s.p0, s.m0, app.navParent)}>
					<ul className={cf(s.p0, s.m0, s.flex, s.flexCenter)}>
						<li className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}>
							Create
						</li>
						<li className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}>
							Sell
						</li>
						<li className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}>
							Buy
						</li>
					</ul>
				</div>
				<button className={cf(s.flex, s.flexCenter, app.connectAccount)}>
					{user.address
						? String(user.address).slice(0, 10) + '...'
						: `Connect Account`}
				</button>
			</div>
			{children}
			{/* TODO Add a footer */}
			<div className={app.footer}>
				<div className={app.footerBar}>
					<div className={app.closeQuaters}>
						<div className={app.footerBranding}></div>
						<div className={app.privacy}></div>
					</div>
					<div className={app.footerSocials}>
						<div className={app.footerSocial}></div>
						<div className={app.footerSocial}></div>
						<div className={app.footerSocial}></div>
						<div className={app.footerSocial}></div>
					</div>
					<div className={app.footerDisclaimer}></div>
					<div className={app.registered}></div>
				</div>
			</div>
		</ReachContext.Provider>
	)
}

export default ReachContextProvider
