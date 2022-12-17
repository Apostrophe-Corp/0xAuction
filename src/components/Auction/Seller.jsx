import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import notFound from '../../assets/images/preview.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Seller = () => {
	const {
		standardUnit,
		currentAuction,
		endAuction,
		auctions,
		setShowSeller,
		alertThis,
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
			if (newSet.length === 0) setShowSeller(false)
			const updatedAuction = newSet.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowSeller(false)
			setNewAuction(updatedAuction)
		}
		updateAuctions()
	}, [auctions, currentAuction, setShowSeller])

	useEffect(() => {
		setPreviewBgs({ y: newAuction?.url })
	}, [newAuction?.url])

	useEffect(() => {
		const updateAuctions = async () => {
			const currentAuctions = auctions
			const newSet = await Promise.all(
				currentAuctions.filter(async (el) => (await el.ended()) === false)
			)
			if (newSet.length === 0) setShowSeller(false)
			const updatedAuction = newSet.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowSeller(false)
			setNewAuction(updatedAuction)
		}
		updateAuctions()
	}, [auctions, currentAuction, setShowSeller])

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
						Current Bid
					</h2>
					<span
						className={cf(s.wMax, s.flex, s.flexCenter, auc.currentBidValue)}
					>
						{newAuction.liveBid} {standardUnit}
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
				<div className={cf(s.wMax, s.flex, s.flexCenter, auc.terminateCon)}>
					<button
						className={cf(s.flex, s.flexCenter, auc.terminateBtn)}
						type='button'
						onClick={() => {
							endAuction(newAuction.contractInfo)
						}}
					>
						End Auction
					</button>
					<button
						className={cf(s.flex, s.flexCenter, auc.terminateBtn)}
						type='button'
						onClick={async () => {
							const decision = await alertThis({
								message:
									'Are you sure you want to stop monitoring this auction?',
								accept: 'No',
								decline: 'Yes',
							})
							setShowSeller(decision)
						}}
					>
						Exit
					</button>
				</div>
			</div>
		</div>
	)
}

export default Seller
