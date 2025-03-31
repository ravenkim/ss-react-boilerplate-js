import { createRoot } from 'react-dom/client'
import 'src/styles/index.css'
import App from 'src/App.jsx'
import {Provider} from 'react-redux'
import store from "src/app/store/redux/reduxStore.jsx";


//translator
import 'src/assets/locales/i18n'


createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //     <Provider store={store}>
    //         <App/>
    //     </Provider>
    //
    // </StrictMode>,

        <Provider store={store}>
            <App/>
        </Provider>,

)
