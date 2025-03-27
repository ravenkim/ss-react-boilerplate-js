import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'src/styles/index.css'
import {BrowserRouter} from "react-router";
import App from "src/App.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>

        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </StrictMode>,
)
