import {useEffect, useReducer} from "react";
import {useDispatch} from "react-redux";

import i18n from 'i18next'

import {sampleAction} from "src/features/sample/sampleReducer.jsx";
import {useNavigate} from "react-router";
import {Button} from "src/shared/components/lib/shadcn/components/ui/button.jsx";
import {toast} from "react-toastify";

import {useTheme} from "src/shared/components/lib/shadcn/components/UseTheme.jsx";

import { useTranslation } from 'react-i18next';


const Sample = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();


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

            <div
                className={'w-100 h-100 bg-primary text-primary-foreground'}
            >
                asdasd
            </div>


            <ul>
                <li>{t('header.mypage')}</li>
                <li>{t('header.logout')}</li>
                <li>{t('header.login')}</li>
                <li>{t('header.register')}</li>
                <li>{t('header.language')}</li>
                <li>{t('header.help')}</li>
            </ul>
            <Button onClick={() => i18n.changeLanguage('ko')}> 번역</Button>
            <Button onClick={() => i18n.changeLanguage('eng')}> 번역</Button>


            <Button onClick={notify}>Notify !</Button>

            <Button
                onClick={() => navigate("/", {state: {asd: 123414}})}
            >asdasd</Button>
        </div>
    );
};

export default Sample;