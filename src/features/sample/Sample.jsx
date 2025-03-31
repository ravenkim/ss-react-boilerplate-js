import {useEffect, useReducer} from "react";
import {useDispatch} from "react-redux";


import {sampleAction} from "src/features/sample/sampleReducer.jsx";
import {useNavigate} from "react-router";
import {Button} from "src/shared/components/lib/shadcn/components/ui/button.jsx";
import {toast} from "react-toastify";
import {useTheme} from "src/shared/components/lib/shadcn/components/ThemeProvider.jsx";



const Sample = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        dispatch(sampleAction.getPokemon())
    }, []);

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        } else {
            // "system"인 경우 현재 시스템 테마 확인 후 반대 테마 적용
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(systemPrefersDark ? "light" : "dark");
        }
    };

    const notify = () => toast('Wow so easy !');

    return (
        <div>
            <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
                {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
            </button>

            <Button onClick={notify}>Notify !</Button>
            cccccccccccccccccc
            <Button
                onClick={() => navigate("/", {state: {asd: 123414}})}
            >asdasd</Button>
        </div>
    );
};

export default Sample;