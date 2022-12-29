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

export const ProductModalField = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
  height: 500px;
  ${ScrollBarStyle}
  @media (${device.mobileM}) {
    height: fit-content;
    overflow-y: auto;
  }
`;

export const FullProductInfo = styled.div``;

export const MarketsField = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: inherit;
`;

export const ProductCount = styled.p`
  font-weight: 800;
`;

export const MarketItemInfo = styled.p`
  font-size: 14px;
  background-color: #ebebeb;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 1px;
  border-radius: 5px;
  padding-left: 5px;
`;

export const MarketListField = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  ${ScrollBarStyle}

  @media (${device.mobileM}) {
    overflow-y: visible;
    height: fit-content;
  }
`;

export const MarketCost = styled.p`
font-weight: 700;
  margin: 10px 0 10px 0;
`;

export const ActionField = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;