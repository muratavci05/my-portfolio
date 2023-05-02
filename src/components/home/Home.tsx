import { FC, useContext, useEffect } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDowm from "./ScrollDowm";
import contextDarkMod from "../context/contextDarkMod";
const Home: FC = () => {
  const { IsdarkMode } = useContext(contextDarkMod);
  // Dark mode for the body
  useEffect(() => {
    if (IsdarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [IsdarkMode]);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDowm />
      </div>
    </section>
  );
};

export default Home;
