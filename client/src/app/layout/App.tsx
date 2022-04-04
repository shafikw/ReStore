import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const them = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212"
      }
    }
  });

  function handleThemChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={them}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemChange={handleThemChange}/>
      <Catalog />
    </ThemeProvider>
  );
}

export default App;
