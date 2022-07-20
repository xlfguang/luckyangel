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

export default function Swap() {
  const { t } = useTranslation();
  return (
    <Page>
      <Title>{t("Lucky Angel Auto-Staking Protocol")}</Title>

      <AutoFlex
        maxWidth="1200PX"
        width={"100%"}
        justifyContent="space-evenly"
        margin="20px"
      >
        <BorderBox margin="0 20px 0 0">
          <Flex flexDirection={"column"} alignItems={"flex-start"}>
            <p style={{ fontSize: "32px", color: "#585858" }}>
              {t("Charity Lottery Pledge and Dividend Agreement")}
            </p>
            <br></br>
            <IconText>{t("Automatically distribute USDT in your wallet")}</IconText>
            <IconText>{t("5% of each transaction goes into the prize pool automatically")}</IconText>
            <IconText>
              {t("1% of each transaction goes into the Marketing Fund")}
            </IconText>
            <IconText>
              {t("2% of each transaction goes to charitable funds")}
            </IconText>
            <IconText>
              {t("2% of each transaction goes into the dividend fund")}
            </IconText>
            <IconText>
              {t("The original Lucky Angel partner permanent lottery NFT dividend system")}
            </IconText>
            <IconText>{t("EGG Collaboration Medal NFT Bonus System")}</IconText>
            <IconText>{t("Click Here to Buy Lucky Angel")}</IconText>
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

        <BorderBox margin="10px 0 0 0 " bc="#fffbdad6">
          <Flex flexDirection={"column"} alignItems={"flex-start"}>
            <p style={{ fontSize: "32px", color: "#1fc7d4" }}>{t("ABOUT")}</p>
            <br></br>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#00727a",
              }}
            >
              {t(
                "The original Lucky Angel partner permanent lottery NFT dividend system"
              )}
            </p>
            
          </Flex>
        </BorderBox>
      </AutoFlex>
      <div style={{ width: "80%", marginBottom: "50px" }}>
        <MainBackgroundCard>
          <MainBackground>
            {t("Lucky Angel Contract")}0x6A4fcA7762C961F877Edbb486Dfbdb08483BEa0f
          </MainBackground>
        </MainBackgroundCard>
      </div>
      <Title>
        {t(
          "All Lucky Angel holders will receive automatic dividend rewards, free lottery coupons every two days, and select charitable activities based on the voting rights obtained by holding coins"
        )}
      </Title>

      <Title margin="40px 0">{t("How to participate in winning the prize?")}</Title>
      <AutoFlex justifyContent="center">
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              {t(
                "Invest 100 $Lucky Angel"
              )}
            </Box>
          </MainBackground>
        </MainBackgroundCard>
        <ArrowForwardIcon height="50px" width="50px"></ArrowForwardIcon>
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              {t(
                "If you pledge before the lottery draw, you will get a free lottery ticket. After the pledge is over, the pledge will be retrieved without any damage, and you will be waiting for the draw."
              )}
            </Box>
          </MainBackground>
        </MainBackgroundCard>
      </AutoFlex>
      <Title margin="40px 0">{t("How It Works")}</Title>

      <AutoFlex justifyContent="center" isWrap>
        <IconCard
          imgUrl={"https://www.Lucky Angel.org/expansion/describe/img/icon1.png"}
          title={"$Lucky Angel"}
          text={t(
            "$Lucky Angel is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $Lucky Angel in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$Lucky Angel"}
          text={t(
            "$Lucky Angel is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $Lucky Angel in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$Lucky Angel"}
          text={t(
            "$Lucky Angel is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $Lucky Angel in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$Lucky Angel"}
          text={t(
            "$Lucky Angel is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $Lucky Angel in your wallet!"
          )}
        />
      </AutoFlex>
      <Title margin="40px 0">{t("Lucky Angel Insurance Fund (EIF)")}</Title>
      <Box width="80%">
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
      </Box>
      <Title margin="40px 0">{t("Tokenomics")}</Title>
      <Flex width="80%" justifyContent="space-evenly">
        <Box>
          <img style={{ width: "70px", height: "70px" }} src={icon1} alt="" />
          <Text color="#552020" fontSize="30px">
            {t("Buy")}
          </Text>
          <Text>15%{t("Slippage")}</Text>
        </Box>
        <Box>
          <img style={{ width: "70px", height: "70px" }} src={icon2} alt="" />
          <Text color="#552020" fontSize="30px">
            {t("Sell")}
          </Text>
          <Text>15%{t("Slippage")}</Text>
        </Box>
      </Flex>
     
    </Page>
  );
}
