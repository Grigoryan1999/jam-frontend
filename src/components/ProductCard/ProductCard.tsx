import { Dispatch, FC, memo, SetStateAction, useState } from "react";
import { IProduct } from "../../entities";
import { SmallTitle } from "../../global";
import { ProductPicture } from "../ProductPicture/ProductPicture";
import {
    Price,
    ProductCardContainer,
} from "./ProductCard.style";

const ProductCard: FC<IProductCardProps> = ({ productInfo, onClick }) => {
    return (
        <ProductCardContainer onClick={onClick}>
            <ProductPicture src={productInfo.picture} />
            <SmallTitle>{productInfo.name}</SmallTitle>
            <Price>
                {
                    productInfo.minimalCost ? `от ${productInfo.minimalCost} руб` : 'Нет в продаже'
                }
            </Price>
        </ProductCardContainer>
    );
}

export default memo(ProductCard);

export interface IProductCardProps {
    productInfo: IProduct;
    onClick: () => void;
}