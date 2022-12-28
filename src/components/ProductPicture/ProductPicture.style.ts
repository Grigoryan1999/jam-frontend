import styled from "styled-components";
import { device } from "../../assets/ScreenResolutions";

export const Picture = styled.img`
  background-color: gray;
  width: 100%;
  border-radius: 12px;
  width: 200px;
  height: 131px;

  @media (${device.mobileM}) {
    width: 100%;
    height: auto;
  }
`;

export const ProgressBarField = styled.div`
  width: 200px;
  height: 131px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${device.mobileM}) {
    width: 100%;
  }
`;