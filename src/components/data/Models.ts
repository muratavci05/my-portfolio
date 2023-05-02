// Interface for data
export interface TypeMyData {
  id: number;
  title: string;
  link: string;
  img_url: string;
  gitHub: string;
}
export interface TypeNavbar {
  id: number;
  item: string;
  href: string;
  icon: string;
}

export interface TypeDarkMode {
  IsdarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  toggleIsDarkMode: () => void;
}
export interface contextDarkModeType {
  IsdarkMode: boolean;
  toggleIsDarkMode: () => void;
}

export interface TypeSkills {
  skill: string;
}

export interface TypeLinks {
  icon: string;
  link: string;
}

export interface TypeMessageIsSent {
  sent: boolean;
  setSent: React.Dispatch<React.SetStateAction<boolean>>;
}
