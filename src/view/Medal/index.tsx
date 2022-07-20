import Page from "src/Page";
import { Button, Flex, Text, Box, BoxProps } from "@pancakeswap/uikit";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
const CardBox: React.FC<
  { topText: string; bottomText: string } & BoxProps &
    React.HTMLAttributes<HTMLDivElement>
> = ({ topText, bottomText, ...porps }) => {
  return (
    <CardBoxStyle {...porps}>
      <Text color="#0034b4" bold fontSize="24px">
        {topText}
      </Text>
      <Text color="#295358" bold fontSize="24px">
        {bottomText}
      </Text>
    </CardBoxStyle>
  );
};

export default function Medal() {
  const { t } = useTranslation();
  return (
    <Page>
      <Box width="70%" mt="40px">
        <AutoFlex isWrap justifyContent="space-between">
          <CardBox
            topText={t("Number of Medals in the Network")}
            bottomText={"1999"}
          />
          <CardBox topText={t("我的勋章持有数量")} bottomText={"0"} />
          <CardBox topText={t("Dividend Received")} bottomText={"4,051"} />
          <CardBox
            topText={t("Expected dividend per Medal (day)")}
            bottomText={"12"}
          />
          <CardBox
            topText={t("Expected dividend per Medal (month)")}
            bottomText={"12"}
          />
          <CardBox
            topText={t("Expected dividend per Medal (year)")}
            bottomText={"12"}
          />
        </AutoFlex>
      </Box>

      <Box width="70%" mt="40px">
        <Text mb="20px" textAlign="left" bold fontSize="30px">
          {t("Dividends you can receive:")} {0} {t("Lucky Angel")}
        </Text>
        <Text textAlign="left" bold fontSize="30px" color="#000">
          {t("My Medal")}: 
          <span style={{ fontSize: "16px" }}>
            {"NFT Contract Address:0x9f278be3867CA5e6DDb99ED85C3F035CbA1A02D5"}
          </span>
        </Text>
      </Box>
    </Page>
  );
}
