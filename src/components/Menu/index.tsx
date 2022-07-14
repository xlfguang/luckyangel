import React from "react";
import { ConnectorNames, Menu as UikitMenu } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import config from "./config";
import { t } from "i18next";

const noop = () => {};
const Menu = (props: JSX.IntrinsicAttributes) => {
  console.log(config(t));

  return (
    <UikitMenu
      isDark
      toggleTheme={noop}
      langs={[]}
      setLang={noop}
      currentLang="EN"
      links={config(t)}
      login={function (connectorId: ConnectorNames): void {
        throw new Error("Function not implemented.");
      }}
      logout={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Menu;
