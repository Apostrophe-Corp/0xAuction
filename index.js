import * as AppViews from './src/components/App'
import RenderViews, { renderDOM } from './src/layouts/renderViews'
import ReachContextProvider from './src/context/ReachContext'
import { fmtClasses } from './src/hooks'

const Views = {
	...AppViews,
}

function App() {
	return (
		<div className={fmtClasses()}>
			<RenderViews {...Views} />
		</div>
	)
}

renderDOM(
	<ReachContextProvider>
		<App />
	</ReachContextProvider>
)

export default App
