import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { FaExclamation } from 'react-icons/fa'
import s from '../../styles/Shared.module.css'
import buy from '../../styles/Buy.module.css'
import notFound from '../../assets/images/preview.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import * as auctionCtc from '../../contracts/build/auction.main.mjs'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const LatestAuction = ({
	assetID,
	title,
	description,
	desiredPrice,
	fullAuction,
}) => {
	const { standardUnit, joinAuction } = useReach()
	const previewRef = useRef()
	const [uName, setUName] = useState('')
	const [name, setName] = useState(title)

	const setPreviewBgs = ({ x = '', y = '', found = false } = {}) => {
		previewRef.current.style.background = `url(${x}), url(${y}), url(${
			found ? '' : notFound
		})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	useEffect(() => {
		const fetchAssetMetadata = async (x) => {
			try {
				const expectedData = await arc69.fetch(x)
				if (expectedData.success && expectedData.url) {
					const unit_name = expectedData?.['unit-name'] ?? title
					setUName(unit_name)
					const _name = expectedData?.['name'] ?? 'NFT'
					setName(_name)
					// console.log('Media URL:', expectedData.url)
					setPreviewBgs({ x: expectedData.url, found: true })
				}
			} catch (error) {
				setPreviewBgs({ x: '', found: false })
			}
		}
		fetchAssetMetadata(assetID)
	}, [assetID, title])

	return (
		<div
			className={cf(s.wMax, s.flex, s.flexCenter, buy.latestAuction)}
			onClick={() => {
				joinAuction(fullAuction)
			}}
		>
			<div
				className={cf(s.w50, s.w480_100, s.w360_100, buy.auctionNFT)}
				ref={previewRef}
			></div>
			<div className={cf(s.w50, s.w480_100, s.w360_100, buy.auctionDetails)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter, buy.auctionTitle)}>
					<h2 className={cf(s.wMax, s.m0, s.p0, buy.auctionTitleText)}>
						{name} ({uName})
					</h2>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, buy.auctionDes)}>
					<span className={cf(s.wMax, s.dInlineBlock, buy.auctionDesText)}>
						{description}
					</span>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, buy.desiredPrice)}>
					<span className={cf(s.wMax, s.dInlineBlock, buy.desiredPriceText)}>
						{desiredPrice} {standardUnit}
					</span>
				</div>
			</div>
		</div>
	)
}

const Auction = ({
	ended = false,
	assetID,
	title,
	desiredPrice,
	url = '',
	fullAuction,
}) => {
	const {
		standardUnit,
		joinAuction,
		reach,
		alertThis,
		user,
		startWaiting,
		stopWaiting,
	} = useReach()
	const auctionNFTRef = useRef()
	const [uName, setUName] = useState('')
	const [name, setName] = useState(title)

	const setPreviewBgs = ({ x = '', y = '', found = false } = {}) => {
		auctionNFTRef.current.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${x}), url(${y}), url(${
			found ? '' : notFound
		})`
		auctionNFTRef.current.style.backgroundPosition = 'center'
		auctionNFTRef.current.style.backgroundRepeat = 'no-repeat'
		auctionNFTRef.current.style.backgroundSize = 'contain'
	}

	const handleEnded = async () => {
		if (String(fullAuction.owner) === String(user.address)) {
			alertThis({
				message: 'Please wait as we retrieve the current bid',
				forConfirmation: false,
				persist: true,
			})

			const ctcAdmin = (
				await reach.newAccountFromMnemonic(
					process.env.REACT_APP_ADMIN_PASSPHRASE
				)
			).contract(auctionCtc, JSON.parse(fullAuction.contractInfo))
			const ctcUser = user.account.contract(
				auctionCtc,
				JSON.parse(fullAuction.contractInfo)
			)
			const bid = (await ctcAdmin.v.highestPrice())[1]
			if (bid !== null) {
				let userChoice = undefined
				let complete = false
				let retries = 0
				while (!complete) {
					if (retries === 4) {
						stopWaiting()
						alertThis({
							message: 'Maximum retries reached',
							forConfirmation: false,
						})
						if (userChoice) await ctcAdmin.safeApis.Auctioneer.acceptSale()
						else await ctcAdmin.safeApis.Auctioneer.rejectSale()
						complete = true
						break
					}
					if (userChoice === undefined) {
						const agreeToBid = await alertThis({
							message: `Do you accept the current bid of ${reach.formatCurrency(
								bid,
								4
							)} ${standardUnit} for this auction?`,
							accept: 'Yes',
							decline: 'No',
						})
						userChoice = agreeToBid
					}
					startWaiting()
					alertThis({
						message: 'Please sign your transactions...',
						forConfirmation: false,
						persist: true,
					})
					const result = userChoice
						? await ctcUser.safeApis.Auctioneer.acceptSale()
						: await ctcUser.safeApis.Auctioneer.rejectSale()
					if (result[0] === 'Some') {
						complete = true
						stopWaiting()
						alertThis({
							message: 'Success',
							forConfirmation: false,
						})
					} else {
						alertThis({
							message: `The last transaction failed, so we are sending you a new one`,
							forConfirmation: false,
						})
						await new Promise((resolve) => setTimeout(resolve, 2500))
					}
					if (!complete) retries++
				}
			}
		} else {
			const agree = await alertThis({
				message: `This auction has ended but the Auctioneer hasn't made a decision to sell. Would you mind helping to update the contract state?`,
				accept: 'Yes',
				decline: 'No',
			})
			if (agree) {
				alertThis({
					message: `Thanks so much for your contribution`,
					forConfirmation: false,
				})
				const ctcAdmin = (
					await reach.newAccountFromMnemonic(
						process.env.REACT_APP_ADMIN_PASSPHRASE
					)
				).contract(auctionCtc, JSON.parse(fullAuction.contractInfo))
				await ctcAdmin.safeApis.Bidder.updateState()
			}
		}
	}

	useEffect(() => {
		const fetchAssetMetadata = async (x) => {
			try {
				const expectedData = await arc69.fetch(x)
				if (expectedData.success && expectedData.url) {
					const unit_name = expectedData?.['unit-name'] ?? title
					setUName(unit_name)
					const _name = expectedData?.['name'] ?? 'NFT'
					setName(_name)
					// console.log('Media URL:', expectedData.url)
					setPreviewBgs({ x: expectedData.url, found: true })
				}
			} catch (error) {
				setPreviewBgs({ x: '', found: false })
			}
		}
		fetchAssetMetadata(assetID)
	}, [assetID, title])

	return (
		<div
			className={cf(s.flex, s.flexCenter, buy.aucAuction)}
			ref={auctionNFTRef}
			onClick={() => {
				ended ? handleEnded() : joinAuction(fullAuction)
			}}
		>
			<div className={cf(s.flex, s.flex_dColumn, buy.aucAucDetails)}>
				<h3 className={cf(s.m0, s.p0, s.wMax, buy.aucAucTitleText)}>
					{name} ({uName})
				</h3>
				<span className={cf(s.wMax, s.dInlineBlock, buy.aucAucDesiredPrice)}>
					{desiredPrice} {standardUnit}
				</span>
			</div>
		</div>
	)
}

