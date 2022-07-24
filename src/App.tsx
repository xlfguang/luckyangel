import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ResetCSS, light } from "@pancakeswap/uikit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Swap from "./view/Swap";
import Dashboard from "./view/Dashboard";
import Rewards from "./view/Rewards";
import Medal from "./view/Medal";
import Ido from "./view/Ido";
// import Account from "./view/Account";
// import Calculator from "./view/Calculator";
import Charity from "./view/Charity";

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
              <Route path="/dashboard" element={<Dashboard></Dashboard>} />
              <Route path="/rewards" element={<Rewards></Rewards>} />
              <Route path="/medal" element={<Medal></Medal>} />
              <Route path="/ido" element={<Ido></Ido>} />
              {/* <Route path="/account" element={<Account></Account>} /> */}
              {/* <Route path="/calculator" element={<Calculator></Calculator>} /> */}
              <Route path="/charity" element={<Charity></Charity>} />
            </Routes>
          </Menu>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
