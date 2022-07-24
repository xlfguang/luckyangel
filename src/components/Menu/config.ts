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
    label: t("Partner"),
    icon: "rewards",
    href: "/rewards",
  },
  {
    label: t("Lootery"),
    icon: "medal",
    href: "/medal",
  },
  {
    label: t("Lucky Angel IDO"),
    icon: "ido",
    href: "/ido",
  },
  {
    label: t("Charity"),
    icon: "Charity",
    href: "/charity",
  }
  // {
  //   label: t("Account"),
  //   icon: "account",
  //   href: "/account",
  // },
  // {
  //   label: t("Calculator"),
  //   icon: "calculator",
  //   href: "/calculator",
  // },
];

export default config;
