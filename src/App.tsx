import React, { useContext } from "react";
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
import MyContextWrapper, { MyContext } from "./components/Content/Content";
import Load from "./components/Load";
function App() {
 

  return (
    <div className="App">
      <MyContextWrapper>
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
              <Load></Load>
            </Menu>
          </ThemeProvider>
        </BrowserRouter>
      </MyContextWrapper>
    </div>
  );
}

export default App;
