import { Dispatch, FC, SetStateAction } from 'react'
import { IMarketProduct, IProduct } from '../../entities';
import { SmallTitle, Text } from '../../global';
import { Modal } from '../Modal/Modal';
import { ProductPicture } from '../ProductPicture/ProductPicture';
import { FullProductInfo, MarketCost, MarketIcon, MarketItemInfo, MarketItemText, MarketListField, MarketsField, ProductCount, ProductModalField } from './ProductInfoModal.style';

export const ProductInfoModal: FC<IProductInfoModalProps> = ({ isOpen, setIsOpen, productInfo }) => {
    return (<>
        <Modal isOpen={isOpen} onClose={setIsOpen}>
            <ProductModalField>
                <FullProductInfo>
                    <SmallTitle>{productInfo?.name}</SmallTitle>
                    <ProductPicture src={productInfo?.picture || ''} />
                    <Text>{productInfo?.subscription}</Text>
                    {
                        productInfo?.marketProduct.length !== 0 ?
                            <ProductCount>Товар имеется в {productInfo?.marketProduct.length} магазинах</ProductCount>
                            :
                            <ProductCount>Товара пока что нет ни в одном магазине</ProductCount>
                    }
                </FullProductInfo>
                <MarketsField>
                    <SmallTitle>Магазины</SmallTitle>
                    <MarketListField>
                        {
                            productInfo && productInfo.marketProduct.length > 0 && productInfo.marketProduct.map((marketProduct: IMarketProduct) => (
                                <MarketItemInfo key={marketProduct.uuid}>
                                    <MarketItemText><MarketIcon src='icons/place.svg' />{marketProduct.market.address}</MarketItemText>
                                    <MarketItemText><MarketIcon src='icons/time.svg' />09:00-21:00</MarketItemText>
                                    <MarketCost>Цена: {marketProduct.cost} руб</MarketCost>
                                </MarketItemInfo>
                            ))
                        }
                        {
                            productInfo && productInfo.marketProduct.length === 0 &&
                            <Text>Товар пока что не добавлен ни в один магазин!</Text>
                        }
                    </MarketListField>
                </MarketsField>
            </ProductModalField>
        </Modal>
    </>);
}

export interface IProductInfoModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    productInfo: IProduct | undefined;
}