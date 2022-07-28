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
import Web3 from "web3";
import { ethers } from "ethers";
import styled from "styled-components";

const MyDropdown = Dropdown as React.FC<
  DropdownProps & { children: any[]; target: any }
>;

const AutoLinks = styled(Flex)`
  & > .wepLink {
    display: none;
  }
  @media (max-width: 768px) {
    & > .pcLink {
      display: none;
    }
    & > .wepLink {
      display: block;
    }
  }
`;

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [adr, setAdr] = useState("");
  const { state, dispatch } = useContext(MyContext) as any;
  const { obj } = state;
  useEffect(() => {
    const locLang = localStorage.getItem("lang");
    if (!locLang) {
    } else {
      i18n.changeLanguage(locLang);
    }
  }, []);
  const setWallet = async () => {
    //引入web3
    // 检查是否是新的MetaMask 或 DApp浏览器
    var web3Provider;
    var windowNew = window as any;
    if (windowNew.ethereum) {
      web3Provider = windowNew.ethereum;
      try {
        // 请求用户授权
        await windowNew.ethereum.enable();
      } catch (error) {
        // 用户不授权时
        console.error("User denied account access");
      }
    } else if (windowNew.web3) {
      // 老版 MetaMask Legacy dapp browsers...
      web3Provider = windowNew.web3.currentProvider;
    } else {
      alert("检测到当前浏览器没有MetaMask插件！");
      web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
    }
    var web3 = new Web3(web3Provider);
    //从MetaMask中取出用户
    let provider = new ethers.providers.Web3Provider(web3Provider);
    let walletWithProvider = provider.getSigner();
    //获取input的实例
    var privateAddress = await walletWithProvider.getAddress();
    var originPrivateAddress = privateAddress;
    privateAddress =
      privateAddress.slice(0, 4) + "XXXXX" + privateAddress.slice(-4);
    var objs = {
      privateAddress: originPrivateAddress,
      walletWithProvider: walletWithProvider,
    };
    setAdr(privateAddress);
    dispatch({
      type: "UPDATE_OBJ",
      payload: objs,
    });
  };

  const getWallet = () => {
    console.log(obj);
  };

  const links = config(t);
  return (
    <Box width="100%" padding="0px 20px" background="#015561">
      <Flex height="52px" justifyContent="space-between" alignItems="center">
        <Image width={40} height={40} src="/img/logo.png"></Image>
        <AutoLinks>
          <Flex className="pcLink">
            {links.map((link, index) => (
              <Box key={index} margin="0 10px">
                <Link to={link.href}>{link.label}</Link>
              </Box>
            ))}
          </Flex>
          <Box className="wepLink">
            <MyDropdown target={<img src="/img/list.png" alt="" />}>
              {links.map((link, index) => (
                <Box key={index} >
                  <Link to={link.href}>{link.label}</Link>
                </Box>
              ))}
            </MyDropdown>
          </Box>
        </AutoLinks>
        <Flex alignItems="center">
          <Box
            border="1px solid #000"
            borderRadius="5px"
            padding="5px 10px"
            mr="15px"
            onClick={() => setWallet()}
          >
            {adr ? adr : t("Connect Wallet")}
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
