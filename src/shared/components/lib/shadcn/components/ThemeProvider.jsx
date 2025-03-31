import { createContext, useContext, useEffect, useState } from "react";

const storageKey = "vite-ui-theme";
const ThemeProviderContext = createContext({
    theme: "system",
    setTheme: () => null,
});

// 초기 테마를 즉시 적용하는 함수
const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
    } else {
        root.classList.add(theme);
    }
};

// 로컬 스토리지에서 테마 가져오기 (초기 실행 시)
const getStoredTheme = () => {
    //기본값을 여기서 설정 >> system 이거나 light or dark
    return localStorage.getItem(storageKey) || "system";
};

// 초기 실행 시 테마를 즉시 적용
applyTheme(getStoredTheme());

export function ThemeProvider({ children,  }) {
    const [theme, setTheme] = useState(  () =>  getStoredTheme()  );

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem(storageKey, theme);
    }, [theme]);

    const value = { theme, setTheme };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
