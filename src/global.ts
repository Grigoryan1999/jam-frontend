import { device } from "./assets/ScreenResolutions";
import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    body {
        font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
        margin: 0;

        a {
          color: #3d3d3d;
        }
    }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = css`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;

  @media ${device.desktop} {
    max-width: 900px;
  }

  @media ${device.tablet} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #f4f4f4;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: silver;
    transition: all 0.3s linear;
  }

  &:active {
    background-color: gray;
  }
`;

export const PageContainer = styled.div`
  ${Container}
  margin-top: 75px;
`;

export const BigTitle = styled.h1``;
export const Title = styled.h2``;
export const SmallTitle = styled.h3``;
