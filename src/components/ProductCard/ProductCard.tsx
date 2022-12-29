import { FC, useCallback, useState } from "react";
import { Modal } from "../Modal/Modal";
import { IMarketProduct, IProduct } from "../../entities";
import { SmallTitle, Text } from "../../global";
import { ProductPicture } from "../ProductPicture/ProductPicture";
import {
    ActionField,
    FullProductInfo,
    MarketCost,
    MarketItemInfo,
    MarketListField,
    MarketsField,
    Price,
    ProductCardContainer,
    ProductCount,
    ProductModalField
} from "./ProductCard.style";
import { ActionButton } from "../ActionButton/ActionButton";
import { EditCategoryModal } from "../EditCategoryModal/EditCategoryModal";

export const ProductCard: FC<IProductCardProps> = ({ productInfo, editable }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ProductCardContainer onClick={() => setIsOpen(true)}>
            {
                editable &&
                    <ActionField>
                        <ActionButton buttonType='edit' onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}} />
                        <ActionButton buttonType='remove' onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}} />
                    </ActionField>
            }
            <ProductPicture src={productInfo.picture} />
            <SmallTitle>{productInfo.name}</SmallTitle>
            <Price>
                {
                    productInfo.minimalCost ? `от ${productInfo.minimalCost} руб` : 'Нет в продаже'
                }
            </Price>
            <Modal isOpen={isOpen} onClose={setIsOpen}>
                <ProductModalField>
                    <FullProductInfo>
                        <SmallTitle>{productInfo.name}</SmallTitle>
                        <ProductPicture src={productInfo.picture} />
                        <Text>{productInfo.subscription}</Text>
                        {
                            productInfo.marketProduct.length !== 0 ?
                                <ProductCount>Товар имеется в {productInfo.marketProduct.length} магазинах</ProductCount>
                                :
                                <ProductCount>Товара пока что нет ни в одном магазине</ProductCount>
                        }
                    </FullProductInfo>
                    <MarketsField>
                        <SmallTitle>Магазины</SmallTitle>
                        <MarketListField>
                            {
                                productInfo.marketProduct.length > 0 && productInfo.marketProduct.map((marketProduct: IMarketProduct) => (
                                    <MarketItemInfo key={marketProduct.uuid}>
                                        <Text>{marketProduct.market.address}</Text>
                                        <MarketCost>Цена: {marketProduct.cost} руб</MarketCost>
                                    </MarketItemInfo>
                                ))
                            }
                            {
                                productInfo.marketProduct.length === 0 &&
                                <Text>Товар пока что не добавлен ни в один магазин!</Text>
                            }
                        </MarketListField>
                    </MarketsField>
                </ProductModalField>
            </Modal>
        </ProductCardContainer>
    );
}

export interface IProductCardProps {
    productInfo: IProduct;
    editable: boolean;
}