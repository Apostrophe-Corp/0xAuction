import React, { useState, useEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import alt from '../../styles/Alert.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'

const Alert = () => {
	const {
		alertInfo,
		setAlertInfo,
		showAlert,
		setShowAlert,
		promiseOfConfirmation,
	} = useReach()

	const [active, setActive] = useState(showAlert)
	const [response, setResponse] = useState('')
	const [alertClass, setAlertClass] = useState(cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer))

	const decide = (decision) => {
		if (alertInfo.forConfirmation)
			promiseOfConfirmation.resolve && promiseOfConfirmation.resolve(decision)
		setShowAlert(false)
	}

	const submitResponse = (e) => {
		e.preventDefault()
		decide(response)
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		if (showAlert === false) {
				setAlertClass(cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer, alt.invisible))
				const terminate = setTimeout(() => {
				setAlertClass(cf(alt.terminate))
				setActive(false)
					setAlertInfo({
						message: 'Confirm Action',
						accept: 'Yes',
						decline: 'No',
						forConfirmation: true,
					})
					clearTimeout(terminate)
				}, 400)
		}
		if (showAlert === true) {
			setActive(true)
				setAlertClass(cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer, alt.invisible))
				const present = setTimeout(() => {
				setAlertClass(cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer))
				clearTimeout(present)
			}, 200)
		}
	}, [showAlert])

	return (
		<>
			{active && (
				<div
					className={alertClass}
				>
					<div className={cf(s.wMax, alt.alertMask)}></div>
					<div className={cf(s.flex, s.flexCenter, alt.alertDetails)}>
						<div className={cf(s.wMax, s.flex, s.flexCenter, alt.alertMessage)}>
							<span
								className={cf(s.wMax, s.dInlineBlock, alt.alertMessageText)}
							>
								{alertInfo.message}
							</span>
						</div>
						{alertInfo.prompt ? (
							<div className={cf(s.wMax, s.flex, s.flexCenter, alt.promptBox)}>
								<form
									className={cf(s.wMax, s.flex, s.flexCenter, alt.promptForm)}
									onSubmit={submitResponse}
								>
									<label
										className={cf(
											s.wMax,
											s.flex,
											s.flexCenter,
											s.dInlineBlock,
											alt.promptInputBox
										)}
										htmlFor='response'
									>
										<input
											className={cf(s.wMax, alt.response)}
											name='response'
											id='response'
											placeholder='Enter your response'
											onChange={(e) => {
												setResponse(e.currentTarget.value)
											}}
										/>
									</label>
									<div
										className={cf(
											s.wMax,
											s.flex,
											s.spaceXAround,
											s.spaceYCenter,
											alt.confirmationBox
										)}
									>
										<button
											type='submit'
											onClick={() => {
												decide(response)
											}}
											disabled={!response}
											className={cf(s.flex, s.flexCenter, alt.button, alt.ok)}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						) : alertInfo.forConfirmation ? (
							<div
								className={cf(
									s.wMax,
									s.flex,
									s.spaceXAround,
									s.spaceYCenter,
									alt.confirmationBox
								)}
							>
								<button
									type='button'
									onClick={() => {
										decide(true)
									}}
									className={cf(s.flex, s.flexCenter, alt.button, alt.accept)}
								>
									{alertInfo.accept}
								</button>
								<button
									type='button'
									onClick={() => {
										decide(false)
									}}
									className={cf(s.flex, s.flexCenter, alt.button, alt.decline)}
								>
									{alertInfo.decline}
								</button>
							</div>
						) : (
							<div
								className={cf(
									s.wMax,
									s.flex,
									s.spaceXAround,
									s.spaceYCenter,
									alt.confirmationBox
								)}
							>
								<button
									type='button'
									onClick={() => {
										decide(true)
									}}
									className={cf(s.flex, s.flexCenter, alt.button, alt.ok)}
								>
									Okay
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Alert
