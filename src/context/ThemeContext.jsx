import { createContext, useContext, useEffect, useState } from "react";

// Creating Context
const ThemeContext = createContext();

// Creating Context Provider
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.remove("light", "dark");
        body.classList.add(`${theme}`);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Function to toggle theme.
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custome hook for using ThemeContext.
export const useThemeContext = () => {
    return useContext(ThemeContext);
};

// Exporting Context Provider.
export default ThemeContextProvider;
