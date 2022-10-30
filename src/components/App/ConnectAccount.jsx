import React, { useState } from 'react'
import s from '../../styles/Shared.module.css'
import ca from '../../styles/ConnectAccount.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'

const ConnectAccount = () => {
	const {setShowConnectAccount, connectToWallet} = useReach()
	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, ca.conParent)}>
			<div className={cf(s.wMax, ca.conMask)}></div>
			<div className={cf(s.flex, s.flexCenter, ca.conContainer)}>
				<button
				onClick={()=>{
					setShowConnectAccount(false)
				}}
					type='button'
					className={cf(s.flex, s.flexCenter, s.dInlineBlock, ca.closeBtn)}
				>
					Close
				</button>
				<div className={cf(s.w50, s.w480_100, s.w360_100, ca.wallet)}></div>
				<div
					className={cf(
						s.w50,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flex_dColumn,
						s.flexCenter,
						ca.connect
					)}
				>
					{/* <h1
						className={cf(
							s.wMax,
							s.m0,
							s.p0,
							s.flex,
							s.flexCenter,
							ca.connectTitle
						)}
					>
						Connect your wallet
					</h1> */}
					<div className={cf(s.flex, s.flexCenter, ca.connectOption)} onClick={()=>{
							connectToWallet('PeraConnect')
						}}>
						<div className={cf(ca.walletIcon, ca.pera)}></div>
						<div className={cf(s.wMax, ca.walletName)} >
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								Pera Wallet
							</span>
						</div>
					</div>
					<div className={cf(s.flex, s.flexCenter, ca.connectOption)} onClick={()=>{
							connectToWallet('MyAlgoConnect')
						}}>
						<div className={cf(ca.walletIcon, ca.myAlgo)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								MyAlgo Wallet
							</span>
						</div>
					</div>
					<div className={cf(s.flex, s.flexCenter, ca.connectOption)} onClick={()=>{
							connectToWallet('WalletConnect')
						}}>
						<div className={cf(ca.walletIcon, ca.other)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								Other Wallet
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConnectAccount
