import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Invest from "./Pages/Invest";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  const [dark, isDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  const handleClick = () => {
    isDark((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col text-primaryText ${
          dark ? "dark" : ""
        } dark:bg-darkBG dark:text-darkPrimary transition-all ease-in`}
      >
        <Navbar state={dark} click={handleClick} />
        <div className="px-4 py-12 md:py-20 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
