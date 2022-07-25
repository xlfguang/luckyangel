import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Checkbox,
  Button,
} from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import Page from "src/Page";
import styled from "styled-components";
import { Title } from "../Swap/components/Title";
const ImgBoxStyle = styled(Box)`
  margin:0 10px;
  border: 2px solid #9da8d6;
  border-radius: 5px;
  width: 160px;
  height: 180px;
  color: #000;
  position: relative;
  flex: none;
  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  & > div {
    border-radius: 0 0 5px 5px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    width: 101%;
    padding: 5px;
  }
`;
const ImgBox = ({
  src,
  text,
  vote,
}: {
  src: string;
  text: string;
  vote?: boolean;
}) => {
  return (
    <Box>
      <ImgBoxStyle>
        <img src={src} alt="" />
        <div>{text}</div>
      </ImgBoxStyle>
      {vote && (
        <Box mt="10px">
          <Checkbox />
        </Box>
      )}
    </Box>
  );
};

const ScrollBox = styled(Box)`
  & > div {
    float: left;
    margin: 0 20px;
  }
`;

const Charity = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Title>{t("Vote for the charity activity you prefer")}</Title>
      <Box width="50%">
        <Card mt="20px">
          <CardBody>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Charity Pool")}
              </Box>
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Charity Activity Times")}
              </Box>
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Charity fund used")}
              </Box>
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Charity participants")}
              </Box>
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Your tokens")}
              </Box>
              <Box width="45%" m="10px 0" style={{ fontSize: "26px" }}>
                {t("Your Voting weight")}
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      <Box width="70%">
        <Card mt="20px">
          <CardHeader>{t("activity for vote")}</CardHeader>
          <CardBody>
            <Flex justifyContent="space-between">
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
                vote
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
                vote
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
                vote
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
                vote
              />
            </Flex>
            <Button>投票</Button>
          </CardBody>
        </Card>
      </Box>
      <Box width="70%">
        <Card mt="20px">
          <CardHeader>{t("Charity Activity History")}</CardHeader>
          <CardBody>
            <Flex width="100%" overflowX="scroll">
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />{" "}
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />{" "}
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />{" "}
              <ImgBox
                src={"/img/logo.png"}
                text={"图片的文字"}
              />
            </Flex>
          </CardBody>
        </Card>
      </Box>
    </Page>
  );
};
export default Charity;
