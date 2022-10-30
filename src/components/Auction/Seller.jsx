import React, { useEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import notFound from '../../assets/images/no_image.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Seller = () => {
	const { standardUnit, currentAuction } = useReach()
	const { assetID, title, url, description, desiredPrice } = currentAuction
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
					setPreviewBgs({ x: data.url, y: url })
				} else {
					setPreviewBgs({ y: url })
					console.log('No image url found 🥱')
				}
			})
			.catch((x) => {
				setPreviewBgs({ y: url })
				console.log('No image url found 🥱')
			})
	}

	useEffect(() => {
		setPreviewBgs({ y: url })
	}, [])

	useEffect(() => {
		fetchAssetMetadata(assetID)
	}, [])
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
						NFT Sale {title}
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
                    {/* TODO Make this dynamic */}
					<span
						className={cf(s.wMax, s.flex, s.flexCenter, auc.currentBidValue)}
					>
						#### {standardUnit}
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
                    {/* TODO Make this dynamic */}
					<span
						className={cf(s.wMax, s.flex, s.flexCenter, auc.desiredBidValue)}
					>
						#### {desiredPrice} {standardUnit}
					</span>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, auc.terminateCon)}>
					<button
						className={cf(s.flex, s.flexCenter, auc.terminateBtn)}
						type='button'
						onClick={() => {}}
					>
						End Auction
					</button>
				</div>
			</div>
		</div>
	)
}

export default Seller
