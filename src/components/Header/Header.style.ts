import { device } from "./../../assets/ScreenResolutions";
import styled from "styled-components";
import { Container } from "../../global";

export const HeaderContainer = styled.div<{ expanded: boolean }>`
  ${Container}
  background-color: white;
  height: 80px;
  position: fixed;
  z-index: 10;
  overflow: hidden;

  @media (${device.tablet}) {
    flex-direction: column;
    height: ${(props) => (props.expanded ? "100vh" : "80px")};
    padding-bottom: ${(props) => (props.expanded ? "50px" : 0)};
    margin-top: 10px;
  }
`;

export const Logo = styled.img`
  width: 60px;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  a {
    text-decoration: none;
    color: #3d3d3d;
    margin-right: 20px;
  }

  .active {
    color: black;
    font-weight: 800;
  }

  @media (${device.tablet}) {
    flex-direction: column;
    align-items: center;
    margin: 30px;

    a {
      margin: 0;
      height: 35px;
    }
  }
`;

export const BurgerContainer = styled.div<{ expanded: boolean }>`
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  right: 0;
  margin: 25px;
  height: auto;
  cursor: pointer;

  @media (${device.tablet}) {
    display: flex;
  }
`;

export const Line = styled.div`
  height: 5px;
  width: 30px;
  background-color: black;
  margin-bottom: 5px;
`;
