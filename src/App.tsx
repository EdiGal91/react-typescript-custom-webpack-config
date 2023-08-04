import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counted";
import Navbar from "./components/Navbar/Navbar";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { Suspense } from "react";

export default function () {
  return (
    <div>
      <Navbar />
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
