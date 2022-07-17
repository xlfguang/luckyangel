import { MenuItemsType } from "@pancakeswap/uikit";

const config: (t: any) => MenuItemsType[] = (t) => [
  {
    label: t("Home"),
    icon: "home",
    href: "/",
  },
  {
    label: t("Dashboard"),
    icon: "dashboard",
    href: "/dashboard",
  },
  {
    label: t("EAP-DAO Rewards"),
    icon: "rewards",
    href: "/rewards",
  },
  {
    label: t("Medal of EggPlus"),
    icon: "medal",
    href: "/medal",
  },
  {
    label: t("Eggplus IDO"),
    icon: "ido",
    href: "/ido",
  },
  {
    label: t("Account"),
    icon: "account",
    href: "/account",
  },
  {
    label: t("Calculator"),
    icon: "calculator",
    href: "/calculator",
  },
];

export default config;
