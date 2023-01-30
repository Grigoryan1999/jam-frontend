import { FC, useCallback, useState } from "react";
import { IProduct } from "../../entities";
import { CenterWrapper } from "../../global";
import ProductCard from "../ProductCard/ProductCard";
import { Title } from "../ProductCard/ProductCard.style";
import { ProductInfoModal } from "../ProductInfoModal/ProductInfoModal";
import { ProductCardListContainer } from "./ProductCardList.style";

export const ProductCardList: FC<IProductCardListProps> = ({
  products,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productInfo, setProductInfo] = useState<IProduct>();

  const onCardClickHandle = useCallback((param: IProduct) => () => {
    setIsOpen(true);
    setProductInfo(param);
  },[]);
  
  return (
    <ProductCardListContainer>
      {products?.map((productElement: IProduct) => (
        <ProductCard
          key={productElement.uuid}
          productInfo={productElement}
          onClick={onCardClickHandle(productElement)}
        />
      ))}
      {products?.length === 0 && (
        <CenterWrapper>
          <Title>Упс, продуктов в данной секции пока еще нет</Title>
        </CenterWrapper>
      )}
      <ProductInfoModal isOpen={isOpen} setIsOpen={setIsOpen} productInfo={productInfo}  />
    </ProductCardListContainer>
  );
};
export interface IProductCardListProps {
  products?: IProduct[] | null;
}
