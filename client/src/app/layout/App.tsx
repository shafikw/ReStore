import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/Contact";
import HomePage from "../../features/home/HomePage";
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
      <CssBaseline />
      <Header darkMode={darkMode} handleThemChange={handleThemChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductDetails />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
