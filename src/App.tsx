import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counted";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function () {
  return (
    <div>
      <Navbar />
      <Counter />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
}
