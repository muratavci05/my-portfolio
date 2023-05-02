import { createContext } from "react";
import { contextDarkModeType } from "../data/Models";

const iUserContextState: contextDarkModeType = {
  IsdarkMode: false,
  toggleIsDarkMode: () => {},
};

const contextDarkMod = createContext<contextDarkModeType>(iUserContextState);
export default contextDarkMod;
