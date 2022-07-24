import React from "react";
import { Box, ConnectorNames, Menu as UikitMenu } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import config from "./config";
import { t } from "i18next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const noop = () => {};
const Menu = (props: JSX.IntrinsicAttributes | any) => {
  console.log(config(t));

  return (
    // <UikitMenu
    //   isDark
    //   toggleTheme={noop}
    //   langs={[]}
    //   setLang={noop}
    //   currentLang="EN"
    //   links={config(t)}
    //   subLinks={[]}
    //   footerLinks={[]}
    //   activeItem={""}
    //   activeSubItem={""}
    //   buyCakeLabel={""}
    //   profile={{
    //     name: "123",
    //   }}

    // >
    //   {props.children}
    // </UikitMenu>
    <Box>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </Box>
  );
};

export default Menu;
