import { Box } from "@pancakeswap/uikit";
import styled from "styled-components";

const LineBoxStyle = styled(Box)<{ fs?: string }>`
  display: flex;
  flex-direction: column;
  font-size: ${({ fs }) => fs || "60px"};
  color: rgb(88, 88, 88);
  letter-spacing: 3px;
  & > span {
    margin: -3px 10px;
  }
`;
const LineBox = ({ text }: { text: string }) => {
  return (
    <LineBoxStyle>
      {text.split("").map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </LineBoxStyle>
  );
};
export default LineBox;
