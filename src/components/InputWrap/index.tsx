import React, { useState } from "react";
import { Button } from "@pancakeswap/uikit";
import styled from "styled-components";
import { getValue } from "@testing-library/user-event/dist/utils";

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) =>
    selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"};
`;
const InputBtn = styled(Button).attrs({ variant: "text", scale: "sm" })`
  padding: 0;
  font-family: Montserrat SemiBold;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
`;

export const InputPanel = styled.input`
    font-family: Montserrat Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #676c9b;
    padding: 14px 20px;
    font: inherit;
    width: 67%;
    border: 0;
    height: 1.1876em;
    margin: 0;
    display: block;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
    -webkit-tap-highlight-color: transparent;

    :focus {
        outline: 0;
    }
}
`;
export const ActionInput = styled.div`
    width: 100%;
    background: #1d2237;
    border-radius: 10px;
    padding-right: 14px;
    cursor: text;
    display: inline-flex;
    font-size: 1rem;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
}
`;

const WrapTitle = styled.p`
  font-family: Montserrat Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #676c9b;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const InputWrap = ({
  title,
  readOnly = false,
  text,
  defaultVal = null,
  getValues
}: {
  title?: string;
  readOnly: boolean;
  text: string;
  defaultVal: string | null;
  getValues?:any
}) => {
  const [inputValue, setInputValue] = useState(defaultVal || "");
  const setValue = (e:any,fns:any)=>{
    if(fns){
      fns(e.target.value);
    }
    
  }
  return (
    <div style={{ width: "100%" }}>
      {title && <WrapTitle>{title}</WrapTitle>}
      <ActionInput>
        <InputPanel
          placeholder=""
          type="text"
          readOnly={readOnly}
          value={inputValue}
          onBlur={(e)=>{setValue(e,getValues)}}
          onInput={(e) => setInputValue((e.target as any).value)}
        />
        <InputBtn>{text}</InputBtn>
      </ActionInput>
    </div>
  );
};

export default InputWrap;
