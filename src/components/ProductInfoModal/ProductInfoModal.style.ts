import styled from 'styled-components';
import { device } from '../../assets/ScreenResolutions';
import { ScrollBarStyle } from '../../global';

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
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 1px;
  border-radius: 5px;
  padding-left: 5px;
  border-radius: 0;
  border-bottom: 1px solid #e3e3e3;
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

export const MarketItemText = styled.div`
  display: flex;
  line-height: 150%;
  align-items: center;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const MarketIcon = styled.img`
width: 16px;
margin-right: 5px;
`;