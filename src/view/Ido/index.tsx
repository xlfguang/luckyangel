import {
  Card,
  Box,
  CardBody,
  CardHeader,
  IconButton,
  AddIcon,
  MinusIcon,
  Button,
  Flex,
} from "@pancakeswap/uikit";
import { useContext,useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "src/Page";
import styled from "styled-components";
import TakePart from "./components/TakePart";
import { MyContext } from "src/components/Content/Content";
import { BigNumber, Contract, ethers, Wallet, providers, utils } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TokenAdr,UsdtAdr,LuckIdoAdr,muticallAdr} from 'src/view/token';
export const IdoProgressbar = styled(Box)`
  padding-right: 0;
  margin-right: 0;

  width: 100%;
  box-sizing: border-box;

  display: inline-block;
  vertical-align: middle;

  & .outer {
    height: 24px;
    border-radius: 100px;
    background-color: #1d2237;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }

  & .inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #599794;
    text-align: right;
    border-radius: 100px;
    white-space: nowrap;
    transition: width 0.6s ease;
    line-height: 20px;
  }

  & .innerText {
    font-size: 12px;
    margin: 0 5px;
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
  }
`;

export const IdoEntryList = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 6px;

    font-size: 12px;
    font-weight: 400;

    & .title {
        width: 115px;
        transform: scale(.9);
        color: #8e94bb;
        font-size: 14px;
    }

    & .content {
        font-size: 14px;
    }






    ${({ theme }) => theme.mediaQueries.md} {
        padding-top: 10px;

        & .title {
            width: unset;
            transform: scale(1);
        }

        & .content {
            font-size: 16px;
        }
     
    }
    
    }
`;

export const IdoMe = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;

  & .image {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }

  & .image-title {
    font-weight: 600;
    padding-top: 6px;
    font-size: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & .image-title {
      padding-top: 20px;
      font-size: 20px;
    }
  }
`;

export const IdoInput = styled(Box)`
  & .list-title {
    padding-bottom: 6px;
    font-size: 14px;
  }

  & .input-number {
    width: 100%;
    position: relative;
    display: inline-block;
    line-height: 38px;
  }

  & .input-inner {
    font-size: 18px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    -webkit-appearance: none;
    background-color: #60a8b6;
    background-image: none;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }

  & button {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 40px;
    &.button--disabled {
      background-color: transparent;
      border-color: rgba(220, 223, 230, 0.09);
    }
  }

  & .add-btn {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid rgba(220, 223, 230, 0.09);
  }

  & .minus-btn {
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid rgba(220, 223, 230, 0.09);
  }
`;

export const IdoBtn = styled(Box)`
  padding: 10px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px 0;
  }
`;

