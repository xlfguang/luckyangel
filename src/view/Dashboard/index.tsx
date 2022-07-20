import { Box, Flex, Text } from "@pancakeswap/uikit";
import { MainBackground, MainBackgroundCard } from "src/components/Card/Card";
import Page from "src/Page";
import backgroundImage from "src/images/banner.2224160a.png";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <Page>
      <Box
        width="70%"
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
          <Box width="33%">
            <Text>{t("EGG price")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="33%">
            <Text>{t("Market Cap")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="33%">
            <Text>{t("Circulating Supply")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="33%">
            <Text>{t("Back Liquidity")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="33%">
            <Text>{t("Next Rebase")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
          <Box width="33%">
            <Text>{t("Total Supply")}</Text>
            <Text fontSize="32px" color="rgb(255 240 186)">
              $0.7623
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex mt='30px' width="70%" flexWrap="wrap" justifyContent='space-between'>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("Pool Value")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("Market Value of Treasury Asset")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("Medal of Lucky Angel NFT Dividend")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("Lottery")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("EGG Insurance Fund Value")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("# Burned")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("$ Burned")}</Text>
          <Text>$467,623</Text>
        </Box>
        <Box margin='10px 0' width="48%" background='linear-gradient(to right, #439ca5, #6fd5d0)' borderRadius='20px' padding='20px 0'>
          <Text>{t("% Burned:Supply")}</Text>
          <Text>$467,623</Text>
        </Box>
      </Flex>
      
     
    </Page>
  );
}
