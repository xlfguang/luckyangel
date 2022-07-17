import { Box, Flex, Image, Text } from "@pancakeswap/uikit";
import styled from "styled-components";

const StyledBox = styled(Box)`
  @media (max-width: 1400px) {
    width: 100%;
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
    <StyledBox
      width="300px"
      margin="10px"
      background="#daf7ffc4"
      borderRadius="20px"
      padding="20px"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Image src={imgUrl} alt="" width={70} height={78} />
        <Text mt="20px" color="rgb(0, 114, 122)" fontSize="28px">
          {title}
        </Text>
        <Text mt="20px" color="rgb(0, 114, 122)">
          {text}
        </Text>
      </Flex>
    </StyledBox>
  );
};
