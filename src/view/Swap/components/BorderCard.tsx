import styled from "styled-components";
import { Box } from "@pancakeswap/uikit";

export const BorderBox = styled(Box)<{ borderColor?: string,margin?:string,bc?:string }>`
  width: 100%;
  border-width: 2px;
  border-style: solid;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
  border-color: ${({ borderColor }) => borderColor || "#e6e6e6"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ bc }) => bc || ""};
`;
