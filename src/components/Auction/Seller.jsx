import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import notFound from '../../assets/images/preview.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'
import Deadline from './Deadline'

const arc69 = new Arc69()

const Seller = () => {
	const {
		standardUnit,
		currentAuction,
		endAuction,
		newAuctions,
		setShowSeller,
		alertThis,
	} = useReach()

	const aucAsset = useRef()
	const [newAuction, setNewAuction] = useState({})
	const [title, setTitle] = useState('')


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
			const currentAuctions = newAuctions
			if (currentAuctions.length === 0) setShowSeller(false)
			const updatedAuction = currentAuctions.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowSeller(false)
			setNewAuction(updatedAuction)
		}
		updateAuctions()
	}, [newAuctions, currentAuction, setShowSeller])

	useEffect(() => {
		const updateAuctions = async () => {
			const currentAuctions = newAuctions
			if (currentAuctions.length === 0) setShowSeller(false)
			const updatedAuction = currentAuctions.filter(
				(el) => Number(el?.id) === currentAuction
			)[0]
			if (!updatedAuction) setShowSeller(false)
			setNewAuction(updatedAuction)
			const fetchAssetMetadata = ({ url = '', tokenId = 0 }) => {
				arc69
					.fetch(tokenId)
					.then((data) => {
						if (data.success && data.url) {
							// console.log('Media URL:', data.url)
							setTitle(`${data?.name} (${data?.['unit-name']})`)
							setPreviewBgs({ x: data.url, y: url, found: true })
						} else {
							setPreviewBgs({ y: url })
						}
					})
					.catch((x) => {
						setPreviewBgs({ y: url })
					})
			}
			fetchAssetMetadata(updatedAuction)
		}
		updateAuctions()
	}, [newAuctions, currentAuction, setShowSeller])

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
						{title ?? newAuction.title}
					</h2>
				</div>
				<div
					className={cf(s.wMax, auc.aucAsset)}
					ref={aucAsset}
				></div>
				<Deadline blockCreated ={newAuction.blockCreated}/>
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
