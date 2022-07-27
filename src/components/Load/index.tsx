import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../Content/Content";
import "./load.css";

const LoadStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pop = ({}: {}) => {
  const { state } = useContext(MyContext) as any;
  const { load } = state;
  return (
    <div>
      {load ? (
        <LoadStyle>
          <div
            style={{
              height: "128px",
              width: "128px",
              background: `url('/img/load.png') 100% no-repeat`,
              animation: "load 2s infinite linear",
            }}
          ></div>
        </LoadStyle>
      ) : (
        ""
      )}
    </div>
  );
};
export default Pop;
