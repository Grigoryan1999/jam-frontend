import styled from "styled-components";
import { ScrollBarStyle } from '../../global';
import { device } from '../../assets/ScreenResolutions';
export const ProductCardContainer = styled.div`
  padding: 10px;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 200px;
  position: relative;

  @media (${device.mobileM}) {
    width: 100%;
    max-width: none;
  }
`;

export const Price = styled.p`
  font-weight: 800;
`;

export const Title = styled.p``;
