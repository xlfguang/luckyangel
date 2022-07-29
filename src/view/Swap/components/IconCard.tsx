import { Box, Flex, Image, Text } from "@pancakeswap/uikit";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background: #daf7ffc4;
  @media (max-width: 1400px) {
    width: 100%;
  }
  :hover {
    background: #000000c4;
  }
`;
export const IconCard = ({
  imgUrl,
  title,
  text,
}: {
  imgUrl: string;
  title: string;
  text: string;
}) => {
  return (
    <StyledBox width="45%" margin="10px" borderRadius="20px" padding="20px">
      <Flex flexDirection="column" alignItems="flex-start">
        <Image src={imgUrl} alt="" width={70} height={78} />
        <Text mt="20px" color="rgb(0, 114, 122)" fontSize="28px">
          {title}
        </Text>
        <Text mt="20px" color="rgb(89 145 149)">
          {text}
        </Text>
      </Flex>
    </StyledBox>
  );
};
