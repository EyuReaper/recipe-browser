import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => {},
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(storageKey);
        return (storedTheme === "dark" || storedTheme === "light") ? (storedTheme as Theme) : defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem(storageKey, theme); // Ensure the theme is saved
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value} {...props}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeProviderContext);
    
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    return context;
}