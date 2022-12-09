import { FC } from "react";
import { IProduct } from "../../../entities";
import { ProductCard } from "./ProductCard";
import { ProductCardListContainer } from "./ProductCardList.style";


export const ProductCardList: FC<IProductCardListProps> = ({products}) => {
    return(
        <ProductCardListContainer>
            {
                products?.map((productElement: IProduct) => (<ProductCard productInfo={productElement} />))
            }
        </ProductCardListContainer>
    );
}

export interface IProductCardListProps {
    products?: IProduct[] | null;
}