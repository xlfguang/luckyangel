import {
  Box,
  Text,
  Dropdown,
  DropdownProps,
  Flex,
  Image,
  Button,
} from "@pancakeswap/uikit";
import config from "../config";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "src/components/Content/Content";
const MyDropdown = Dropdown as React.FC<
  DropdownProps & { children: any[]; target: any }
>;

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const { state, dispatch } = useContext(MyContext) as any;
  const { obj } = state;
  useEffect(() => {
    const locLang = localStorage.getItem("lang");
    if (!locLang) {
    } else {
      i18n.changeLanguage(locLang);
    }
  }, []);
  const getObj = () => {
    console.log(obj);
    
  };

  const links = config(t);
  return (
    <Box width="100%" padding="0px 20px" background="#015561">
      <Flex height="52px" justifyContent="space-between" alignItems="center">
        <Image width={40} height={40} src="/img/logo.png"></Image>
        <Flex>
          {links.map((link, index) => (
            <Box key={index} margin="0 10px">
              <Link to={link.href}>{link.label}</Link>
            </Box>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Box mr="15px" onClick={() => getObj()}>
            设置
          </Box>
          <MyDropdown target={<Text>{lang == "en" ? "English" : "中文"}</Text>}>
            <Text
              onClick={() => {
                i18n.changeLanguage("en");
                setLang("en");
                localStorage.setItem("lang", "en");
              }}
            >
              en
            </Text>
            <Text
              onClick={() => {
                i18n.changeLanguage("zh");
                setLang("zh");
                localStorage.setItem("lang", "zh");
              }}
            >
              中文
            </Text>
          </MyDropdown>
        </Flex>
      </Flex>
    </Box>
  );
};
