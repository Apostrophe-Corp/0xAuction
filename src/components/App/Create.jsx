import React, { useState } from 'react'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach, fmtClasses as cf } from '../../hooks'

const Create = () => {
	return (
		<div className={s.wMax}>
			<div className={cf(cr8.createParent)}>
				<div className={cf(cr8.callOut)}>
					<h1 className={cf(cr8.callOutMain)}>Create the next thing</h1>
					<h2 className={cf(cr8.callOutSub)}>
						Some dummy text... Some dummy text... Some dummy text...
					</h2>
				</div>
				<div className={cf(cr8.formContainer)}>
					<form className={cf(cr8.createForm)}>
						<h1 className={cf(cr8.formTheme)}>Create an NFT</h1>
						<label className={cf(cr8.formLabel)}>
							<span className={cf(cr8.formText)}></span>
							<input
								type=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<div className={cf(cr8.submitDiv)}>
							<button type='submit'>Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Create
