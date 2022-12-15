import { device } from "./../../assets/ScreenResolutions";
import styled from "styled-components";
export const ModalBackground = styled.div<{
  isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.4);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 0.4s opacity;
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
`;

export const ModalContent = styled.div<{
  isOpen: boolean;
}>`
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  scale: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 0.4s scale;
  max-width: 500px;
  max-height: 100vh;

  @media (${device.mobile}) {
    max-width: none;
    width: 100%;
    height: 100%;
  }
`;

export const ModalCloseButton = styled.p`
  position: relative;
  right: 10px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  cursor: pointer;

  @media (${device.mobile}) {
    margin-top: 10px;
  }
`;
