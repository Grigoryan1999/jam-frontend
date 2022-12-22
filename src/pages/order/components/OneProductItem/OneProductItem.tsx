import { FC } from "react";
import { useDispatch } from "react-redux";
import { IViewedProductForOrder } from "../../../../entities";
import { PrimaryButton, SmallTitle, Text } from "../../../../global";
import { changeProductToOrderCount, removeProductFromOrder } from "../../../../redux/actions/actionCreators";
import { CloseButton, LeftPanel, Picture, ProductContainer, ProductCount, ProductCountControll, ProductInfo } from "./OneProductItem.style";

const MINIMUM_PRODUCT_COUNT = 1;
const MAXIMUM_PRODUCT_COUNT = 20;

export const OneProductItem: FC<IOneProductItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    
    const decrementProductCountHandle = () => {
        if(item.count > MINIMUM_PRODUCT_COUNT) {
            dispatch(changeProductToOrderCount({...item, count: item.count - 1}));
        }
    }

    const incrementProductCountHandle = () => {
        if(item.count < MAXIMUM_PRODUCT_COUNT) {
            dispatch(changeProductToOrderCount({...item, count: item.count + 1}));
        }
    }

    const removeProductFromOrderHandle = () => {
        dispatch(removeProductFromOrder(item.productUuid));
    }

    return (
        <ProductContainer>
            <CloseButton onClick={removeProductFromOrderHandle}>✕</CloseButton>
            <Picture src={item.picture || ''} />
            <LeftPanel>
                <ProductInfo>
                    <SmallTitle >{item.name}</SmallTitle>
                    <Text>от {item.cost} руб</Text>
                </ProductInfo>
                <ProductCountControll>
                    <PrimaryButton onClick={decrementProductCountHandle}>-</PrimaryButton>
                    <ProductCount>{item.count}</ProductCount>
                    <PrimaryButton onClick={incrementProductCountHandle}>+</PrimaryButton>
                </ProductCountControll>
            </LeftPanel>
        </ProductContainer>
    );
}

export interface IOneProductItemProps {
    item: IViewedProductForOrder
}