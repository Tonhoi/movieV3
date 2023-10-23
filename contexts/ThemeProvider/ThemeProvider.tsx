import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { darkTheme } from "./DarkTheme";
import { lightTheme } from "./LightTheme";

interface DarkModeContextProps {
  handleChangeTheme: (newmode: boolean) => void;
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  handleChangeTheme: () => {},
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkTheme, setIsDarkTheme] = useState(prefersDarkMode);

  useEffect(() => {
    const mode = localStorage.getItem("isDarkTheme") === "true";
    // set mode
    setIsDarkTheme(mode);
  }, []);

  // set DarkMode triggered by user
  const handleChangeTheme = useCallback(
    (newmode: boolean) => {
      setIsDarkTheme(newmode);
    },
    [isDarkTheme]
  );

  const check = useMemo(() => {
    return isDarkTheme ? darkTheme : lightTheme;
  }, [isDarkTheme]);

  return (
    <DarkModeContext.Provider value={{ handleChangeTheme, isDarkTheme, setIsDarkTheme }}>
      <MuiThemeProvider theme={check}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export default ThemeProvider;
