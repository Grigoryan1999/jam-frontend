import { FC, useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { IMarketProduct, IProduct } from "../../../../entities";
import { SmallTitle, Text } from "../../../../global";
import {
    EmptyPicture,
    FullProductInfo,
    MarketCost,
    MarketItemInfo,
    MarketListField,
    MarketsField,
    Picture,
    Price,
    ProductCardContainer,
    ProductCount,
    ProductModalField
} from "./ProductCard.style";

export const ProductCard: FC<IProductCardProps> = ({ productInfo }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ProductCardContainer onClick={() => setIsOpen(true)}>
            {productInfo.picture ? <Picture src={productInfo.picture} /> : <EmptyPicture src="./icons/logo.jpg" />}
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
                        {productInfo.picture ? <Picture src={productInfo.picture} /> : <EmptyPicture src="./icons/logo.jpg" />}
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
}