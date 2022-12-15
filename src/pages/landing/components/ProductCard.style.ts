import { device } from './../../../assets/ScreenResolutions';
import styled from "styled-components";
export const ProductCardContainer = styled.div`
  padding: 10px;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Picture = styled.img`
  background-color: gray;
  width: 100%;
  border-radius: 12px;
`;

export const Price = styled.p`
  font-weight: 800;
`;

export const EmptyPicture = styled.img`
  width: 60%;
  margin: 0 auto;
`;

export const Title = styled.p``;

export const ProductModalField = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  @media (${device.mobile}) {
    overflow-y: auto;
  }
`;

export const FullProductInfo = styled.div``;

export const MarketsField = styled.div`
  height: 100%;
`;

export const ProductCount = styled.p`
  font-weight: 800;
`;

export const MarletProductInfo = styled.div`
  background-color: #e8e8e8;
  padding: 5px;
  margin-bottom: 1px;
  border-radius: 5px;
`;

export const MarketAddress = styled.p`
  font-weight: 800;
  font-size: 14px;
  margin-top: 0;
`;
export const ProductPrice = styled.p`
  font-size: 12px;
  margin: 0;
`;