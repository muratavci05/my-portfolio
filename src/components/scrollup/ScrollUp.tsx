import React, { useEffect } from "react";
import "./Scrollup.css";
import { Link } from "react-scroll";
const ScrollUp: React.FC = () => {
  // When the scroll is higher than 560 viewport height, add the show-scroll class to tag with the scroll-top class
  const scrollListener = (): void => {
    const scrollPosition = document.querySelector(".scrollup") as HTMLElement;
    if (window.scrollY >= 560) scrollPosition.classList.add("show-scroll");
    else scrollPosition.classList.remove("show-scroll");
  };

  useEffect((): void => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <Link
      to="home"
      style={{ cursor: "pointer" }}
      className="scrollup"
      spy={true}
      smooth={true}
      duration={50}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
};

export default ScrollUp;
