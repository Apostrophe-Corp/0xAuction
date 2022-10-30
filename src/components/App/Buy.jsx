import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import buy from '../../styles/Buy.module.css'
import notFound from '../../assets/images/no_image.jpg'
import { useReach, fmtClasses as cf } from '../../hooks'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const dummyText = [
	{
		assetID: 912646033,
		url: 'https://bit.ly/3gD1nFM#i',
		title: 'NFT Sale for This NFT - 1',
		description:
			'Image by Graphue on Freepik. Some dummy text... Some dummy text... Some dummy Text... Some dummy text... Some dummmy text... Some dummy text...X',
		desiredPrice: '999.99',
	},
	{
		assetID: 912646040,
		url: 'https://bit.ly/3gD1nFM#i',
		title: 'NFT Sale for This NFT - 2',
		description:
			'Image by Graphue on Freepik. Some dummy text... Some dummy text... Some dummy Text... Some dummy text... Some dummmy text... Some dummy text...X',
		desiredPrice: '999.99',
	},
	{
		assetID: 912646047,
		url: 'https://bit.ly/3gD1nFM#i',
		title: 'NFT Sale for This NFT - 3',
		description:
			'Image by Graphue on Freepik. Some dummy text... Some dummy text... Some dummy Text... Some dummy text... Some dummmy text... Some dummy text...X',
		desiredPrice: '999.99',
	},
	{
		assetID: 912646027,
		url: 'https://bit.ly/3gD1nFM#i',
		title: 'NFT Sale for This NFT - 4',
		description:
			'Image by Graphue on Freepik. Some dummy text... Some dummy text... Some dummy Text... Some dummy text... Some dummmy text... Some dummy text...X',
		desiredPrice: '999.99',
	},{
		assetID: 912646033,
		url: 'https://bit.ly/3gD1nFM#i',
		title: 'NFT Sale for This NFT - 1',
		description:
			'Image by Graphue on Freepik. Some dummy text... Some dummy text... Some dummy Text... Some dummy text... Some dummmy text... Some dummy text...X',
		desiredPrice: '999.99',
	},
]

const LatestAuction = ({ assetID, url, title, description, desiredPrice }) => {
	const { standardUnit } = useReach()
	const previewRef = useRef()

	const setPreviewBgs = ({ x = '', y = '' } = {}) => {
		previewRef.current.style.background = `url(${x}), url(${y}), url(${notFound})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
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
		<div className={cf(s.wMax, s.flex, s.flexCenter, buy.latestAuction)}>
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

const Auction = ({ assetID, title, description, desiredPrice, url }) => {
	const { standardUnit } = useReach()
	const auctionNFTRef = useRef()

	const setPreviewBgs = ({ x = '', y = '' } = {}) => {
		auctionNFTRef.current.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${x}), url(${y}), url(${notFound})`
		auctionNFTRef.current.style.backgroundPosition = 'center'
		auctionNFTRef.current.style.backgroundRepeat = 'no-repeat'
		auctionNFTRef.current.style.backgroundSize = 'contain'
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
		<div
			className={cf(s.flex, s.flexCenter, buy.aucAuction)}
			ref={auctionNFTRef}
		>
			<div
				className={cf(s.flex, s.flex_dColumn, buy.aucAucDetails)}
			>
				<h3 className={cf(s.m0, s.p0, s.wMax, buy.aucAucTitleText)}>{title}</h3>
				<span className={cf(s.wMax, s.dInlineBlock, buy.aucAucDesiredPrice)}>
					{' '}
					{desiredPrice} {standardUnit}
				</span>
			</div>
		</div>
	)
}

const Buy = () => {
	const {auctions, latestAuctions} = useReach()

	const latestAuctionRef = useRef()

	useEffect(() => {
		let progress = 0
		const slide = setInterval(() => {
			progress += 100
			latestAuctionRef.current.style.transform = `translate(-${progress}%,0)`
			// TODO Replace dummyText with latest Auction Array
			const length = (dummyText.length - 1) * 100
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
	}, [])

	return (
		<div className={cf(s.wMax, s.window, buy.buyParent)}>
			<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>Latest Auctions</h1>
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<div className={cf(s.flex, s.flexCenter, buy.latest)}>
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
						{/* { dummyText.map((el) => <LatestAuction onClick={ () => { console.log({el}) } } props={el} />)} */}
						{dummyText.map((el) => (
							<LatestAuction
								onClick={() => {}}
								assetID={el.assetID}
								url={el.url}
								title={el.title}
								desiredPrice={el.desiredPrice}
								description={el.description}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={cf(s.wMax, s.flex, s.flexRight, buy.topDiv)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, buy.topText)}>
					Available Auctions
				</h1>
			</div>
			<div
				className={cf(
					s.wMax,
					s.flex,
					s.spaceXAround,
					s.spaceYCenter,
					buy.aucAuctions
				)}
			>
				{dummyText.map((el) => (
					<Auction
						onClick={() => {}}
						assetID={el.assetID}
						url={el.url}
						title={el.title}
						desiredPrice={el.desiredPrice}
						description={el.description}
					/>
				))}
			</div>
		</div>
	)
}

export default Buy
