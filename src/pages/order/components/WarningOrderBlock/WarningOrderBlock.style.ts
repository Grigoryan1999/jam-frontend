import styled from 'styled-components';
import { device } from '../../../../assets/ScreenResolutions';

export const Container = styled.div`
    display: flex;
`;

export const WarningPicture = styled.img`
    width: 70px;
    margin-right: 15px;
    @media (${device.mobile}) {
        display: none;
    }
`;