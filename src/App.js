import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyled } from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { ThemeData } from "./Components/NavbarData";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutMe from "./Pages/AboutMe";

export function App() {
  const [theme, setTheme] = useState("light");
  const themeHandler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <>
      <ThemeProvider
        theme={theme === "dark" ? ThemeData.light : ThemeData.dark}
      >
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home themeHandler={themeHandler} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
