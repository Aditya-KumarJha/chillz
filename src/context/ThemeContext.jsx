import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  strawberry: {
    name: "strawberry",
    gradient: "from-[#BE128D] to-[#FF6CEE]",
    image: "/images/icecream-1.png",
    accent: "#FF6CEE",
  },
  blueberry: {
    name: "blueberry",
    gradient: "from-[#236CDA] to-[#47C4F6]",
    image: "/images/icecream-2.png",
    accent: "#47C4F6",
  },
  chocolate: {
    name: "chocolate",
    gradient: "from-[#9C5C3F] to-[#E0BDB0]",
    image: "/images/icecream-3.png",
    accent: "#E0BDB0",
  },
  evergreen: {
    name: "evergreen",
    gradient: "from-[#2A9949] to-[#47F66E]",
    image: "/images/icecream-4.png",
    accent: "#47F66E",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.strawberry);

  useEffect(() => {
    Object.values(themes).forEach((t) => {
      const img = new Image();
      img.src = t.image;
    });

    Object.keys(themes).forEach((_, index) => {
      const img = new Image();
      img.src = `/images/Component-${index + 1}.png`;
    });
  }, []);

  const changeTheme = (key) => {
    setTheme(themes[key]);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
