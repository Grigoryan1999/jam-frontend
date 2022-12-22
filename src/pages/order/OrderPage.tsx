import React, { FC, useState } from "react";
import TextField from '@mui/material/TextField';
import { InputLabel } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { BigTitle, OrangeButton, PrimaryButton, SmallTitle, Text, Title } from "../../global";
import { Modal } from "../../components/Modal/Modal";
import { ModalProductField, ModalProductInfo, ModalProductItem, ProductPicture, ProductPrice, SelectedProductsField } from "./OrderPage.style";
import { useSelector } from "react-redux";
import { categoriesSelector, viewedProductsForOrderSelector } from "../../redux/selectors";
import { ICategory, IProduct, IProductForOrder, IViewedProductForOrder } from "../../entities";
import { useDispatch } from "react-redux";
import { addProductToOrder } from "../../redux/actions/actionCreators";
import { OneProductItem } from "./components/OneProductItem/OneProductItem";
import { EmptyProductBlock } from "./components/EmptyProductBlick/EmptyProductBlock";
import { WarningOrderBlock } from "./components/WarningOrderBlock/WarningOrderBlock";

export const OrderPage: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchRequest, setSearchRequest] = useState("");
    const categories = useSelector(categoriesSelector);
    const productsForOrder = useSelector(viewedProductsForOrderSelector);
    const dispatch = useDispatch();

    const addProductHandle = (productUuid: string) => {
        const productForOrder: IProductForOrder = {
            productUuid,
            count: 1
        };
        dispatch(addProductToOrder(productForOrder));
        setIsOpen(false);
    }

    return (
        <>
            <BigTitle>Заказ</BigTitle>
            <WarningOrderBlock />
            <InputLabel
                shrink
                htmlFor="fio-input"
                margin="dense"
            >
                Ваше ФИО
            </InputLabel>
            <TextField id="fio-input" fullWidth margin="dense" />
            <InputLabel
                shrink
                htmlFor="subscription-input"
                margin="dense"
            >
                Ваше описание
            </InputLabel>
            <TextField
                id="subscription-input"
                multiline
                fullWidth
                margin="dense"
                rows={4}
            />
            <InputLabel
                shrink
                htmlFor="date-input"
            >
                Дата выполнения заказа
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    views={['year', 'month', 'day']}
                    onChange={() => console.log('f')}
                    renderInput={(params) => <TextField id="date-input" fullWidth {...params} margin="dense" />}
                    value={undefined}
                />
            </LocalizationProvider>
            <div>
                <Title>Продукты</Title>
                <PrimaryButton onClick={() => setIsOpen(true)}>+</PrimaryButton>
            </div>
            <SelectedProductsField>
                {
                    (!productsForOrder || productsForOrder.length === 0) &&
                    <EmptyProductBlock />
                }
                {productsForOrder && productsForOrder.length > 0 &&
                    productsForOrder?.map((productForOrderElement: IViewedProductForOrder) => (
                        <OneProductItem item={productForOrderElement} key={productForOrderElement.productUuid} />
                    ))
                }
            </SelectedProductsField>

            <OrangeButton>Отправить заявку</OrangeButton>

            <Modal isOpen={isOpen} onClose={setIsOpen}>
                <Title>Выберите продукт</Title>
                <TextField
                    label="Поиск по названию"
                    fullWidth
                    onChange={(event) => setSearchRequest(event.currentTarget.value)}
                />
                <ModalProductField>
                    {
                        categories?.map((categoryElement: ICategory) => (
                            <React.Fragment key={categoryElement.uuid}>
                                <SmallTitle>{categoryElement.name}</SmallTitle>
                                {
                                    categoryElement.products.map((productElement: IProduct) => (
                                        !productElement.name.toLowerCase().indexOf(searchRequest.toLowerCase()) && productElement.minimalCost > 0 &&
                                        !productsForOrder?.find(element => element.productUuid === productElement.uuid) &&
                                        <ModalProductItem onClick={() => addProductHandle(productElement.uuid)} key={productElement.uuid}>
                                            <ProductPicture src={productElement.picture || "./icons/logo.jpg"} />
                                            <ModalProductInfo>
                                                <Text>{productElement.name}</Text>
                                                <ProductPrice>{`от ${productElement.minimalCost} руб`}</ProductPrice>
                                            </ModalProductInfo>
                                        </ModalProductItem>
                                    ))
                                }
                            </React.Fragment>
                        ))
                    }
                </ModalProductField>
            </Modal>
        </>
    );
}