import styled from "styled-components";
import { Box } from "@pancakeswap/uikit";

export const AutoFlex = styled(Box)<{
  borderColor?: string;
  margin?: string;
  bc?: string;
  justifyContent?: string;
}>`
  display: flex;
  width: 100%;
  align-items: center;
  border-color: ${({ borderColor }) => borderColor || "#e6e6e6"};
  justifycontent: ${({ justifyContent }) => justifyContent || "flex-start"};
  margin: ${({ margin }) => margin || "0"};
  background-color: ${({ bc }) => bc || ""};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
