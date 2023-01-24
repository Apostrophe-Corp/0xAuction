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

const Deadline = ({ blockCreated, setHasEnded }) => {
	const [blocksRemaining, setBlocksRemaining] = useState(0)
	const [time_, setTime_] = useState(time)
	const [show, setShow] = useState(false)

	useLayoutEffect(() => {
		const getTimeRemaining = async () => {
			const present = reach.bigNumberToNumber(await reach.getNetworkTime())
			const remaining = blockCreated + 985 - present
			const tRemaining = remaining > 1 ? (remaining * 3.7) / 60 / 60 : 0
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
			const remaining = blockCreated + 985 - present
			setHasEnded(remaining < 1)
			setBlocksRemaining(remaining < 1 ? 'Ended' : remaining)
			const tRemaining = remaining > 0 ? (remaining * 3.7) / 60 / 60 : 0
			if (tRemaining === 0) clearInterval(updateRemaining)
			setTime_((previous) => ({
				sec: Math.floor(((((tRemaining % 24) % 1) * 60) % 1) * 60),
				min: Math.floor(((tRemaining % 24) % 1) * 60),
				hr: Math.floor(tRemaining % 24),
				day: Math.floor(tRemaining / 24),
			}))
		}, 3700)

		return () => {
			clearTimeout(updateRemaining)
			updateRemaining = undefined
		}
	}, [blockCreated, setHasEnded])

	useEffect(() => {
		let waiter = setTimeout(() => {
			setShow(true)
			clearTimeout(waiter)
		}, 5000)
		return () => {
			clearTimeout(waiter)
			waiter = undefined
		}
	}, [blockCreated])

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
					{`${
						Number(time_.day) < 1 ? '00' : time_.day.toString().padStart(2, '0')
					}:${
						Number(time_.hr) < 1 ? '00' : time_.hr.toString().padStart(2, '0')
					}:${
						Number(time_.min) < 1 ? '00' : time_.min.toString().padStart(2, '0')
					}:${
						Number(time_.sec) < 1 ? '00' : time_.sec.toString().padStart(2, '0')
					}`}
				</span>
			</div>
		</div>
	)
}

export default Deadline
