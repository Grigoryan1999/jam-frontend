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

export const ScrollBarStyle = css`
    ::-webkit-scrollbar {
      width: 12px;               
    }
    ::-webkit-scrollbar-track {
      background: #f4f4f4;        
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d3d3d3;
      border: 2px solid #f4f4f4;
      border-radius: 20px;
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

export const ButtonStyle = css`
  background-color: #f4f4f4;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: silver;
    transition: all 0.3s linear;
  }

  &:active {
    background-color: gray;
  }
`;

export const PrimaryButton = styled.button`
  ${ButtonStyle}
`;

export const CategoryItem = styled.button`
  ${ButtonStyle}
  border-radius: 30px;
  margin-right: 10px;
  box-sizing: border-box;
`;

export const OrangeButton = styled.button`
  ${ButtonStyle}
  background-color: orange;
  color: white;
  font-size: 22px;
  padding: 15px 25px;
  &:hover {
    background-color: #df6b00;
  }

  &:active {
    background-color: #b65700;
  }
  @media (${device.mobile}) {
    font-size: 14px;
  }
`;

export const PageContainer = styled.div`
  ${Container}
  align-items: flex-start;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const BigTitle = styled.h1``;
export const Title = styled.h2``;
export const SmallTitle = styled.h3``;
export const Text = styled.p`
  font-size: 14px;
  line-height: 150%;
`;
