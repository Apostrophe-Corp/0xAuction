import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import notFound from '../../assets/images/no_image.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Buyer = () => {
	const {
		standardUnit,
		currentAuction,
		optIn,
		auctions,
		setShowBuyer,
		alertThis,
		placeNewBid,
	} = useReach()

	const aucAsset = useRef()
	const [newAuction, setNewAuction] = useState({})

	const setPreviewBgs = ({ x = '', y = '', found = false } = {}) => {
		aucAsset.current.style.background = `url(${x}), url(${y}), url(${
			found ? '' : notFound
		})`
		aucAsset.current.style.backgroundPosition = 'center'
		aucAsset.current.style.backgroundRepeat = 'no-repeat'
		aucAsset.current.style.backgroundSize = 'contain'
	}

	useLayoutEffect(() => {
		const updateAuctions = async () => {
			const currentAuctions = auctions
			const newSet = await Promise.all(
				currentAuctions.filter(async (el) => (await el.ended()) === false)
			)
			if (newSet.length === 0) setShowBuyer(false)
			const updatedAuction = newSet.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowBuyer(false)
			setNewAuction(updatedAuction)
		}
		updateAuctions()
	}, [auctions, currentAuction, setShowBuyer])

	useEffect(() => {
		setPreviewBgs({ y: newAuction?.url })
	}, [newAuction?.url])

	useEffect(() => {
		const updateAuctions = async () => {
			const currentAuctions = auctions
			const newSet = await Promise.all(
				currentAuctions.filter(async (el) => (await el.ended()) === false)
			)
			if (newSet.length === 0) setShowBuyer(false)
			const updatedAuction = newSet.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowBuyer(false)
			setNewAuction(updatedAuction)
		}
		updateAuctions()
	}, [auctions, currentAuction, setShowBuyer])

	useEffect(() => {
		const fetchAssetMetadata = (x) => {
			arc69
				.fetch(x)
				.then((data) => {
					if (data.success && data.url) {
						// console.log('Media URL:', data.url)
						setPreviewBgs({ x: data.url, y: newAuction?.url, found: true })
					} else {
						setPreviewBgs({ y: newAuction?.url })
						console.log('No image url found 🥱')
					}
				})
				.catch((x) => {
					setPreviewBgs({ y: newAuction?.url })
					console.log('No image url found 🥱')
				})
		}
		fetchAssetMetadata(newAuction.tokenId)
	}, [newAuction.tokenId, newAuction?.url])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, auc.auctionParent)}>
			<div className={cf(s.wMax, auc.auctionMask)}></div>
			<div className={cf(s.flex, s.flexCenter, auc.aucView)}>
				<div className={cf(s.wMax, auc.aucTitle)}>
					<h2
						className={cf(
							s.m0,
							s.p0,
							s.wMax,
							s.flex,
							s.flexCenter,
							auc.aucTitleText
						)}
					>
						{newAuction.title}
					</h2>
				</div>
				<div
					className={cf(s.wMax, auc.aucAsset)}
					ref={aucAsset}
				></div>
				<div
					className={cf(
						s.w50,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flexCenter,
						auc.currentBid
					)}
				>
					<h2
						className={cf(
							s.m0,
							s.p0,
							s.wMax,
							s.flex,
							s.flexCenter,
							auc.bidText
						)}
					>
						Your Bid
					</h2>
					<span
						className={cf(s.wMax, s.flex, s.flexCenter, auc.currentBidValue)}
					>
						{newAuction.yourBid} {standardUnit}
					</span>
				</div>
				<div
					className={cf(
						s.w50,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flexCenter,
						auc.desiredBid
					)}
				>
					<h2
						className={cf(
							s.m0,
							s.p0,
							s.wMax,
							s.flex,
							s.flexCenter,
							auc.bidText
						)}
					>
						Desired Bid
					</h2>
					<span
						className={cf(s.wMax, s.flex, s.flexCenter, auc.desiredBidValue)}
					>
						{newAuction.price} {standardUnit}
					</span>
				</div>
				<div
					className={cf(
						s.w50,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flexCenter,
						auc.desiredBid
					)}
				>
					<h2
						className={cf(
							s.m0,
							s.p0,
							s.wMax,
							s.flex,
							s.flexCenter,
							auc.bidText
						)}
					>
						Live Bid
					</h2>
					<span className={cf(s.wMax, s.flex, s.flexCenter, auc.liveBidValue)}>
						{newAuction.optIn ? newAuction.liveBid : '####'} {standardUnit}
					</span>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, auc.terminateCon)}>
					{!newAuction.optIn && (
						<button
							className={cf(s.flex, s.flexCenter, auc.liveBidBtn)}
							type='button'
							onClick={() => optIn(newAuction.id)}
						>
							View Live Bid
						</button>
					)}
					{newAuction.liveBid > newAuction.yourBid && (
						<button
							className={cf(s.flex, s.flexCenter, auc.liveBidBtn)}
							type='button'
							onClick={() => placeNewBid(newAuction)}
						>
							Place New Bid
						</button>
					)}
					<button
						className={cf(s.flex, s.flexCenter, auc.terminateBtn)}
						type='button'
						onClick={async () => {
							const decision = await alertThis({
								message: 'Are you sure you want to pull out of this auction?',
								accept: 'No',
								decline: 'Yes',
							})
							setShowBuyer(decision)
						}}
					>
						Exit
					</button>
				</div>
			</div>
		</div>
	)
}

export default Buyer
