import styled from "styled-components";
import { device } from "../../../../assets/ScreenResolutions";

export const CategoryListContainer = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  margin-bottom: 10px;

  @media (${device.mobile}) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    height: 38px;
  }
`;
