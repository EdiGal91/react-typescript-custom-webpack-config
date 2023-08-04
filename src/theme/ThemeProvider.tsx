import React, { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

interface MyComponentProps {
  children: ReactNode;
}

const ThemeProvider: FC<MyComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
