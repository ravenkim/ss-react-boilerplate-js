import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/styles/index.css'
import { RouterProvider } from 'react-router'
import App from 'src/App.jsx'
import router from 'src/app/router/router.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
