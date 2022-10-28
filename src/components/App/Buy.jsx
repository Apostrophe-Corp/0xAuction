import React, { useState } from 'react'
import s from '../../styles/Shared.module.css'
import buy from '../../styles/Buy.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'

const Buy = () => {
	return (
		<div className={cf(s.wMax, s.window)}>
			<div className={cf(s.wMaxs)}>Buy</div>
		</div>
	)
}

export default Buy