import React from "react";
import { ConnectorNames, Menu as UikitMenu } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import config from "./config";
import { t } from "i18next";

const noop = () => {};
const Menu = (props: JSX.IntrinsicAttributes | any) => {
  console.log(config(t));

  return (
    <UikitMenu
      isDark
      toggleTheme={noop}
      langs={[]}
      setLang={noop}
      currentLang="EN"
      links={config(t)}
      subLinks={[]}
      footerLinks={[]}
      activeItem={""}
      activeSubItem={""}
      buyCakeLabel={""}
      {...props}
    ></UikitMenu>
  );
};

export default Menu;
