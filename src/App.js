import { Route, Routes } from "react-router-dom";

import { GlobalStyled } from "./Styles/GlobalStyles";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
