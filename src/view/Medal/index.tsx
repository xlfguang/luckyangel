import Page from "src/Page";
import { Button, Flex, Text, Box, BoxProps, Input } from "@pancakeswap/uikit";
import { AutoFlex } from "src/components/AutoFlex/AutoFlex";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import InputWrap, { ActionInput, InputPanel } from "src/components/InputWrap";
import { useState } from "react";
import NumberBox from "./components/numberBox";

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
  const [inputValue, setInputValue] = useState("");
  return (
    <Page>
      <Box width="70%" mt="40px">
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("The lottery results")}
          </Text>
          <NumberBox num="1547"></NumberBox>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("The lottery results")}
          </Text>
          <NumberBox num="2547"></NumberBox>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="30px">
          <Text fontSize="80px" bold>
            {t("The lottery results")}
          </Text>
          <NumberBox num="5447"></NumberBox>
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

        <Flex>
          <Button mr="20px">{t("Stake")}</Button>
          <Button>{t("Withdraw")}</Button>
        </Flex>
        <Box mt="20px">
          <Flex justifyContent="space-between">
            <Flex width="45%">
              <Button style={{ whiteSpace: "nowrap" }} mr="10px">
                {t("Claim Your Tickets")}
              </Button>
              <InputWrap
                readOnly={false}
                text={t("Fill in your tickets")}
                defaultVal={inputValue}
                btnClick={() => {
                  console.log(111);
                }}
              ></InputWrap>
            </Flex>
            <Flex width="45%">
              <Button style={{ whiteSpace: "nowrap" }} mr="10px">
                NFT {t("Claim Your Tickets")}
              </Button>
              <InputWrap
                readOnly={false}
                text={t("Fill in your tickets")}
                defaultVal={inputValue}
                btnClick={() => {
                  console.log(111);
                }}
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
        <p style={{ textAlign: "left" }}>1544</p>
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
