import { device } from './../../assets/ScreenResolutions';
import styled from 'styled-components';
export const ButtonContainer = styled.button`
    border: 3px dashed #b07407;
    background-color: #e8e8e8;
    width: 220px;
    height: 280px;
    font-size: 42px;
    color: #b07407;
    cursor: pointer;

    :hover {
        background-color: #d4d4d4;
    }

    @media (${device.mobileM}) {
        width: 100%;
    }
`;