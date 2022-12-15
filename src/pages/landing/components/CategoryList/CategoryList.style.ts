import styled from "styled-components";
import { device } from "../../../../assets/ScreenResolutions";

export const CategoryListContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CategoryListField = styled.div`
  width: calc(100% - 100px);
  height: 38px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  margin-bottom: 10px;

  @media (${device.mobileM}) {
    width: 100%;
    flex-wrap: nowrap;
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
