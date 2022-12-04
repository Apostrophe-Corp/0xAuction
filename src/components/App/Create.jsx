import React, { useState, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/CreateAndSell.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'
import previewImg from '../../assets/images/preview.jpg'

const Create = () => {
	const { mintNFT } = useReach()
	const [nftParams, setNftParams] = useState({})

	const previewRef = useRef()

	const setPreviewBgs = (x) => {
		previewRef.current.style.background = `url(${x})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	const handleInput = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		if (name === 'name') {
			value = String(value).slice(0, 32)
			setNftParams({
				...nftParams,
				name: value,
			})
		} else if (name === 'symbol') {
			value = String(value).slice(0, 8)
			setNftParams({
				...nftParams,
				symbol: value,
			})
		} else if (name === 'supply') {
			value = Number(value)
			setNftParams({
				...nftParams,
				supply: value,
			})
		} else if (name === 'url') {
			value = String(value).slice(0, 96)
			setNftParams({
				...nftParams,
				url: value,
			})

			if (
				value.indexOf('https://ipfs.io/ipfs/') !== 0 &&
				(value.indexOf('https://') === 0 || value.indexOf('ipfs://') === 0)
			) {
				let previewPath = value
				if (value.indexOf('ipfs://') === 0) {
					previewPath = 'https://gateway.ipfs.io/ipfs/' + value.slice(7)
				}
				setPreviewBgs(previewPath)
			} else {
				setPreviewBgs(previewImg)
			}
		} else if (name === 'clawback') {
			setNftParams({
				...nftParams,
				clawback: value,
			})
		} else if (name === 'freeze') {
			setNftParams({
				...nftParams,
				freeze: value,
			})
		} else if (name === 'reserve') {
			setNftParams({
				...nftParams,
				reserve: value,
			})
		} else if (name === 'manager') {
			setNftParams({
				...nftParams,
				manager: value,
			})
		} else if (name === 'defaultFrozen') {
			setNftParams({
				...nftParams,
				defaultFrozen: e.target.checked,
			})
		}

		e.currentTarget.value = value
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(nftParams)
		mintNFT(nftParams)
	}

	return (
		<div className={cf(s.wMax, s.window)}>
			<div className={cf(s.wMax, s.flex, s.fleCenter, s.m0, cr8.createParent)}>
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
						cr8.callOut
					)}
				>
					<h1 className={cf(s.w480_100, s.w360_100, cr8.callOutMain)}>
						{process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ALGO'
							? 'Create the next Bored Ape or Cyberpunks. Become the next Beeple!'
							: 'Mint your Project tokens, be it Loyalty, Governance, Liquidity'}
					</h1>
					<h2 className={cf(cr8.callOutSub)}>
						{process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ALGO'
							? 'Create the NFT of your dreams'
							: 'Make your Project complete'}{' '}
						in a few simple steps by simply filling out the form
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
						cr8.formContainer
					)}
				>
					<form
						className={cf(s.flex, s.flexCenter, s.flex_dColumn, cr8.createForm)}
						onSubmit={handleSubmit}
					>
						<div
							className={cf(cr8.preview)}
							ref={previewRef}
						></div>
						<span className={cf(cr8.sideNote)}>
							Preview only available for image NFTs
						</span>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='name'
						>
							<span className={cf(cr8.formText)}>Name (Max 32)*</span>
							<input
								type='text'
								name='name'
								id='name'
								onInput={handleInput}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='symbol'
						>
							<span className={cf(cr8.formText)}>Symbol (Max 8)*</span>
							<input
								type='text'
								name='symbol'
								id='symbol'
								onInput={handleInput}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						{process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ETH' && (
							<label
								className={cf(cr8.formLabel)}
								htmlFor='supply'
							>
								<span className={cf(cr8.formText)}>Supply*</span>
								<input
									type='number'
									name='supply'
									id='supply'
									onInput={handleInput}
									placeholder=''
									className={cf(cr8.formInput)}
								/>
							</label>
						)}
						{process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ALGO' && (
							<>
								<label
									className={cf(cr8.formLabel)}
									htmlFor='url'
								>
									<span className={cf(cr8.formText)}>Media URL (Max 96)*</span>
									<input
										type='url'
										name='url'
										id='url'
										onInput={handleInput}
										placeholder=''
										className={cf(cr8.formInput)}
									/>
									<span className={cr8.note}>
										Note: Link must begin with{' '}
										<span className={cr8.partLink}>https://</span> or{' '}
										<span className={cr8.partLink}>ipfs://</span>.<br />
										Also, suffix the link with{' '}
										<span className={cr8.partLink}>#i</span> for an{' '}
										<span className={cr8.partLink}>image</span> or{' '}
										<span className={cr8.partLink}>#v</span> for a{' '}
										<span className={cr8.partLink}>video</span> or{' '}
										<span className={cr8.partLink}>#a</span> for an{' '}
										<span className={cr8.partLink}>audio</span> or{' '}
										<span className={cr8.partLink}>#p</span> for a{' '}
										<span className={cr8.partLink}>PDF</span> or{' '}
										<span className={cr8.partLink}>#h</span> for a/an{' '}
										<span className={cr8.partLink}>
											HTML/interactive digital media
										</span>
										.
									</span>
								</label>
								<label
									className={cf(cr8.formLabel)}
									htmlFor='clawback'
								>
									<span className={cf(cr8.formText)}>Clawback Address</span>
									<input
										type='text'
										name='clawback'
										id='clawback'
										onInput={handleInput}
										placeholder=''
										className={cf(cr8.formInput)}
									/>
								</label>
								<label
									className={cf(cr8.formLabel)}
									htmlFor='freeze'
								>
									<span className={cf(cr8.formText)}>Freeze Address</span>
									<input
										type='text'
										name='freeze'
										id='freeze'
										onInput={handleInput}
										placeholder=''
										className={cf(cr8.formInput)}
									/>
								</label>
								<label
									className={cf(cr8.formLabel)}
									htmlFor='reserve'
								>
									<span className={cf(cr8.formText)}>Reserve Address</span>
									<input
										type='text'
										name='reserve'
										id='reserve'
										onInput={handleInput}
										placeholder=''
										className={cf(cr8.formInput)}
									/>
								</label>
								<label
									className={cf(cr8.formLabel)}
									htmlFor='manager'
								>
									<span className={cf(cr8.formText)}>Manager Address</span>
									<input
										type='text'
										name='manager'
										id='manager'
										onInput={handleInput}
										placeholder=''
										className={cf(cr8.formInput)}
									/>
								</label>
								<label
									className={cf(cr8.formLabel, s.flexLeft, cr8.checkboxLabel)}
									htmlFor='defaultFrozen'
								>
									<input
										type='checkbox'
										name='defaultFrozen'
										id='defaultFrozen'
										onInput={handleInput}
										className={cf(
											s.dInlineBlock,
											s.flex,
											s.flexCenter,
											cr8.checkbox
										)}
									/>
									<span className={cf(cr8.formText, cr8.forCheckbox)}>
										Frozen?
									</span>
								</label>
							</>
						)}
						<div className={cf(s.wMax, s.flex, s.flexCenter, cr8.submitDiv)}>
							<button
								type='submit'
								disabled={
									!(
										nftParams.name &&
										nftParams.symbol &&
										(process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ALGO' ||
											nftParams.supply) &&
										(process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ETH' ||
											(nftParams.url &&
												nftParams.url.indexOf('https://ipfs.io/ipfs/') !== 0 &&
												(nftParams.url.indexOf('https://') === 0 ||
													nftParams.url.indexOf('ipfs://') === 0)))
									)
								}
							>
								Mint
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Create
