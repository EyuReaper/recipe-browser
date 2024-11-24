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

// Toast interface
interface Toast {
    id: string;
    title?: string;
    description?: string;
}

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => {},
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(storageKey);
        return (storedTheme === "dark" || storedTheme === "light") ? (storedTheme as Theme) : defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem(storageKey, theme); // Save the theme
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeProviderContext);
    
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    return context;
}

// Define and export useToast
export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
        setToasts((prev) => [...prev, { id, ...toast }]);

        // Optional: Remove the toast after a timeout
        setTimeout(() => {
            setToasts((prev) => prev.filter(t => t.id !== id));
        }, 3000); // Adjust duration as needed
    };

    return { toasts, addToast };
}