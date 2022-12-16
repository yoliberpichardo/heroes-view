import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { About, DcPage, HeroPage, MarvelPage, SearchHero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="dc" element={<DcPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="about" element={<About />} />

          <Route path="search" element={<SearchHero />}/>
          <Route path="hero" element={<HeroPage />}/>

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