const Buy = () => {
	const latestAuctionRef = useRef()
	const { alertThis, newAuctions, newLatest, endedAuctions, setView } =
		useReach()
	const [notified, setNotified] = useState(true)

	useLayoutEffect(() => {
		if (!newAuctions.length && !endedAuctions.length) {
			setView('App')
			// alertThis({
			// 	message:
			// 		'Please hold while auctions get uploaded. Try again sometime later',
			// 	forConfirmation: false,
			// })
		}
	}, [newAuctions, endedAuctions, setView, alertThis])

	useEffect(() => {
		let slide = undefined
		let progress = 0
		slide = setInterval(() => {
			if (newLatest.length > 2) {
				progress += 100
				latestAuctionRef.current.style.transform = `translate(-${progress}%,0)`
				const length = (newLatest.length - 1) * 100
				if (progress === length) {
					const revert = setTimeout(() => {
						latestAuctionRef.current.style.transition = `none`
						progress = 0
						const restore = setTimeout(() => {
							latestAuctionRef.current.style.transform = `translate(${progress}%,0)`
							const animate = setTimeout(() => {
								latestAuctionRef.current.style.transition = `transform .5s`
								clearTimeout(animate)
							}, 1000)
							clearTimeout(restore)
						}, 1000)
						clearTimeout(revert)
					}, 1000)
				}
			}
		}, 4000)

		return () => {
			clearInterval(slide)
			slide = undefined
		}
	}, [newLatest])

	useEffect(() => {
		if (!newAuctions.length && !endedAuctions.length) setView('App')
	}, [newAuctions, endedAuctions, setView])

	return (
		<div className={cf(s.wMax, s.window, buy.buyParent)}>
			<div
				className={cf(
					s.flex,
					s.flexCenter,
					buy.exBox,
					!notified ? buy.notified : ''
				)}
				onClick={() => {
					alertThis({
						message: `Transactions are not coming up on your wallet? If so, confirm pop-ups are enabled for 0xAuction, then clear its cookies and site data, refresh the page, then make a new wallet connection 🙂`,
						forConfirmation: false,
					})
					setNotified(false)
				}}
			>
				<FaExclamation className={cf(buy.ex)} />
			</div>
			{newLatest.length > 0 ? (
				<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
					<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>
						Latest Listings
					</h1>
				</div>
			) : (
				<div></div>
			)}
			{newLatest.length > 0 ? (
				<div className={cf(s.wMax, s.flex, s.flexCenter)}>
					<div className={cf(s.flex, s.flexCenter, buy.latest)}>
						{newLatest && (
							<div
								className={cf(
									s.flex,
									s.wMax,
									s.flexCenter,
									s.flex_dColumn,
									buy.latestAuctions
								)}
								ref={latestAuctionRef}
							>
								{newLatest.map((el, i) => (
									<LatestAuction
										key={i}
										fullAuction={el}
										assetID={el.tokenId}
										title={el.title}
										desiredPrice={el.price}
										description={el.description}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			) : (
				<div></div>
			)}
			{newAuctions.length > 0 ? (
				<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
					<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>
						Available Auctions
					</h1>
				</div>
			) : (
				<div></div>
			)}
			{newAuctions.length > 0 ? (
				<div
					className={cf(
						s.wMax,
						s.flex,
						s.spaceXAround,
						s.spaceYCenter,
						buy.aucAuctions
					)}
				>
					{newAuctions.map((el, i) => (
						<Auction
							key={i}
							fullAuction={el}
							assetID={el.tokenId}
							title={el.title}
							desiredPrice={el.price}
							description={el.description}
						/>
					))}
				</div>
			) : (
				<div></div>
			)}
			{endedAuctions.length > 0 ? (
				<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
					<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>
						Ended Auctions
					</h1>
				</div>
			) : (
				<div></div>
			)}
			{endedAuctions.length > 0 ? (
				<div
					className={cf(
						s.wMax,
						s.flex,
						s.spaceXAround,
						s.spaceYCenter,
						buy.aucAuctions
					)}
				>
					{endedAuctions.map((el, i) => (
						<Auction
							ended={true}
							key={i}
							fullAuction={el}
							assetID={el.tokenId}
							title={el.title}
							desiredPrice={el.price}
							description={el.description}
						/>
					))}
				</div>
			) : (
				<div></div>
			)}
		</div>
	)
}

export default Buy
