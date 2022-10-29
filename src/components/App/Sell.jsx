import React, { useState, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import sell from '../../styles/CreateAndSell.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'
import previewImg from '../../assets/images/preview.jpg'
import notFound from '../../assets/images/no_image.jpg'
import { Arc69 } from '../../ARC69/arc.js'

const arc69 = new Arc69()

const Sell = () => {

	const [auctionParams, setAuctionParams] = useState({})
	const [assetTimeout, setAssetTimeout] = useState(null)
	const [[manualMedia, setManualMedia], [defaultMedia, setDefaultMedia]] = [
		useState(''),
		useState(''),
	]
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
					setDefaultMedia(data.url)
					setPreviewBgs({ x: data.url, y: manualMedia })
				} else {
					setDefaultMedia('')
					setPreviewBgs({ y: manualMedia })
					console.log('No image url found 🥱')
				}
			})
			.catch((x) => {
				setDefaultMedia('')
				setPreviewBgs({ y: manualMedia })
				console.log('No image url found 🥱')
			})
	}

	const handleInput = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		if (name === 'title') {
			value = String(value).slice(0, 32)
			setAuctionParams({
				...auctionParams,
				title: value,
			})
		} else if (name === 'asset') {
			value = value > 0 ? Number(value) : 0
			setAuctionParams({
				...auctionParams,
				asset: value,
			})
			if (assetTimeout) {
				clearTimeout(assetTimeout)
				setAssetTimeout(null)
			}

			const getMetaData = setTimeout(() => {
				fetchAssetMetadata(value)
				clearTimeout(getMetaData)
				setAssetTimeout(null)
			}, 2000)
			setAssetTimeout(getMetaData)
		} else if (name === 'description') {
			value = String(value).slice(0, 80)
			setAuctionParams({
				...auctionParams,
				description: value,
			})
		} else if (name === 'url') {
			value = String(value).slice(0, 96)
			setAuctionParams({
				...auctionParams,
				url: value,
			})
			setManualMedia(value)
			if (
				value.indexOf('https://ipfs.io/ipfs/') !== 0 &&
				(value.indexOf('https://') === 0 || value.indexOf('ipfs://') === 0)
			) {
				setPreviewBgs({ z: defaultMedia, y: value })
			} else if (!auctionParams) {
				setPreviewBgs({ y: previewImg })
			} else {
				setManualMedia(previewImg)
				setPreviewBgs({ y: defaultMedia })
			}
		}

		e.currentTarget.value = value
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(auctionParams)
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
						Sell at your desired price!
					</h1>
					<h2 className={cf(sell.callOutSub)}>
						Some dummy text... Some dummy text... Some dummy text...
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
						>						</div>
						<span className={cf(sell.sideNote)}>
							Preview only available for image NFTs
						</span>
						<label
							className={cf(sell.formLabel)}
							htmlFor='asset'
						>
							<span className={cf(sell.formText)}>Asset ID</span>
							<input
								type='number'
								name='asset'
								id='asset'
								onInput={handleInput}
								placeholder='########'
								className={cf(sell.formInput)}
							/>
						</label>
						<label
							className={cf(sell.formLabel)}
							htmlFor='url'
						>
							<span className={cf(sell.formText)}>Media URL (Max 96)</span>
							<input
								type='url'
								name='url'
								id='url'
								onInput={handleInput}
								placeholder='bit.ly/3gD1nFM#i'
								className={cf(sell.formInput)}
							/>
						</label>
						<label
							className={cf(sell.formLabel)}
							htmlFor='title'
						>
							<span className={cf(sell.formText)}>Auction Title (Max 20)</span>
							<input
								type='text'
								name='title'
								id='title'
								onInput={handleInput}
								placeholder='NFT Sale'
								className={cf(sell.formInput)}
							/>
						</label>
						<label
							className={cf(sell.formLabel)}
							htmlFor='description'
						>
							<span className={cf(sell.formText)}>Description (Max 80)</span>
							<textarea
								name='description'
								id='description'
								rows='3'
								onInput={handleInput}
								placeholder='Image by Graphue on Freepik'
								className={cf(sell.formInput)}
							/>
						</label>

						<div className={cf(s.wMax, s.flex, s.flexCenter, sell.submitDiv)}>
							<button
								type='submit'
								disabled={
									!(
										auctionParams.asset &&
										auctionParams.title &&
										auctionParams.description &&
										(auctionParams.url
											? auctionParams.url.indexOf('https://ipfs.io/ipfs/') !==
													0 &&
											  (auctionParams.url.indexOf('https://') === 0 ||
													auctionParams.url.indexOf('ipfs://') === 0)
											: true)
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
