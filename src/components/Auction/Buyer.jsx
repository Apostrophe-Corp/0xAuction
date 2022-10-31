import React, { useState, useEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import notFound from '../../assets/images/no_image.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Buyer = () => {
	const { standardUnit, currentAuction, optIn, auctions } = useReach()
	const [auction, setAuction] = useState(
		auctions.filter((el) => Number(el.id) === currentAuction)[0]
	)
	const aucAsset = useRef()

	const setPreviewBgs = ({ x = '', y = '' } = {}) => {
		aucAsset.current.style.background = `url(${x}), url(${y}), url(${notFound})`
		aucAsset.current.style.backgroundPosition = 'center'
		aucAsset.current.style.backgroundRepeat = 'no-repeat'
		aucAsset.current.style.backgroundSize = 'contain'
	}

	const fetchAssetMetadata = (x) => {
		arc69
			.fetch(x)
			.then((data) => {
				if (data.success && data.url) {
					console.log('Media URL:', data.url)
					setPreviewBgs({ x: data.url, y: auction?.url })
				} else {
					setPreviewBgs({ y: auction?.url })
					console.log('No image url found 🥱')
				}
			})
			.catch((x) => {
				setPreviewBgs({ y: auction?.url })
				console.log('No image url found 🥱')
			})
	}

	useEffect(() => {
		setPreviewBgs({ y: auction?.url })
	}, [])

	useEffect(() => {
		fetchAssetMetadata(auction.tokenId)
	}, [])

	useEffect(() => {
		setAuction(auctions.filter((el) => Number(el.id) === currentAuction)[0])
	}, [auctions])

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
						{auction.title}
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
						{auction.yourBid} {standardUnit}
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
						{auction.price} {standardUnit}
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
						{currentAuction.optIn ? auction.liveBid : '####'} {standardUnit}
					</span>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, auc.terminateCon)}>
					<button
						className={cf(s.flex, s.flexCenter, auc.liveBidBtn)}
						type='button'
						onClick={()=>{
							optIn(auction.contractInfo, auction.id)
						}}
					>
						View Live Bid
					</button>
				</div>
			</div>
		</div>
	)
}

export default Buyer