import { device } from './../../../../assets/ScreenResolutions';
import styled from 'styled-components';
export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 7%);
    position: relative;
    @media (${device.mobile}) {
        width: auto;
    }
`;

export const Picture = styled.img`
    height: 100px;
    max-width: 100px;
    border-radius: 10px;
`;

export const ProductCountControll = styled.div`
    display: flex;
`;

export const ProductCount = styled.p`
    width: 30px;
    text-align: center;
`;

export const ProductInfo = styled.div`

`;

export const LeftPanel = styled.div`
    margin-left: 10px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    background-color: #fff;
`;