import { Box } from "@pancakeswap/uikit";
import { useState } from "react";
import styled from "styled-components";

const QADataRowBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #9da8d6;
  padding: 10px 30px;
  text-align: left;

  & > p {
    font-family: Montserrat Medium;
    font-weight: normal;
    font-size: 28px;
    color: #0f2559;
    line-height: 1;
    letter-spacing: 0.00938em;
    text-align: left;
    margin-bottom: 10px;
  }
  & > p:hover {
    color: rgb(212,35,122);
  }

  & > h5 {
    color: #3e849dde;
    font-family: "Montserrat Medium";
    font-weight: bolder;
    font-size: 20px;
    line-height: 1.334;
    letter-spacing: 0em;
    margin-top: 10px;
    text-align: left;
    overflow: hidden;
    transition: all 0.3s;
  }
`;

export const QADataRow = ({ Q, A }: { Q: string; A: string }) => {
  const [Ashow, setAshow] = useState(false);
  return (
    <QADataRowBox>
      <p onClick={() => setAshow(!Ashow)}>{Q}</p>
      <h5 style={Ashow ? { height: "auto" } : { height: "0px" }}>{A}</h5>
    </QADataRowBox>
  );
};
