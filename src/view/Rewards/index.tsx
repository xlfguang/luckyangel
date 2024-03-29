import { Button, Flex, Text, Box, BoxProps } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { MainBackground, MainBackgroundCard } from "src/components/Card/Card";
import Page from "src/Page";
import styled from "styled-components";
import { BorderBox } from "../Swap/components/BorderCard";
import copy from "copy-to-clipboard";
import { MyContext } from "src/components/Content/Content";
import { BigNumber, Contract, ethers, Wallet, providers, utils } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TokenAdr,UsdtAdr,LuckIdoAdr,muticallAdr} from 'src/view/token';
import { useContext,useEffect,useState } from "react";
const CardBoxStyle = styled(Box)`
  margin: 20px 0;
  background: linear-gradient(to right, #439ca5, #6fd5d0);
  border-radius: 20px;
  width: 30%;
  padding: 50px 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
  }
`;

const AutoPCandwep = styled(Box)<{
  pcw?: string;
  wepw?: string;
}>`
  width: ${(props) => (props.pcw ? props.pcw : "80%")}; 
  @media (max-width: 768px) {
    width: ${(props) => (props.wepw ? props.wepw : "100%")}; 
  }
`;
const AutoPCandwepFlex = styled(Flex)<{
  pcw?: string;
  wepw?: string;
}>`
  width: ${(props) => (props.pcw ? props.pcw : "80%")}; 
  @media (max-width: 768px) {
    width: ${(props) => (props.wepw ? props.wepw : "100%")}; 
  }
`;
const CardBox: React.FC<
  { topText: string; bottomText: string } & BoxProps &
    React.HTMLAttributes<HTMLDivElement>
> = ({ topText, bottomText, ...porps }) => {
  return (
    <CardBoxStyle {...porps}>
      <Text color="#ecfdff" bold fontSize="34px">
        {topText}
      </Text>
      <Text>{bottomText}</Text>
    </CardBoxStyle>
  );
};

export default function Rewards() {
  const { t } = useTranslation();
  const [contracts,setContrats] = useState({} as any);
  const [userAmount,setUserAmount] = useState("0");
  const [userAmount1,setUserAmount1] = useState("0");
  const [userAmount2,setUserAmount2] = useState("0");
  const [userAmount3,setUserAmount3] = useState("0");
  const [userAmount4,setUserAmount4] = useState("0");
  const [userAmount5,setUserAmount5] = useState("0");
  const [url,setUrl] = useState("");
  const { state, dispatch } = useContext(MyContext) as any;
  const { privateAddress,walletWithProvider } = state.obj;
  useEffect(()=>{
    (async()=>{
      // var url = "https://bsc-dataseed.binance.org";
      var url = "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    var provider = new providers.JsonRpcProvider(url);
    var idoAbi = require("../abi/ido.json");
    contracts["ido"] = new Contract(LuckIdoAdr, idoAbi, provider);
    var amountU = await contracts["ido"].idoUserAmount();
    setUserAmount(amountU.toString());
    if(privateAddress){
      var mutiAbi = require("../abi/muticall.json");
      contracts["muticall"] = new Contract(muticallAdr, mutiAbi, provider);
      var list1 = await contracts["muticall"].idoInvterInfo(privateAddress);
      setUserAmount1(list1[0].toString());
      setUserAmount2(list1[1].toString());
      setUserAmount3(list1[2].toString());
      setUserAmount4(list1[3].toString());
      setUserAmount5(list1[4].toString());
     var bools =  await contracts["ido"].tokenBalanceBool(privateAddress);
     if(bools){
      var url1 = "http://localhost:3002/#"+privateAddress;
      setUrl(url1);
     }
    }
  
    })()
    },[privateAddress])

  const copyLink = () => {
    copy("123");
  };
  return (
    <Page>
    
      <AutoPCandwepFlex pcw="70%" justifyContent="space-between">
        <Box width="100%">
          <BorderBox borderColor="rgb(0 150 212)">
            <Text fontSize="26PX">
              {t("Invitation link")}:{url}
            </Text>
            <Button onClick={() => copyLink}>
              {t("Copy")}
              {t("Invitation link")}
            </Button>
          </BorderBox>
        </Box>
      </AutoPCandwepFlex>
      <AutoPCandwep pcw="70%" mt="40px">
        <Text textAlign="left" mb="30px" bold>
          {t(
            "Enjoy 10% $USDT rewards for IDO referrals. When the IDO referrals buying added to 1000 $USDT, you can get permanent NFT."
          )}
        </Text>
        <Text textAlign="left">
          .
          {t(
            "One permanent NFT is automatically awarded for each 1000U of accumulated purchases over a personal invitation link (For example, if accumulated purchases is $2300 , you will get 2 permanent NFTs ). Each NFT will receive a free ticket before each drawing. NFTS are refundable."
          )}
        </Text>
        
      </AutoPCandwep>
      <AutoPCandwep pcw="70%" mt="40px">
        <AutoFlex isWrap justifyContent="space-between">
          <CardBox topText={userAmount} bottomText={t("IDO Participants")} />
          <CardBox topText={userAmount1} bottomText={t("Referral Count")} />
          <CardBox topText={userAmount2} bottomText={t("直推购买")} />
          <CardBox topText={userAmount3} bottomText={t("直推奖励")} />
          <CardBox topText={userAmount4} bottomText={t("团队IDO业绩")} />
          <CardBox topText={userAmount5} bottomText={t("团队人数")} />
        </AutoFlex>
      </AutoPCandwep>
    </Page>
  );
}
