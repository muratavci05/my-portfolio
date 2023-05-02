// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import FirebaseEcommerce from "../assets/react-firebase-ecommerce.png";
import HospitalAutomationv1 from "../assets/hospitalv1.png";
import UnitTestIceCream from "../assets/unitTest-icecream.png";
import Cryptoapp from "../assets/cryptoapp.png";
import Hangman from "../assets/TS-hangman.png";
import Todos from "../assets/react_ts-todos.png";
import MovieApp from "../assets/movieApp.png";
import NasaSpace from "../assets/nasaSpace.png";
import RecibeApp from "../assets/recibeApp.png";
import AI from "../assets/openai-featured.jpg";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "React + TS Portfolio",
    img_url: `${AI}`,
    link: "none",
    gitHub: "none",
  },
  {
    id: 2,
    title: "React_Firebase_ecommerce",
    img_url: `${FirebaseEcommerce}`,
    link: "https://react-firebase-ecommerce-hooks.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 3,
    title: "React - Hospital Automation v1",
    img_url: `${HospitalAutomationv1}`,
    link: "https://github.com/muratavci05/reactjs_hospital-automation-app",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 4,
    title: "React Unit-Test IceCreamAPP",
    img_url: `${UnitTestIceCream}`,
    link: "https://github.com/muratavci05/Unit-Test_IceCream-APP",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 5,
    title: "React - Crypto Currency APP",
    img_url: `${Cryptoapp}`,
    link: "https://reactjs-cryptocurrency-app.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 6,
    title: "React + TS | Hangman-APP",
    img_url: `${Hangman}`,
    link: "https://project-hangman.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },

  {
    id: 7,
    title: "React + TS | Todos APP",
    img_url: `${Todos}`,
    link: "https://react-ts-todos.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 8,
    title: "React | IMDb-Movie App",
    img_url: `${MovieApp}`,
    link: "https://reactjs-movie-imdb-app.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },

  {
    id: 9,
    title: "React | NasaSpace APP",
    img_url: `${NasaSpace}`,
    link: "https://reactjs-nasa-app.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },
  {
    id: 10,
    title: "React | Recibe APP",
    img_url: `${RecibeApp}`,
    link: "https://reactjs-recibe-app.netlify.app",
    gitHub: "https://github.com/muratavci05",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
