import { Button, Flex, Text, Box, BoxProps } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { MainBackground, MainBackgroundCard } from "src/components/Card/Card";
import Page from "src/Page";
import styled from "styled-components";
import { BorderBox } from "../Swap/components/BorderCard";

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

  return (
    <Page>
      <Button padding="0 100px" mb="20px" variant="danger">
        {t("Connect Wallet")}
      </Button>
      <Flex width="70%" justifyContent="space-between">
        <Box width="100%">
          <BorderBox borderColor="rgb(0 150 212)">
            <Flex justifyContent='space-between' alignItems='center'>
              <Box width="45%">
                <Text color="rgb(0 150 212)" fontSize="38px" fontWeight="600">
                  {t("Apply for Collaboration")}
                </Text>
                <Button padding="0 50px" mr="16px" mt="20px" disabled>
                  {t("Staking")}
                </Button>
                <Button padding="0 50px" mr="16px" mt="20px" disabled>
                  {t("Claim")}
                </Button>
              </Box>
              <Box width="45%">
                <Text fontSize="38px" fontWeight="600">
                  {t("Role")}
                </Text>
                <Button mt="20px">{t("Ordinary Account")}</Button>
              </Box>
            </Flex>
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
          <CardBox topText={"0"} bottomText={t("IDO Participants")} />
          <CardBox topText={"0"} bottomText={t("Referral Count")} />
          <CardBox topText={"0"} bottomText={t("直推购买")} />
          <CardBox topText={"0"} bottomText={t("直推奖励")} />
          <CardBox topText={"0"} bottomText={t("团队IDO业绩")} />
          <CardBox topText={"0"} bottomText={t("团队人数")} />
        </AutoFlex>
      </Box>
    </Page>
  );
}
