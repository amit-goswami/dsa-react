import React from "react";
import Loading from "../components/Loading";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("dark");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setLoading(true);
    setTimeout(() => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      setLoading(false);
    }, 400);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading ? <Loading /> : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
