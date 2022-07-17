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
      <Title>{t("EggPlus Auto-Staking Protocol")}</Title>

      <AutoFlex
        maxWidth="1200PX"
        width={"100%"}
        justifyContent="space-evenly"
        margin="20px"
      >
        <BorderBox margin="0 20px 0 0">
          <Flex flexDirection={"column"} alignItems={"flex-start"}>
            <p style={{ fontSize: "32px", color: "#585858" }}>
              {t("High Paying Auto-Staking Auto-Compounding Protocol")}
            </p>
            <br></br>
            <IconText>{t("Cryptocurrency With Max APY - 183,294%")}</IconText>
            <IconText>{t("No Risk - No Investment")}</IconText>
            <IconText>
              {t("Auto Staking & Compound Interest Every 15 Minutes")}
            </IconText>
            <IconText>
              {t("5% of Purchased Transaction Enters Into LP")}
            </IconText>
            <IconText>
              {t("2.5% of Sold Transaction Sends To Burned Address")}
            </IconText>
            <IconText>
              {t("5% of Sold Transaction Enters Into Insurance Fund")}
            </IconText>
            <IconText>{t("EGG Collaboration Medal NFT Bonus System")}</IconText>
            <IconText>{t("Click Here to Buy EGGPLUS")}</IconText>
            <br />
            <Flex>
              <Button scale="sm" startIcon={<ArrowForwardIcon />} mr="20px">
                {t("Click Here to Buy EGGPLUS")}
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
                "A decentralized financial asset which rewards users with a sustainable fixed compound interest model"
              )}
            </p>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "5px",
                color: "#00727a",
              }}
            >
              {t(
                "Delivering one of the top fixed APY in the industry, simply by buying and holding $EGGPLUS"
              )}
            </p>
          </Flex>
        </BorderBox>
      </AutoFlex>
      <div style={{ width: "80%", marginBottom: "50px" }}>
        <MainBackgroundCard>
          <MainBackground>
            {t("EGGPLUS Contract")}0x6A4fcA7762C961F877Edbb486Dfbdb08483BEa0f
          </MainBackground>
        </MainBackgroundCard>
      </div>
      <Title>
        {t(
          "All EggPlus holders are rewarded with automatic compound interest which is paid everyday!"
        )}
      </Title>

      <Title margin="40px 0">{t("How much can I earn")}</Title>
      <AutoFlex justifyContent="center">
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              {t(
                "At the end of the year and with< $1,000 USD of  $EGGPLUS invested."
              )}
            </Box>
          </MainBackground>
        </MainBackgroundCard>
        <ArrowForwardIcon height="50px" width="50px"></ArrowForwardIcon>
        <MainBackgroundCard>
          <MainBackground>
            <Box padding="50px" width="400px">
              {t(
                "You can earn up to $1,832,940 USD of $EGGPLUS at 183,294% APY*."
              )}
            </Box>
          </MainBackground>
        </MainBackgroundCard>
      </AutoFlex>
      <Title margin="40px 0">{t("How It Works")}</Title>

      <AutoFlex justifyContent="center" isWrap>
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$EGGPLUS"}
          text={t(
            "$EGGPLUS is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $EGGPLUS in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$EGGPLUS"}
          text={t(
            "$EGGPLUS is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $EGGPLUS in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$EGGPLUS"}
          text={t(
            "$EGGPLUS is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $EGGPLUS in your wallet!"
          )}
        />
        <IconCard
          imgUrl={"https://www.eggplus.org/expansion/describe/img/icon1.png"}
          title={"$EGGPLUS"}
          text={t(
            "$EGGPLUS is a native token that garners interest reward. Holders gain 0.021447% interest every 15 minutes automatically. Just hold $EGGPLUS in your wallet!"
          )}
        />
      </AutoFlex>
      <Title margin="40px 0">{t("EggPlus Insurance Fund (EIF)")}</Title>
      <Box width="80%">
        <Box background="#439ca5" borderRadius="20px" margin="20px 0">
          <FlipCard
            cardTitle={t("How It Works")}
            cardText={t(
              "5% of the selling fee will store in the EggPlus Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $EggPlus and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
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
              "5% of the selling fee will store in the EggPlus Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $EggPlus and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
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
              "5% of the selling fee will store in the EggPlus Insurance Fund, which will be used to invest in the most potential digital assets. 50% of the profits will go into the repurchase pool, of which 25% will be used to repurchase $EggPlus and increase liquidity. Through the insurance fund, we can better support up to 183,294% of our APY."
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
