import { MenuEntry } from "@pancakeswap/uikit"

const config: (t: any) => MenuEntry[] = (t) => [
    {
      label: t('Home'),
      icon: 'home',
      href: '/',
    },
    {
      label: t('Exchange'),
      icon: 'trade',
      href: `/swap`,
    },
    {
      label: t('Liquidity'),
      icon: 'liquidity',
      href: '/liquidity',
    },
    {
      label: t('Dashboard'),
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      label: t('EAP-DAO Rewards'),
      icon: 'rewards',
      href: '/rewards',
    },
    {
      label: t('Medal of EggPlus'),
      icon: 'medal',
      href: '/medal',
    },
    {
      label: t('Eggplus IDO'),
      icon: 'ido',
      href: '/ido',
    },
    {
      label: t('Account'),
      icon: 'account',
      href: '/account',
    },
    {
      label: t('Calculator'),
      icon: 'calculator',
      href: '/calculator',
    },
  ]
  
  export default config