export const IdoTitle = styled(Box)`
  text-align: left;
  padding-bottom: 6px;
  color: #676c9b;
  font-size: 14px;
`;
export default function Ido() {
  const { t } = useTranslation();
  const [contracts,setContrats] = useState({} as any);
  const [amount,setAmount] = useState("0");
  const [poolUsdtAmount,setPoolUsdtAmount] = useState("0");
  const [userUsdtAmount,setUserUsdtAmount] = useState("0");
  const [userAGAmount,setUserAGAmount] = useState("0");
  const [userIdoUsdtAmount,setUserIdoUsdtAmount] = useState("0");
  const [percentage,setPercentage] = useState(10);
  const { state, dispatch } = useContext(MyContext) as any;
  const { privateAddress,walletWithProvider } = state.obj;
  const {invitationLink} = state;



 useEffect(()=>{
  (async()=>{
    // var url = "https://bsc-dataseed.binance.org";
    var url = "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  var provider = new providers.JsonRpcProvider(url);
  var erc20AbiPool = require("../abi/erc20.json");
  contracts["USDT"] = new Contract(UsdtAdr, erc20AbiPool, provider);
  var amountU = await contracts["USDT"].balanceOf(LuckIdoAdr);
  setPercentage(amountU.div(BigNumber.from(10).pow(16)).toNumber()/500000);
  setPoolUsdtAmount(amountU.div(BigNumber.from(10).pow(18)).toString());
  if(privateAddress){
    var mutiAbi = require("../abi/muticall.json");
    contracts["muticall"] = new Contract(muticallAdr, mutiAbi, provider);
    var list1 = await contracts["muticall"].getUserInfoIdo(privateAddress);

    setUserAGAmount(list1[0].div(BigNumber.from(10).pow(18)).toString());
    setUserUsdtAmount(list1[1].div(BigNumber.from(10).pow(18)).toString());
    setUserIdoUsdtAmount(list1[2].toString());
  }

  })()
  },[privateAddress])

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
        dispatch({
        type: "UPDATE_LOAD",
        payload: true,
      });

try {
  var erc20AbiPool = require("../abi/erc20.json");
  (contracts.erc20 as any) = new Contract(UsdtAdr, erc20AbiPool, walletWithProvider);
  var tx = await contracts["erc20"].approve(LuckIdoAdr,"10000000000000000000000000000");
      await tx.wait();
} catch (error) {
  dispatch({
    type: "UPDATE_LOAD",
    payload: false,
  });
   toast.error("Approve fail", {
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
       dispatch({
        type: "UPDATE_LOAD",
        payload: false,
      });
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

  const ido = async() =>{
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
    var idoAbi = require("../abi/ido.json");
    (contracts.ido as any) = new Contract(LuckIdoAdr, idoAbi, walletWithProvider);
    var adr1 = "";
    if(invitationLink){
      adr1 = invitationLink;
      adr1 = adr1.substr(1);
    }else{
      adr1 = "0x8Ab90d312da4FEBfa09FA9d7C393598aDCd14804";
    }
    dispatch({
      type: "UPDATE_LOAD",
      payload: true,
    });
    try {
      var tx = await contracts["ido"].idohandel(adr1,amount);
    await tx.wait();
    } catch (error) {
      dispatch({
        type: "UPDATE_LOAD",
        payload: false,
      });
      toast.error("Ido fail", {
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
    dispatch({
      type: "UPDATE_LOAD",
      payload: false,
    });
    toast.success("Ido success", {
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

  const claim = async() =>{
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
    dispatch({
      type: "UPDATE_LOAD",
      payload: true,
    });
   try {
    var idoAbi = require("../abi/ido.json");
    (contracts.ido as any) = new Contract(LuckIdoAdr, idoAbi, walletWithProvider);
    var tx = await contracts["ido"].claim();
    await tx.wait();
   } catch (error) {
    dispatch({
      type: "UPDATE_LOAD",
      payload: false,
    });
    toast.error("Claim fail", {
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
   dispatch({
    type: "UPDATE_LOAD",
    payload: false,
  });
  
    toast.success("Claim success", {
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

  const setValue = (e:any) =>{

    setAmount(e.target.value);
  }

  return (
    <Page>
      <ToastContainer/>
      <Card>
        <CardHeader>{t("Lucky Angel PLUS IDO")}</CardHeader>
        <CardBody>
          <div className="desc-image">
            <IdoMe>
              <div className="image">
                <img
                  alt="logo"
                  src="/img/logo.png"
                />
              </div>
              <div className="image-title">
                {t("Take Part In The Lucky Angel Sale!")}
              </div>
            </IdoMe>
          </div>
          <div style={{ paddingTop: "45px", width: "500px" }} className="entry">
            <IdoEntryList>
              <div className="title">{t("Start Time")}</div>
              <div className="content"> {0}</div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("End Time")}</div>
              <div className="content"> {0}</div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("Total Amount")}</div>
              <div className="content"> 1,000,000 Lucky Angel</div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("Fund to Raise")}</div>
              <div className="content">500,000 USDT</div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("Token Price")}</div>
              <div className="content">100 Lucky Angel / 100 USDT </div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("Max Raise Per User")}</div>
              <div className="content"> 500 USDT</div>
            </IdoEntryList>
            <IdoEntryList>
              <div className="title">{t("You Have Raised")}</div>
              <div className="content">{userIdoUsdtAmount} USDT</div>
            </IdoEntryList>
          </div>

          <div>
            <Box className="progress" mb="10px">
              <div className="list-title" style={{ marginBottom: "8px" }}>
                {t("Increase Progression")} ({poolUsdtAmount} USDT / 500,000 USDT)
              </div>
              <div role="progressbar">
                <IdoProgressbar>
                  <div className="outer">
                    <div className="inner" style={{ width: `${percentage}%` }}>
                      <div className="innerText">{percentage}%</div>
                    </div>
                  </div>
                </IdoProgressbar>
              </div>
            </Box>

            <IdoInput>
              <div className="list-title">{t("Please Input USDT Amount")}</div>
              <div className="input-txt">
                <div className="input-number">
                  <IconButton variant="text" className="add-btn">
                    <AddIcon />
                  </IconButton>
                  <IconButton variant="text" className="minus-btn">
                    <MinusIcon color="text" />
                  </IconButton>
                  <div className="el-input">
                    <input
                      type="text"
                      autoComplete="off"
                      className="input-inner"
                      role="spinbutton"
                      onBlur={(e) => setValue(e)}
                    />
                  </div>
                </div>
              </div>
            </IdoInput>

            <Button margin="10px 0" width="50%" onClick={()=>approve()}>
              {"授权"}
            </Button>
            <Button margin="10px 0" width="50%" onClick={()=>ido()}>
              {"认购"}
            </Button>

            <Flex justifyContent="space-between" alignItems="center">
              <div style={{ width: "80%" }}>
                <IdoTitle>
                  {t("Your USDT Balance")}: {userUsdtAmount}
                </IdoTitle>
                <IdoTitle>
                  {t("Your Lucky Angel Balance")}: {userAGAmount}
                </IdoTitle>
              </div>
              <div className="box_fr">
                <div className="desc-btn">
                  <Button onClick={()=>claim()}>{t("Claim")}</Button>
                </div>
              </div>
            </Flex>
          </div>
        </CardBody>
      </Card>

      <TakePart />
    </Page>
  );
}
