import styled from "styled-components";
import { device } from "../../assets/ScreenResolutions";
import { ScrollBarStyle } from "../../global";

export const CategoryListContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CategoryListField = styled.div<{editable: boolean}>`
  width: calc(100% - 100px);
  height: ${props => props.editable ? 'auto' : '38px'};
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  margin-bottom: 10px;
  ${ScrollBarStyle}

  @media (${device.mobileM}) {
    width: 100%;
    flex-wrap: ${props => props.editable ? 'wrap' : 'nowrap'};
    height: fit-content;
  }
`;

export const SelectProductListField = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 38px;
  background-color: #f4f4f4;

  &>:first-child {
    height: 100%;
  }

  @media (${device.mobileM}) {
    display: none;
  }
`;
