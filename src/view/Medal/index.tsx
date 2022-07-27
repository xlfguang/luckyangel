import Page from "src/Page";
import { Button, Flex, Text, Box, BoxProps, Input } from "@pancakeswap/uikit";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import InputWrap, { ActionInput, InputPanel } from "src/components/InputWrap";
import { useContext, useEffect, useState } from "react";
import NumberBox from "./components/numberBox";
import { MyContext } from "src/components/Content/Content";
import { BigNumber, Contract, ethers, Wallet, providers, utils } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenAdr, UsdtAdr, LuckIdoAdr, LuckNFTAdr,muticallAdr } from "src/view/token";
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
  align-items: initial;
`;

const LuckyNumbers = ({ num }: { num: number | string }) => {
  return (
    <Text fontSize="28px" letterSpacing="5px">
      {num}
    </Text>
  );
};
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
  const [contracts, setContrats] = useState({} as any);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  //lucknum
  const [luckNum, setLuckNum] = useState("0");
  const [luckNum1, setLuckNum1] = useState("0");
  const [luckNum2, setLuckNum2] = useState("0");
  //poolvalue
  const [poolValue, setPoolValue] = useState("0");
  const [poolValue1, setPoolValue1] = useState("0");
  const [poolValue2, setPoolValue2] = useState("0");
  //ticksAmount
  const [ticketsAmount, setTicketsAmount] = useState("0");
  const [participationNumber, setParticipationNumber] = useState("0");
  const [winningTimes, setWinningTimes] = useState("0");
  //userInfo
  const [tokenAmount, setTokenAmount] = useState("0");
  const [stakingTokenAmount, setStakingTokenAmount] = useState("0");
  const [permanentNftAmount, setPermanentNftAmount] = useState("0");
  const [userTickets, setUserTickets] = useState("0");
  const [userMyTickets, setUserMyTickets] = useState("0");
  const { state, dispatch } = useContext(MyContext) as any;
  const { privateAddress, walletWithProvider } = state.obj;

  const makeStr = (str:string)=>{
    var length = str.length;
    var newStr = "";
    if(length == 1){
      newStr = "000"+str;
      return newStr;
    }else if(length == 2){
      newStr = "00"+str;
      return newStr;
    }else if(length == 3){
      newStr = "0"+str;
      return newStr;
    }
    return str;
  }

  useEffect(()=>{
    (async()=>{
      // var url = "https://bsc-dataseed.binance.org";
      var url = "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    var provider = new providers.JsonRpcProvider(url);
    var muticallAbi = require("../abi/muticall.json");
    contracts["muticall"] = new Contract(muticallAdr, muticallAbi, provider);
      var list1 = await contracts["muticall"].getLotteryInfo1();
      setLuckNum(makeStr(list1[0].toString()));
      setLuckNum1(makeStr(list1[1].toString()));
      setLuckNum2(makeStr(list1[2].toString()));
      setPoolValue(list1[3].div(BigNumber.from(10).pow(18)).toString());
      setPoolValue1(list1[4].div(BigNumber.from(10).pow(18)).toString());
      setPoolValue2(list1[5].div(BigNumber.from(10).pow(18)).toString());
      setTicketsAmount(list1[6].toString());
    if(privateAddress){
      var list2 = await contracts["muticall"].getLotteryInfo2(privateAddress);
      setTokenAmount(list2[0].div(BigNumber.from(10).pow(18)).toString());
      setStakingTokenAmount(list2[1].div(BigNumber.from(10).pow(18)).toString());
      setPermanentNftAmount(list2[2].toString());
      setUserTickets(list2[3].toString());
      setParticipationNumber(list2[5].toString());
      setWinningTimes(list2[6].toString());
      var list3 = await contracts["muticall"].getUserLuckNumbers(privateAddress);
      var strs = "";
      for(var i =0;i<list3.length;i++){
        if(i != list3.length-1){
          strs =  strs+list3[i]+" ----- ";
        }else{
          strs =  strs+list3[i]
        }
       
      }
      setUserMyTickets(strs);
    }
  
    })()
    },[privateAddress])

  const approve = async () => {
    if (!privateAddress) {
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
    if (!walletWithProvider) {
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
    (contracts.erc20 as any) = new Contract(
      TokenAdr,
      erc20AbiPool,
      walletWithProvider
    );
    var tx = await contracts["erc20"].approve(
      LuckNFTAdr,
      "10000000000000000000000000000"
    );
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
  };

  const withdraw = async () => {
    if (!privateAddress) {
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
    if (!walletWithProvider) {
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
    (contracts.luck as any) = new Contract(
      LuckNFTAdr,
      luckAbi,
      walletWithProvider
    );
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
  };

  const staking = async () => {
    if (!privateAddress) {
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
    if (!walletWithProvider) {
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
    (contracts.erc20 as any) = new Contract(
      TokenAdr,
      erc20AbiPool,
      walletWithProvider
    );
    var apAmount = await contracts["erc20"].allowance(
      privateAddress,
      LuckNFTAdr
    );
    if (apAmount.toString() == "0") {
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
    (contracts.luck as any) = new Contract(
      LuckNFTAdr,
      luckAbi,
      walletWithProvider
    );
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
  };

  const NFTclaim = async () => {
    if (!privateAddress) {
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
    if (!walletWithProvider) {
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
    console.log(inputValue1);
    var list = inputValue1.split(",");

    var luckAbi = require("../abi/luck.json");
    (contracts.luck as any) = new Contract(
      LuckNFTAdr,
      luckAbi,
      walletWithProvider
    );
    var tx = await contracts["luck"].permanentNftClaim(list);
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
  };

  const setValues = (e: any) => {
    setInputValue(e);
  };
  const setValues1 = (e: any) => {
    setInputValue1(e);
  };
  return (
    <Page>
      <ToastContainer />
      <Box width="70%" mt="40px">
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("First prize number")}
          </Text>
          <NumberBox num={luckNum}></NumberBox>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("Second prize number")}
          </Text>
          <NumberBox num={luckNum1}></NumberBox>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("Third prize number")}
          </Text>
          <NumberBox num={luckNum2}></NumberBox>
        </Flex>
        <AutoFlex isWrap justifyContent="space-between">
          <CardBox topText={t("Pool Value")}>
            <Text color="#295358" bold fontSize="24px">
              {t("1st PoolValue")} :{poolValue}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("2nd PoolValue")} :{poolValue1}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("3rd PoolValue")} :{poolValue2}
            </Text>
          </CardBox>
          <CardBox topText={t("Total lottery tickets") +":"+ ticketsAmount}>
            <Text color="#295358" bold fontSize="24px">
              {t("My lottery tickets")+":"+userTickets}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("Times I participated")+":"+participationNumber}
            </Text>
            <Text color="#295358" bold fontSize="24px">
              {t("Rewards I have winned")+":"+winningTimes}
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
          {t("Hold tokens")} : {tokenAmount}
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Stake tokens")} : {stakingTokenAmount}
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Hold NFTs")} : {permanentNftAmount}
        </Text>
        <Text mb="20px" textAlign="left" fontSize="24px">
          {t("Hold tickets")} : {userTickets}
        </Text>

        <Flex>
          <Button mr="20px" onClick={()=>{approve()}}>{t("Approve")}</Button>
          <Button onClick={()=>{withdraw()}}>{t("Withdraw")}</Button>
        </Flex>
        <Box mt="20px">
          <Flex justifyContent="space-between">
            <Flex width="45%">
              <Button style={{ whiteSpace: "nowrap" }} mr="10px" onClick={()=>{staking()}}>
                {t("Claim  Tickets")}
              </Button>
              <InputWrap
                readOnly={false}
                text={t("Fill tickets")}
                defaultVal={inputValue}
                btnClick={() => {
                  console.log(111);
                }}
                getValues = {setValues}
              ></InputWrap>
            </Flex>
            <Flex width="45%">
              <Button style={{ whiteSpace: "nowrap" }} mr="10px" onClick={()=>{NFTclaim()}}>
                NFT {t("Claim  Tickets")}
              </Button>
              <InputWrap
                readOnly={false}
                text={t("Fill tickets")}
                defaultVal={inputValue}
                btnClick={() => {
                  console.log(111);
                }}
                getValues = {setValues1}
              ></InputWrap>
            </Flex>
          </Flex>
        </Box>
      </BcBox>
      <Box width="70%" mt="20px">
        <Text mb="20px" textAlign="left" bold fontSize="30px">
          {t("My lucky numbers")}
        </Text>
      </Box>
      <BcBox>
        <p style={{ textAlign: "left" }}>{userMyTickets}</p>
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
