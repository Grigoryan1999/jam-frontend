import { device } from "./../../assets/ScreenResolutions";
import styled, { css } from "styled-components";
import { Container } from "../../global";

export const HeaderContainer = styled.div<{ expanded: boolean }>`
  ${Container}
  background-color: white;
  height: 80px;
  position: fixed;
  z-index: 1;
  overflow: hidden;

  @media ${device.tablet} {
    flex-direction: column;
    height: ${(props) => (props.expanded ? "100vh" : "80px")};
    padding-bottom: ${(props) => (props.expanded ? "50px" : 0)};
    padding-top: 10px;
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
    line-height: 1;
  }

  @media ${device.tablet} {
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
  position: fixed;
  z-index: 1;
  right: 0;
  margin: 25px;
  height: auto;
  cursor: pointer;

  ${props => props.expanded && ExpandedBurger}

  @media (${device.tablet}) {
    display: flex;
  }
`;

const ExpandedBurger = css`
    & > :nth-child(2n) {
      display: none;
      transition: 0.4s all;
    }

    & > :first-child {
      transform: rotate(45deg);
      margin-top: 5px;
      transition: 0.4s all;
    }

    & > :last-child {
      transform: rotate(-45deg);
      margin-top: -10px;
      transition: 0.4s all;
    }
`;

export const Line = styled.div`
  height: 5px;
  width: 30px;
  background-color: black;
  margin-bottom: 5px;
  transition: 0.4s all;
`;
