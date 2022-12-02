import React, { useState, useEffect } from 'react'
import { useReach, fmtClasses } from '../../hooks'
import styles from '../../styles/LoadingPreview.module.css'

const LoadingPreview = () => {
	const { sleep, showPreloader, setShowPreloader, setProcessing } = useReach()
	const [preloaderClass, setPreloaderClass] = useState(
		fmtClasses(styles.container, styles.invisible)
	)

	useEffect(() => {
		setPreloaderClass(styles.container)
	}, [])

	useEffect(() => {
		const close = async () => {
			const fadeOff = async () => {
				setPreloaderClass(fmtClasses(styles.container, styles.invisible))
				await sleep(400)
				setPreloaderClass(fmtClasses(styles.terminated))
			}
			if (showPreloader === false) {
				await fadeOff()
				setProcessing(false)
			}
		}
		close()
	}, [showPreloader, setProcessing, sleep])

	return (
		<div className={preloaderClass}>
			<div
				className={fmtClasses(styles.closeBtn)}
				onClick={() => {
					setShowPreloader(false)
				}}
			>
				Close
			</div>
			<div className={fmtClasses(styles.circle, styles.c1)}></div>
			<div className={fmtClasses(styles.circle, styles.c2)}></div>
			<div className={fmtClasses(styles.circle, styles.c3)}></div>
		</div>
	)
}

export default LoadingPreview
