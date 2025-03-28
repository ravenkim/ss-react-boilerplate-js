import useRouteListener from "src/app/router/useRouteListener.jsx";
import {RouterProvider} from "react-router";
import router from "src/app/router/router.jsx";

function App() {

    useRouteListener()

    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}

export default App
