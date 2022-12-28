import { FC } from "react";
import { IProduct } from "../../entities";
import { CenterWrapper } from "../../global";
import { AddButton } from "../AddButton/AddButton";
import { ProductCard } from "../ProductCard/ProductCard";
import { Title } from "../ProductCard/ProductCard.style";
import { ProductCardListContainer } from "./ProductCardList.style";

export const ProductCardList: FC<IProductCardListProps> = ({
  products,
  editable = false,
}) => {
  return (
    <ProductCardListContainer>
      {products?.map((productElement: IProduct) => (
        <ProductCard key={productElement.uuid} productInfo={productElement} />
      ))}
      {!editable && products?.length === 0 && (
        <CenterWrapper>
          <Title>Упс, продуктов в данной секции пока еще нет</Title>
        </CenterWrapper>
      )}
      {
        editable && <AddButton />
      }
    </ProductCardListContainer>
  );
};
export interface IProductCardListProps {
  products?: IProduct[] | null;
  editable?: boolean;
}
