import { Modal } from "@pancakeswap/uikit";
import styled from "styled-components";

const PopStyle = styled.div`
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

const Pop = ({
  show,
  title,
  children,
  onClose,
}: {
  show: boolean;
  title: string;
  children: any;
  onClose: () => void;
}) => {
  return (
    <PopStyle>{show ? <Modal title={title} onDismiss={onClose}>{children}</Modal> : ""}</PopStyle>
  );
};
export default Pop;
