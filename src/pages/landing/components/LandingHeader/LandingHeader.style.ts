import styled from "styled-components";
import { device } from "../../../../assets/ScreenResolutions";

export const LandingTitle = styled.h1`
  font-size: 50px;
  line-height: 100%;
  margin-top: 0;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    right: -100px;
    z-index: -1;
    display: block;
    background: url("./images/airplane.svg");
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
  }
  @media (${device.mobileM}) {
    font-size: 35px;
    ::after {
      display: none;
    }
  }
`;

export const OrangeText = styled.span`
  color: orange;
`;

export const LeftHeaderPanel = styled.div`
  width: 55%;
  height: 300px;

  @media (${device.mobile}) {
    text-align: center;
    height: fit-content;
  }
`;

export const RightHeaderPanel = styled.div`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: -20px;
    display: block;
    background: linear-gradient(259deg, #c9c9c9 13.15%, #ffffff 98.01%);
    width: 80%;
    height: calc(100% - 20px);
    border-radius: 30px;
    z-index: -1;
  }
  @media (${device.mobile}) {
    display: none;
  }
`;

export const HeaderImage = styled.img`
  max-width: 300px;
`;

export const LandingHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LandingSubTitle = styled.p`
  color: gray;
  line-height: 150%;
  @media (${device.mobile}) {
    font-size: 14px;
  }
`;
