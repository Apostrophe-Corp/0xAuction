import React, { useState, useRef , createRef} from 'react'
import s from '../../styles/Shared.module.css'
import sell from '../../styles/CreateAndSell.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'
import preview from '../../assets/images/preview.jpg'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Sell = () => {
	const [auctionParams, setAuctionParams] = useState({
		title: '0xAuction',
	})
	const [assetTimeout, setAssetTimeout] = useState(null)

	const { standardUnit, createAuction } = useReach()

	const previewRef = useRef()
	const assetRef = createRef()

	const setPreviewBgs = (x = preview) => {
		previewRef.current.style.background = `url(${x})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	const fetchAssetMetadata = async (x) => {
		await arc69
			.fetch(x)
			.then((data) => {
				if (data.success && data.url) {
					// console.log('Media URL:', data.url)
					setPreviewBgs(data.url)
					setAuctionParams({
						...auctionParams,
						title:
							String(data.name).length > 32
								? `${String(data.name).slice(0, 29)}...`
								: data.name,
					})
				} else {
					setPreviewBgs()
					console.log('No image url found 🥱')
				}
			})
			.catch((x) => {
				setPreviewBgs()
				console.log('No image url found 🥱')
			})
	}

	const handleInput = (e) => {
		const name = e.target.name
		let value = e.target.value

		if (name === 'title') {
			value = String(value).slice(0, 20)
			setAuctionParams((previous) => ({
				...previous,
				title: value,
			}))
		} else if (name === 'tokenId') {
			value = Number(value) > 0 ? Number(value) : 0
			setAuctionParams((previous) => ({
				...previous,
				tokenId: value,
			}))
			if (assetTimeout) {
				clearTimeout(assetTimeout)
				setAssetTimeout(null)
			}

			const getMetaData = setTimeout(async () => {
				await fetchAssetMetadata(value)
				clearTimeout(getMetaData)
				setAssetTimeout(null)
			}, 2000)
			setAssetTimeout(getMetaData)
		} else if (name === 'description') {
			value = String(value).slice(0, 80)
			setAuctionParams((previous) => ({
				...previous,
				description: value,
			}))
		} else if (name === 'price') {
			value = value > 0 ? Number(value) : 0
			setAuctionParams((previous) => ({
				...previous,
				price: value,
			}))
		}
		e.currentTarget.value = value
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(auctionParams)
		createAuction({ ...auctionParams, tokenId: assetRef.current.value })
	}

	return (
		<div className={cf(s.wMax, s.window)}>
			<div className={cf(s.wMax, s.flex, s.fleCenter, s.m0, sell.sellParent)}>
				<div
					className={cf(
						s.flex,
						s.flexCenter,
						s.flex_dColumn,
						s.w50,
						s.w900_100,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						sell.callOut
					)}
				>
					<h1 className={cf(s.w480_100, s.w360_100, sell.callOutMain)}>
						Start an Auction for your NFT or Collectible!
					</h1>
					<h2 className={cf(sell.callOutSub)}>
						Be your own Sotheby's or Christie's and take full control of your
						own Auction. No hidden fees, charges or middlemen.
						<br />
						Get full value for your art by selling directly to a peer like
						yourself.
					</h2>
				</div>
				<div
					className={cf(
						s.w50,
						s.w900_100,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flexCenter,
						sell.formContainer
					)}
				>
					<form
						className={cf(
							s.flex,
							s.flexCenter,
							s.flex_dColumn,
							sell.createForm
						)}
						onSubmit={handleSubmit}
					>
						<div
							className={cf(sell.preview)}
							ref={previewRef}
						>
							{' '}
						</div>
						<span className={cf(sell.sideNote)}>
							Preview only available for image NFTs
						</span>
						<label
							className={cf(sell.formLabel)}
							htmlFor='tokenId'
						>
							<span className={cf(sell.formText)}>Asset ID</span>
							<input
								type='text'
								name='tokenId'
								id='tokenId'
								onChange={handleInput}
								placeholder=''
								className={cf(sell.formInput)}
								ref={assetRef}
							/>
						</label>
						{/* <label
							className={cf(sell.formLabel)}
							htmlFor='title'
						>
							<span className={cf(sell.formText)}>Auction Title (Max 20)</span>
							<input
								type='text'
								name='title'
								id='title'
								onChange={handleInput}
								placeholder=''
								className={cf(sell.formInput)}
							/>
						</label> */}
						<label
							className={cf(sell.formLabel)}
							htmlFor='description'
						>
							<span className={cf(sell.formText)}>Description (Max 80)</span>
							<textarea
								name='description'
								id='description'
								rows='2'
								onChange={handleInput}
								placeholder=''
								className={cf(sell.formInput)}
							/>
						</label>
						<label
							className={cf(sell.formLabel)}
							htmlFor='price'
						>
							<span className={cf(sell.formText)}>
								Desired Price ({standardUnit})
							</span>
							<input
								type='text'
								name='price'
								id='price'
								onChange={handleInput}
								placeholder=''
								className={cf(sell.formInput)}
							/>
						</label>

						<div className={cf(s.wMax, s.flex, s.flexCenter, sell.submitDiv)}>
							<button
								type='submit'
								disabled={
									!(
										auctionParams.tokenId &&
										auctionParams.title &&
										auctionParams.description &&
										auctionParams.price
									)
								}
							>
								Confirm
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Sell
