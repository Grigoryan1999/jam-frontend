import { FC, useEffect, useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { IMarketProduct, IProduct } from "../../../../entities";
import { Title, Text, SmallTitle } from "../../../../global";
import { EmptyPicture, FullProductInfo, MarketsField, Picture, Price, ProductCardContainer, ProductCount, ProductModalField } from "./ProductCard.style";

const emptyProductCost = 0;

export const ProductCard: FC<IProductCardProps> = ({productInfo}) => {
    const [minimalCost, setMinimalCost] = useState(emptyProductCost);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const minimal = productInfo.marketProduct?.sort((prevMarketProduct: IMarketProduct, nextMarketProduct: IMarketProduct) => {
            return prevMarketProduct.cost - nextMarketProduct.cost 
        });
        setMinimalCost(minimal.length !== 0 ? minimal[0].cost : emptyProductCost);
    }, [productInfo.marketProduct]);

    return(
        <ProductCardContainer onClick={() => setIsOpen(true)}>
            {productInfo.picture ? <Picture src={productInfo.picture} /> : <EmptyPicture src="./icons/logo.jpg" />}
            <Title>{productInfo.name}</Title>
            <Price>
                {
                    minimalCost ? `от ${minimalCost} руб` : 'Нет в продаже'
                }
            </Price>
            <Modal isOpen={isOpen} onClose={setIsOpen}>
                <ProductModalField>
                    <FullProductInfo>
                        <Title>{productInfo.name}</Title>
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
                    </MarketsField>
                </ProductModalField>
            </Modal>
        </ProductCardContainer>
    );
}

export interface IProductCardProps {
    productInfo: IProduct;
}