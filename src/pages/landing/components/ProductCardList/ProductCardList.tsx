import { FC } from "react";
import { IProduct } from "../../../../entities";
import { CenterWrapper } from "../../../../global";
import { ProductCard } from "../ProductCard/ProductCard";
import { Title } from "../ProductCard/ProductCard.style";
import { ProductCardListContainer } from "./ProductCardList.style";


export const ProductCardList: FC<IProductCardListProps> = ({products}) => {
    return(
        <ProductCardListContainer>
            {
                products?.map((productElement: IProduct) => (<ProductCard key={productElement.uuid} productInfo={productElement} />))
            }
            {
                products?.length === 0 && <CenterWrapper>
                    <Title>Упс, продуктов в данной секции пока еще нет</Title>
                </CenterWrapper>
            }
        </ProductCardListContainer>
    );
}

export interface IProductCardListProps {
    products?: IProduct[] | null;
}