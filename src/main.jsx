import App from './app'
import "./sass/main.scss"
import store from "./store/store"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
