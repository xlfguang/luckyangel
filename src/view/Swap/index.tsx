import {
  ArrowForwardIcon,
  Box,
  Button,
  Flex,
  VerifiedIcon,
  Text,
} from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import {
  MainBackground,
  MainBackgroundCard,
  MainBackgroundCardHeader,
} from "src/components/Card/Card";
import Page from "src/Page";
import { BorderBox } from "./components/BorderCard";
import { FlipCard } from "./components/FlipCard";
import { IconCard } from "./components/IconCard";
import { IconText } from "./components/IconText";
import { Title } from "./components/Title";
import icon1 from "../../images/icon15.png";
import icon2 from "../../images/icon16.png";
import styled from "styled-components";
import { AccountCard } from "src/components/GridContainer";
import { QADataRow } from "./components/QADataRow";
import LineText from "./components/LineText";
import { useContext, useEffect } from "react";
import { MyContext } from "src/components/Content/Content";

export default function Swap() {
  const { t } = useTranslation();
  // 在这引入全局变量
  const { state, dispatch } = useContext(MyContext) as any;
  const { invitationLink } = state;
  // 生命周期中使用dispatch 修改全局变量 如果有邀请链接就会保存
  useEffect(() => {
    if (window.location.hash) {
      dispatch({
        type: "UPDATE_INVITATION_LINK",
        payload: window.location.hash,
      });
    }
  }, []);
  // 这里只是为了展示 因为dispatch 有异步延迟 在上一个函数中是log不出来的 但是在别的页面不受影响
  useEffect(() => {
    console.log(invitationLink);
    // setTimeout(() => {
    //   dispatch({
    //     type: "UPDATE_LOAD",
    //     payload: true,
    //   });
    // }, 5000);
  }, [invitationLink]);
  return (
    <Page>
      <Title>{t("Lucky Angel")}</Title>

      <AutoFlex
        maxWidth="1200PX"
        width={"100%"}
        justifyContent="space-evenly"
        margin="20px"
        alignItems="stretch"
      >
        <BorderBox margin="0 20px 0 0">
          <Flex flexDirection={"column"} alignItems={"flex-start"}>
            <p style={{ fontSize: "32px", color: "#585858" }}>
              {t("Charity Lottery Pledge and Dividend Protocol")}
            </p>
            <br></br>
            <IconText>
              {t("Automatically distribute $USDT for holders")}
            </IconText>
            <IconText>
              {t(
                "5% of each transaction goes into the prize pool automatically"
              )}
            </IconText>
            <IconText>
              {t("1% of each transaction goes into the Marketing wallet")}
            </IconText>
            <IconText>
              {t("2% of each transaction goes to charity wallet")}
            </IconText>
            <IconText>{t("2% of each transaction for the dividend ")}</IconText>
            <IconText>
              {t(
                "The original Lucky Angel partner permanent lottery NFT dividend system"
              )}
            </IconText>
            <IconText>
              {t(
                "Reward users with a sustainable lottery model and dividends to make holders more determined to hold"
              )}
            </IconText>

            <br />
            <Flex>
              <Button scale="sm" startIcon={<ArrowForwardIcon />} mr="20px">
                {t("Click Here to Buy Lucky Angel")}
              </Button>
              <Button color="#000" scale="sm" variant="success">
                {t("Airdrop")}
              </Button>
            </Flex>
          </Flex>
        </BorderBox>

        <BorderBox bc="linear-gradient(to right,#439ca5,#6fd5d0)">
          <Flex
            flexDirection={"column"}
            height="100%"
            alignItems={"flex-start"}
            justifyContent="space-between"
          >
            <p style={{ fontSize: "32px", color: "#fff" }}>{t("ABOUT")}</p>
            <br></br>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#000",
                textAlign: "left",
                letterSpacing: "2px",
                lineHeight: "1.5",
              }}
            >
              {t(
                "$Lucky Angel is the first token integrated dividends, lottery and charity function. We reward the holders in a variety of ways to encourage them to hold on. Holders can receive $USDT rewards in every transaction, and participate in the lottery every two days. They can also vote on charity activities in proportion to their holdings."
              )}
            </p>
          </Flex>
        </BorderBox>
      </AutoFlex>
      <div style={{ width: "80%", marginBottom: "50px" }}>
        <MainBackgroundCard>
          <MainBackground>
            {t("Lucky Angel Contract")}
            0x6A4fcA7762C961F877Edbb486Dfbdb08483BEa0f
          </MainBackground>
        </MainBackgroundCard>
      </div>

      <Flex width="80%" flexDirection="column" alignItems="stretch">
        <Box width="80%">
          <p
            style={{
              color: "rgb(88, 88, 88)",
              letterSpacing: "0px",
              fontSize: "60px",
              textAlign: "left",
            }}
          >
            {t("The rights of Lucky Angel Holders")}
          </p>
          {/* <LineText text={t("The rights of Lucky Angel Holders")}></LineText> */}
        </Box>
        <Flex flexDirection="column" alignItems="stretch">
          <Title ta="left" margin="10px 0" color="rgb(40 41 159)">
            {t("1.Dividend $USDT")}
          </Title>
          <Title ta="left" margin="10px 0" color="rgb(0 137 255)">
            {t("2.Participate in the lottery")}
          </Title>
          <Title ta="left" margin="10px 0" color="rgb(43 174 142)">
            {t("3.Vote for charity")}
          </Title>
        </Flex>
      </Flex>

      <Title margin="40px 0">{t("How to participate in the lottery?")}</Title>
      <AutoFlex justifyContent="center">
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              {t("Invest 100 $Lucky Angel")}
            </Box>
          </MainBackground>
        </MainBackgroundCard>
        <ArrowForwardIcon height="50px" width="50px"></ArrowForwardIcon>
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              <p
                style={{
                  letterSpacing: "2px",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                {t(
                  "If you stake before the lottery draw, you will get a free lottery ticket. After the staking is over, you can withdraw your tokens without tax and wait for the result"
                )}
              </p>
            </Box>
          </MainBackground>
        </MainBackgroundCard>
      </AutoFlex>
      <Title margin="40px 0">{t("How It Works")}</Title>

      <AutoFlex justifyContent="center" isWrap alignItems="stretch" width="80%">
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("Dividends for holding coins")}
          text={t(
            "Lucky Angel is a native token for holding coins to obtain dividends. Each token holder automatically receives USDT dividends."
          )}
        />
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("How to get the lottery")}
          text={t(
            "Hold 100 Lucky Angel tokens for pledge at any time from 20:40-21:00 on the day of each lottery draw to get 1 free lottery (the number can be superimposed, that is, 200 tokens can get 2 coupons, which will be invalid after the end of the lottery draw), and then Fill in the number, take back the pledge at 21:00 without damage, and wait for the draw."
          )}
        />
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("Lottery Rules")}
          text={t(
            "The lottery draw is held every two days. The lottery time is fixed at 21:30. The winning numbers of each issue will be born from 1000 numbers from 1 to 1000. Each lottery ticket can be filled in the number freely. The lottery number and the lottery number are the same as the winning number."
          )}
        />
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("Lottery winning amount")}
          text={t(
            "The total amount of each draw is 50% of the bonus fund. The first prize gets 50% of the total draw amount, the second prize gets 30%, and the third prize gets 20%. If multiple people win the lottery, the winning amount will be divided equally. The winnings will be accumulated to the next period, and the initial bonus of the bonus fund pool is 30,000 USDT."
          )}
        />
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("NFT cooperation lottery")}
          text={t(
            "The total circulation of NFT cooperation lottery is 450, and each NFT cooperation lottery will be obtained without pledge to obtain each lottery. If the NFT cooperation lottery is transferred, its rights will also be transferred."
          )}
        />
        <IconCard
          imgUrl={"/img/logo.png"}
          title={t("Charity Vote")}
          text={t(
            "The corresponding voting weight is obtained according to the amount of currency held, and each charitable event is selected by voting."
          )}
        />
        <div style={{ width: "300px", margin: "10px" }}></div>
        <div style={{ width: "300px", margin: "10px" }}></div>
      </AutoFlex>
      {/* <Box width="80%">
        <Box background="#439ca5" borderRadius="20px" margin="20px 0">
          <FlipCard
            cardTitle={t("How It Works")}
            cardText={t(
              "5% of the selling fee will store in the Lucky Angel Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $Lucky Angel and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
            )}
            boxTitle={t("Keeps holders safe by")}
            justifyContent="space-between"
          >
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                通过价格稳定避免闪电崩盘
              </p>
            </Flex>
          </FlipCard>
        </Box>
        <Box background="#439ca5" borderRadius="20px" margin="20px 0">
          <FlipCard
            isReverse
            cardTitle={t("How It Works")}
            cardText={t(
              "5% of the selling fee will store in the Lucky Angel Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $Lucky Angel and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
            )}
            boxTitle={t("Keeps holders safe by")}
            justifyContent="space-between"
          >
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                通过价格稳定避免闪电崩盘
              </p>
            </Flex>
          </FlipCard>
        </Box>
        <Box background="#439ca5" borderRadius="20px" margin="20px 0">
          <FlipCard
            cardTitle={t("How It Works")}
            cardText={t(
              "5% of the selling fee will store in the Lucky Angel Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $Lucky Angel and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
            )}
            boxTitle={t("Keeps holders safe by")}
            justifyContent="space-between"
          >
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                {t("Greatly reducing downside risk")}
              </p>
            </Flex>
            <Flex margin="5px 0">
              <VerifiedIcon></VerifiedIcon>
              <p style={{ fontSize: "22px", color: "#280D5F" }}>
                通过价格稳定避免闪电崩盘
              </p>
            </Flex>
          </FlipCard>
        </Box>
      </Box> */}
      <Title margin="40px 0">{t("Tokenomics")}</Title>
      <Flex width="80%" justifyContent="space-evenly">
        <Box>
          <img style={{ width: "70px", height: "70px" }} src={icon1} alt="" />
          <Text color="#552020" fontSize="30px">
            {t("Buy")}
          </Text>
          <Text>10%{t("Slippage")}</Text>
        </Box>
        <Box>
          <img style={{ width: "70px", height: "70px" }} src={icon2} alt="" />
          <Text color="#552020" fontSize="30px">
            {t("Sell")}
          </Text>
          <Text>10%{t("Slippage")}</Text>
        </Box>
      </Flex>

      <Flex width="80%" flexDirection="column" alignItems="stretch">
        <Box width="100%">
          <p
            style={{
              color: "#000",
              fontSize: "60px",
              textAlign: "left",
            }}
          >
            {t("Automatically distribute USDT for holding coins")}
          </p>
          {/* <LineText text={t("The rights of Lucky Angel Holders")}></LineText> */}
        </Box>
        <Flex flexDirection="column" alignItems="baseline">
          <Title fs="42px" color="rgb(181 83 83)" margin="20px 0">
            {t("5% lottery pool")}
          </Title>
          <Title color="#000" fs="42px" margin="20px 0">
            {t("1% Marketing wallet")}
          </Title>
          <Title color="rgb(0 57 255)" fs="42px" margin="20px 0">
            {t("2% charitable wallet")}
          </Title>
          <Title color="rgb(14 14 44 / 40%)" fs="42px" margin="20px 0">
            {t("2% dividend rewards.")}
          </Title>
        </Flex>
      </Flex>

      <Title margin="40px 0">{t("FAQ's")}</Title>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="80%"
        background="#daf7ffc4"
        padding="20px"
        borderRadius="20px"
      >
        <QADataRow
          Q={t("Who is the Lucky Angel team?")}
          A={t(
            "The Lucky Angel team is composed of well-known domestic community-based charitable organizations, development, marketing and customer support teams. We have a lot of resources in this market, which allows us to easily reach influencers and gain an edge over our competitors."
          )}
        />
        <QADataRow
          Q={t("Has the team done a contract audit?")}
          A={t(
            "Yes, the team has obtained InterFi Network's contract audit, adding a layer of trust and protection for our investors"
          )}
        />
        <QADataRow
          Q={t("What are Lucky Ange Tokens?")}
          A={t(
            "Lucky Ange is a decentralized financial asset that rewards users with a sustainable dividend lottery model by using its unique innovative mechanism. It makes staking easier and more efficient, and provides the highest cryptocurrency stability returns for Lucky Ange token holders"
          )}
        />
        <QADataRow
          Q={t("What makes Lucky Ange different from other DeFi projects?")}
          A={t(
            "Lucky Ange, a new protocol designed to create a new decentralized model in the DeFi space. Holders will receive USDT income dividends, and can get free lottery draws to earn huge bonuses, this method provides immediate value to token holders, while also cultivating an interest in seeing the project flourish. Get involved in the community. Our goal is to use the community as a cohesive and focused unit to create wealth and strength for the community. This new concept in DeFi, we believe it will set a new industry standard. Lucky Ange is currently one of the hottest projects in the DeFi space."
          )}
        />
        <QADataRow
          Q={t("Where to buy $Lucky Ange tokens?")}
          A={t("Buy with Pancakeswap")}
        />
        <QADataRow
          Q={t("How to buy $Lucky Ange tokens?")}
          A={`
        ${t("1. Go to the Pancakeswap Binance Smart Chain network.")}
        ${t(
          "2. Connect any compatible wallet (usually metamask / coinbase dex wallet / TP wallet/trustwallet)."
        )}
        ${t(
          "3. In the top box, select the token you want to exchange with $Lucky Ange (usually BNB or USDT)"
        )}
        ${t("4. In the bottom box, paste the $Lucky Ange contract address.")}
        ${t(
          "5. Select the amount of $ Lucky Ange you want to buy, make sure you have enough BNB in your wallet to cover the GAS fee for the transaction."
        )}
        ${t("6. Click the settings icon and set the slippage to 11%-15%.")}
        ${t(
          "7. When you are ready to confirm the transaction, tap Swap, then Confirm Swap. This will show the transaction to be confirmed in your wallet. Make sure you are willing and able to pay the quoted gas fee, then confirm the transaction in your wallet."
        )}
        `}
        />

        <QADataRow
          Q={t("What should I do after buying $Lucky Ange tokens?")}
          A={t(
            "Start earning USDT dividends simply by holding $ Lucky Ange tokens in your wallet. These rewards are distributed to your wallet in the form of $USDT tokens, allowing you to easily start earning. And get a lottery ticket."
          )}
        />
      </Flex>
    </Page>
  );
}
