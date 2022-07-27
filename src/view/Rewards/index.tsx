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
    }
  
    })()
    },[privateAddress])

  const copyLink = () => {
    copy("123");
  };
  return (
    <Page>
    
      <Flex width="70%" justifyContent="space-between">
        <Box width="100%">
          <BorderBox borderColor="rgb(0 150 212)">
            <Text fontSize="26PX">
              {t("Invitation link")}:http://localhost:3000/rewards
            </Text>
            <Button onClick={() => copyLink}>
              {t("Copy")}
              {t("Invitation link")}
            </Button>
          </BorderBox>
        </Box>
      </Flex>
      <Box width="70%" mt="40px">
        <Text textAlign="left" mb="30px" bold>
          {t(
            "Stake 300USDT, applicable to collab with EAP-DAO, also enjoy the following benefits."
          )}
        </Text>
        <Text textAlign="left">
          .
          {t(
            "Attain the role of Collab Project and enjoy 10% Lucky Angel reward for more IDO referrals."
          )}
        </Text>
        <Text textAlign="left">
          .
          {t(
            "Invite at least 10 IDO participants, you have completed the task: 300USDT staked by you will be returned, also you are eligible for $EGGPLUS subscription allocation worth 200USDT. If the task is not done at the end of IDO, 300USDT will be put in good use for the community."
          )}
        </Text>
        <Text textAlign="left">
          .
          {t(
            "Present the Collab Medal NFT (transferable to others), and 5% of each sale transaction fee will become a dividend, which will be distributed to all holders of the NFT."
          )}
        </Text>
      </Box>
      <Box width="70%" mt="40px">
        <AutoFlex isWrap justifyContent="space-between">
          <CardBox topText={userAmount} bottomText={t("IDO Participants")} />
          <CardBox topText={userAmount1} bottomText={t("Referral Count")} />
          <CardBox topText={userAmount2} bottomText={t("直推购买")} />
          <CardBox topText={userAmount3} bottomText={t("直推奖励")} />
          <CardBox topText={userAmount4} bottomText={t("团队IDO业绩")} />
          <CardBox topText={userAmount5} bottomText={t("团队人数")} />
        </AutoFlex>
      </Box>
    </Page>
  );
}
