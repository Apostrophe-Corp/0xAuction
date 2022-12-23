import React, { useState, useEffect, useLayoutEffect } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import s from '../../styles/Shared.module.css'
import auc from '../../styles/Auction.module.css'
import { fmtClasses as cf } from '../../hooks'
const reach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

let time = {
	sec: 0,
	min: 0,
	hr: 0,
	day: 0,
}

const setTime = (x) => (time = x())

const Deadline = ({ blockCreated }) => {
	const [blocksRemaining, setBlocksRemaining] = useState(0)
	const [time_, setTime_] = useState(time)
	const [show, setShow] = useState(false)

	useLayoutEffect(() => {
		const getTimeRemaining = async () => {
			const present = reach.bigNumberToNumber(await reach.getNetworkTime())
			const remaining = blockCreated + 1000000 - present
			const tRemaining = (remaining * 3.7) / 60 / 60
			setTime(() => ({
				sec: Math.floor(((((tRemaining % 24) % 1) * 60) % 1) * 60),
				min: Math.floor(((tRemaining % 24) % 1) * 60),
				hr: Math.floor(tRemaining % 24),
				day: Math.floor(tRemaining / 24),
			}))
			setTime_(time)
		}
		getTimeRemaining()
	}, [blockCreated])

	useEffect(() => {
		let updateRemaining = setInterval(async () => {
			const present = reach.bigNumberToNumber(await reach.getNetworkTime())
			const remaining = blockCreated + 1000000 - present
			setBlocksRemaining(remaining)
		}, 3700)

		return () => {
			clearTimeout(updateRemaining)
			updateRemaining = undefined
		}
	}, [blockCreated])

	useEffect(() => {
		let countDown = setInterval(() => {
			if (time.sec > 0) {
				setTime(() => ({
					...time,
					sec: time.sec - 1,
				}))
				setTime_(time)
			} else {
				if (time.min > 0) {
					setTime(() => ({
						...time,
						sec: 59,
						min: time.min - 1,
					}))
					setTime_(time)
				} else {
					if (time.hr > 0) {
						setTime(() => ({
							...time,
							sec: 59,
							min: 59,
							hr: time.hr - 1,
						}))
						setTime_(time)
					} else {
						if (time.day > 0) {
							setTime(() => ({
								...time,
								sec: 59,
								min: 59,
								hr: 11,
								day: time.day - 1,
							}))
							setTime_(time)
						} else clearInterval(countDown)
					}
				}
			}
		}, 1000)

		let waiter = setTimeout(() => {
			setShow(true)
			clearTimeout(waiter)
		}, 5000)
		return () => {
			clearInterval(countDown)
			countDown = undefined
			clearTimeout(waiter)
			waiter = undefined
		}
	}, [])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter)}>
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
					className={cf(s.m0, s.p0, s.wMax, s.flex, s.flexCenter, auc.bidText)}
				>
					Ends In
				</h2>
				<span
					className={cf(
						s.wMax,
						s.flex,
						s.flexCenter,
						s.tCenter,
						auc.liveBidValue,
						show ? auc.visible : auc.invisible
					)}
				>
					{blocksRemaining} Blocks ~{' '}
					{`${time_.day.toString().padStart(2, '0')}:${time_.hr
						.toString()
						.padStart(2, '0')}:${time_.min
						.toString()
						.padStart(2, '0')}:${time_.sec.toString().padStart(2, '0')}`}
				</span>
			</div>
		</div>
	)
}

export default Deadline
