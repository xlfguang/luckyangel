import styled from "styled-components";
import { Box } from "@pancakeswap/uikit";

export const AutoFlex = styled(Box)<{
  width?: string;
  borderColor?: string;
  margin?: string;
  bc?: string;
  justifyContent?: string;
  isWrap?: boolean;
  alignItems?: string;
  wepWidth?: string;
}>`
  display: flex;
  width: ${({ width }) => width || "100%"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  border-color: ${({ borderColor }) => borderColor || "#e6e6e6"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  margin: ${({ margin }) => margin || "0"};
  background-color: ${({ bc }) => bc || ""};
  flex-wrap: ${({ isWrap }) => (isWrap ? "wrap" : "nowrap")};
  @media (max-width: 768px) {
    flex-direction: column;
    width: ${({ wepWidth }) => wepWidth || "100%"};
  }
`;
