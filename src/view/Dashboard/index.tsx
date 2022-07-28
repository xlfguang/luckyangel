import { Box, Flex, Text } from "@pancakeswap/uikit";
import { MainBackground, MainBackgroundCard } from "src/components/Card/Card";
import Page from "src/Page";
import backgroundImage from "src/images/banner.2224160a.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const AutoPCandwep = styled(Box)<{
  pcw?: string;
  wepw?: string;
}>`
  width: ${(props) => (props.pcw ? props.pcw : "80%")}; 
  @media (max-width: 768px) {
    width: ${(props) => (props.wepw ? props.wepw : "100%")}; 
    .text{
      font-size: 1.2rem;
    }
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


export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <Page>
      <AutoPCandwep
        pcw="70%"
        wepw="100%"
        height="169px"
        borderRadius="35px"
        background={`url(${backgroundImage}) 0% 0% / 100% 100% #439ca5`}
      >
        <Flex
          flexWrap="wrap"
          height="100%"
          justifyContent="space-between"
          padding="10px 0 0 0"
        >
          <Box width="48%">
            <Text>{t("$Lucky Angel price")}</Text>
            <Text className="text" fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="48%">
            <Text>{t("Market Cap")}</Text>
            <Text className="text" fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>

          <Box width="48%">
            <Text>{t("Total Supply")}</Text>
            <Text className="text" fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="48%">
            <Text>{t("Buy/Sell Tax")}</Text>
            <Text className="text" fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
        </Flex>
      </AutoPCandwep>
      <AutoPCandwepFlex
        mt="30px"
        pcw="70%"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Pool Value")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Total $USDT dividends")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Lottery Pool")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Total lottery drawn")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Draw times")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Total number of winners")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Charity Pool")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box
          margin="10px 0"
          width="48%"
          background="linear-gradient(to right, #439ca5, #6fd5d0)"
          borderRadius="20px"
          padding="20px 0"
        >
          <Text>{t("Charity fund used")}</Text>
          <Text>$467,623</Text>
        </Box>
      </AutoPCandwepFlex>
    </Page>
  );
}
