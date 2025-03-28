import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/styles/index.css'
import { RouterProvider } from 'react-router'
import App from 'src/App.jsx'
import router from 'src/app/router/router.jsx'
import {reduxMaker} from "src/app/store/redux/reduxUtils.jsx";
import {Provider} from 'react-redux'
import store from "src/app/store/redux/reduxStore.jsx";


reduxMaker('aa',[
    {
        actions: 'getCode',
        state: 'commonCode',
        initialState: [],
        api: () => {},
    },
], {
    value: 0,
} )


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>

    </StrictMode>,
)
