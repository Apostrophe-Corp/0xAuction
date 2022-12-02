import React, { useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import buy from '../../styles/Buy.module.css'
import notFound from '../../assets/images/preview.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
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
					// console.log('Media URL:', expectedData.url)
					setPreviewBgs({ x: expectedData.url, found: true })
				} else {
					console.log('No image url found 🥱')
				}
			} catch (error) {
				console.log('No image url found 🥱')
			}
		}
		fetchAssetMetadata(assetID)
	}, [assetID])

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
						{title}
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

const Auction = ({ assetID, title, desiredPrice, url = '', fullAuction }) => {
	const { standardUnit, joinAuction } = useReach()
	const auctionNFTRef = useRef()

	const setPreviewBgs = ({ x = '', y = '', found = false } = {}) => {
		auctionNFTRef.current.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${x}), url(${y}), url(${
			found ? '' : notFound
		})`
		auctionNFTRef.current.style.backgroundPosition = 'center'
		auctionNFTRef.current.style.backgroundRepeat = 'no-repeat'
		auctionNFTRef.current.style.backgroundSize = 'contain'
	}

	useEffect(() => {
		const fetchAssetMetadata = async (x) => {
			try {
				const expectedData = await arc69.fetch(x)
				if (expectedData.success && expectedData.url) {
					// console.log('Media URL:', expectedData.url)
					setPreviewBgs({ x: expectedData.url, found: true })
				} else {
					console.log('No image url found 🥱')
				}
			} catch (error) {
				console.log('No image url found 🥱')
			}
		}
		fetchAssetMetadata(assetID)
	}, [assetID])

	return (
		<div
			className={cf(s.flex, s.flexCenter, buy.aucAuction)}
			ref={auctionNFTRef}
			onClick={() => {
				joinAuction(fullAuction)
			}}
		>
			<div className={cf(s.flex, s.flex_dColumn, buy.aucAucDetails)}>
				<h3 className={cf(s.m0, s.p0, s.wMax, buy.aucAucTitleText)}>{title}</h3>
				<span className={cf(s.wMax, s.dInlineBlock, buy.aucAucDesiredPrice)}>
					{desiredPrice} {standardUnit}
				</span>
			</div>
		</div>
	)
}

const Buy = () => {
	const { auctions, latestAuctions } = useReach()

	const latestAuctionRef = useRef()

	useEffect(() => {
		if (latestAuctions.length > 2) {
			let progress = 0
			const slide = setInterval(() => {
				progress += 100
				latestAuctionRef.current.style.transform = `translate(-${progress}%,0)`
				const length = (latestAuctions.length - 1) * 100
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
			}, 4000)
			return () => {
				clearInterval(slide)
			}
		}
	}, [latestAuctions])

	return (
		<div className={cf(s.wMax, s.window, buy.buyParent)}>
			<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>Latest Auctions</h1>
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<div className={cf(s.flex, s.flexCenter, buy.latest)}>
					{latestAuctions && (
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
							{latestAuctions.map((el, i) => (
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
			<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>
					Available Auctions
				</h1>
			</div>
			{auctions && (
				<div
					className={cf(
						s.wMax,
						s.flex,
						s.spaceXAround,
						s.spaceYCenter,
						buy.aucAuctions
					)}
				>
					{auctions.map((el, i) => (
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
			)}
		</div>
	)
}

export default Buy
