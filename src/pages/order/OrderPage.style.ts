import styled from 'styled-components';
import { ScrollBarStyle } from './../../global';
import { device } from '../../assets/ScreenResolutions';
export const ModalProductField = styled.div`
    width: 350px;
    height: 400px;
    overflow-y: scroll;
    margin-top: 10px;
    ${ScrollBarStyle}
    
    @media (${device.mobileM}) {
        width: 100%;
        height: auto;
    }
`;
export const ModalProductItem = styled.div`
    display: flex;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
`;

export const ProductPicture = styled.img`
    width: 100px;
    border-radius: 5px;
`;

export const ModalProductInfo = styled.div`
    margin-left: 5px;
`;

export const ProductPrice = styled.p`
    font-weight: 800;
    font-size: 14px;
`;

export const SelectedProductsField = styled.div`
    margin-bottom: 70px;
`;