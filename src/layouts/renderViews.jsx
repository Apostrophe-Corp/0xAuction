import React from 'react'
import { createRoot } from 'react-dom/client'
import { useReach } from '../hooks'

export function renderDOM(app) {
	const container = document.getElementById('root')
	const root = createRoot(container)
	root.render(<React.StrictMode>{app}</React.StrictMode>)
}

const RenderViews = (Views) => {
	const { view } = useReach()
	const View = Views[view]
	return <View />
}

export default RenderViews
