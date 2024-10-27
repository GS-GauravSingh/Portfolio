import React from "react";
import { Home, CustomCursor, About, Skills, Projects, Contact, Footer } from "./components";
import ThemeContextProvider from "./context/ThemeContext";

function Layout() {
    return (
        <ThemeContextProvider>
            <CustomCursor />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </ThemeContextProvider>
    );
}

export default Layout;
