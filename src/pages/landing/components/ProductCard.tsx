import { FC } from "react";
import { IMarketProduct, IProduct } from "../../../entities";
import { ProductCardContainer } from "./ProductCard.style";


export const ProductCard: FC<IProductCardProps> = ({productInfo}) => {
    return(
        <ProductCardContainer>
            {productInfo.name}
        </ProductCardContainer>
    );
}

export interface IProductCardProps {
    productInfo: IProduct;
}