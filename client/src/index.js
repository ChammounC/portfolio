import { hydrateRoot } from 'react-dom'
import  ReactDOM  from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

if (rootElement.hasChildNodes()) {
    hydrateRoot(<App />, rootElement)
} else {
    root.render(<App />)
}
