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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const FullProductInfo = styled.div``;

export const MarketsField = styled.div``;

export const ProductCount = styled.p`
  font-weight: 800;
`;
