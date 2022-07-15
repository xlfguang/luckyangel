import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ResetCSS, light } from "@pancakeswap/uikit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swap from "./view/Swap";
import Menu from "./components/Menu";

function App() {
  const { t } = useTranslation();
  const noop = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <ResetCSS />
          <Menu>
            <Routes>
              <Route path="/" element={<Swap></Swap>} />
            </Routes>
          </Menu>
          <div style={{ padding: "32px", width: "400px" }}></div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
