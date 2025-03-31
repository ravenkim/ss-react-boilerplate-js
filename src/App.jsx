import useRouteListener from "src/app/router/useRouteListener.jsx";
import {RouterProvider} from "react-router";
import router from "src/app/router/router.jsx";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from "src/shared/components/lib/shadcn/components/ThemeProvider.jsx";

function App() {

    useRouteListener()

    return (
        <ThemeProvider defaultTheme={'system'}>
            <RouterProvider router={router} />
            <ToastContainer />
        </ThemeProvider>
    )
}

export default App
