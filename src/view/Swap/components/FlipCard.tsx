import styled from "styled-components";
import { Text, Box, BoxProps, Flex, FlexProps } from "@pancakeswap/uikit";

const FlexStyle = styled(Flex)`
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const OneHundred = styled(Box)<BoxProps>`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const FlipCard: React.FC<
  {
    cardTitle: string;
    cardText: string;
    boxTitle: string;
    isReverse?: boolean;
  } & BoxProps &
    FlexProps &
    React.HTMLAttributes<HTMLDivElement>
> = ({ cardTitle, cardText, boxTitle, children, isReverse, ...props }) => {
  return (
    <FlexStyle {...props} flexDirection={isReverse ? "row-reverse" : "row"}>
      <OneHundred width="40%">
        <Text textAlign="left" fontSize="34px">
          {boxTitle}
        </Text>
        <Box>{children}</Box>
      </OneHundred>
      <OneHundred
        width="50%"
        background="#fffbdad6"
        borderRadius="20px"
        padding="10px"
      >
        <Text fontSize="34px">{cardTitle}</Text>
        <Text>{cardText}</Text>
      </OneHundred>
    </FlexStyle>
  );
};
