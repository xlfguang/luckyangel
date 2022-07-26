import Page from "src/Page";
import { Button, Flex, Text, Box, BoxProps, Input } from "@pancakeswap/uikit";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import InputWrap, { ActionInput, InputPanel } from "src/components/InputWrap";
import { useContext, useState } from "react";
import NumberBox from "./components/numberBox";
import { MyContext } from "src/components/Content/Content";
import { BigNumber, Contract, ethers, Wallet, providers, utils } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TokenAdr,UsdtAdr,LuckIdoAdr,LuckNFTAdr} from 'src/view/token';
const CardBoxStyle = styled(Box)`
  margin: 20px 0;
  background: linear-gradient(to left, #abbfff, #8afff9);
  border-radius: 20px;
  width: 47%;
  padding: 50px 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const BcBox = styled(Box)`
  margin: 20px 0;
  background: linear-gradient(to right, #abbfff, #8afff9);
  border-radius: 20px;
  width: 70%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const LuckyNumbers = ({num}:{num:number | string})=>{
  return (
    <Text fontSize="28px"  letterSpacing='5px'>{num}</Text>
  )
}
const CardBox: React.FC<
  { topText: string } & BoxProps & React.HTMLAttributes<HTMLDivElement>
> = ({ topText, children, ...porps }) => {
  return (
    <CardBoxStyle {...porps}>
      <Text color="#0034b4" bold fontSize="24px">
        {topText}
      </Text>

      {children}
    </CardBoxStyle>
  );
};

export default function Medal() {
  const { t } = useTranslation();
  const [contracts,setContrats] = useState({} as any);
  const [inputValue, setInputValue] = useState("");
  const { state, dispatch } = useContext(MyContext) as any;
  const { privateAddress,walletWithProvider } = state.obj;
  const approve = async() =>{
    if(!privateAddress){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      // message.error("No connect Wallet");
      return;
    }
    if(!walletWithProvider){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      // message.error("No connect Wallet");
      return;
    }
    var erc20AbiPool = require("../abi/erc20.json");
   (contracts.erc20 as any) = new Contract(TokenAdr, erc20AbiPool, walletWithProvider);
   var tx = await contracts["erc20"].approve(LuckNFTAdr,"10000000000000000000000000000");
       await tx.wait();
       toast.success("Approve success", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  const withdraw = async() =>{
    if(!privateAddress){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    if(!walletWithProvider){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    var luckAbi = require("../abi/luck.json");
    (contracts.luck as any) = new Contract(LuckNFTAdr, luckAbi, walletWithProvider);
    var tx = await contracts["luck"].redeemToken();
    await tx.wait();

    toast.success("withdraw success", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return;
  }

  const staking = async() =>{
    if(!privateAddress){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    if(!walletWithProvider){
      toast.error("No connect Wallet", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    console.log(inputValue);
    var list = inputValue.split(",");
    var erc20AbiPool = require("../abi/erc20.json");
   (contracts.erc20 as any) = new Contract(TokenAdr, erc20AbiPool, walletWithProvider);
   var apAmount = await contracts["erc20"].allowance(privateAddress,LuckNFTAdr);
if(apAmount.toString() == "0"){
  toast.error("No Approved", {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  return;
}



    var luckAbi = require("../abi/luck.json");
    (contracts.luck as any) = new Contract(LuckNFTAdr, luckAbi, walletWithProvider);
    var tx = await contracts["luck"].stakingNftClaim(list);
    await tx.wait();

    toast.success("claim lottery tickets success", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return;
  }

  const setValues = (e:any)=>{
      setInputValue(e);
  }
  return (
    <Page>
           <ToastContainer/>
      <Box width="70%" mt="40px">
        <Flex alignItems="center" justifyContent="space-between" mb='20px'>
          <Text fontSize="80px" bold>
            {t("The lottery results")}
          </Text>
          <NumberBox num="1547"></NumberBox>
        </Flex>
        <AutoFlex isWrap justifyContent="space-between">
          <CardBox topText={t("Pool Value")}>
            <Text color="#295358" bold fontSize="24px">
              {t("1st Price")}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("2nd Price")}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("3rd Price")}
            </Text>
          </CardBox>
          <CardBox topText={t("Total lottery tickets")}>
            <Text color="#295358" bold fontSize="24px">
              {t("My lottery tickets")}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("Times I participated")}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("Rewards I have winned")}
            </Text>
          </CardBox>
        </AutoFlex>
      </Box>

      <Box width="70%" mt="40px">
        <Text mb="20px" textAlign="left" bold fontSize="30px">
          {t("Participate")}
        </Text>
      </Box>
      <BcBox>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Hold tokens")} : 11
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Stake tokens")} : 11
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Hold NFTs")} : 11
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Hold tickets")} : 11
        </Text>

        <Box>
          <Button mr="20px" onClick={()=>{approve()}}>{t("Approve")}</Button>
          <Button onClick={()=>{withdraw()}}>{t("Withdraw")}</Button>
        </Box>
        <Box mt="20px">
          <Flex>
            <Button style={{ whiteSpace: "nowrap" }} mr="10px" onClick={()=>{staking()}}>
              {t("Claim Your Tickets")}
            </Button>
            <InputWrap
              readOnly={false}
              text={t("Fill in your tickets")}
              defaultVal={inputValue}
              getValues={setValues}
            ></InputWrap>
          </Flex>
        </Box>
      </BcBox>
      <Box width="70%" mt="20px">
        <Text mb="20px" textAlign="left" bold fontSize="30px">
          {t("My lucky numbers")}
        </Text>
      </Box>
      <BcBox>
      <LuckyNumbers num={'1545'}/>
      </BcBox>
      {/* <Flex width="70%" mt="40px">
        <Text mb="20px" textAlign="left" bold fontSize="30px">
          {t("Participate in the draw")}:
        </Text>
        <Flex ml="20px" flexDirection="column">
          <Input
            type="text"
            scale="sm"
            value={inputValue}
            placeholder={t("Number of pledged tokens")}
            onInput={(e) => {
              setInputValue((e.target as any).value);
            }}
          />
          <Button mt="10px">{t("pledge")}</Button>
          <Button mt="10px" variant="secondary" disabled={!inputValue}>
            {t("Fill in the lottery")}
          </Button>
        </Flex>
      </Flex> */}
    </Page>
  );
}
