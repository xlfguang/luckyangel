import styled from "styled-components";
import { CardHeader, CardBody, Card } from "@pancakeswap/uikit";

// 背景主色调渐变色 从#49b4ac 到 #fff9c7
export const MainBackground = styled(CardBody)`
  background: linear-gradient(to right, #439ca5, #6fd5d0);
  color: #fff;
`;
export const MainBackgroundCardHeader = styled(CardHeader)<{ color?: string }>`
  background: linear-gradient(to right, #439ca5, #6fd5d0);
  color: ${({ color }) => {
    return color || "#fff";
  }};
`;
export const MainBackgroundCard: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <Card  {...props} padding="0" >
      {children}
    </Card>
  );
};
