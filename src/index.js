import * as AppViews from './components/App'
import RenderViews, { renderDOM } from './layouts/renderViews'
import ReachContextProvider from './context/ReachContext'
import { fmtClasses } from './hooks'

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
