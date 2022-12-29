import styled from "styled-components";
import { ButtonStyle } from "../../global";

export const CategoryContainer = styled.button<{editable: boolean}>`
  ${ButtonStyle}
  border-radius: 30px;
  margin-right: 10px;
  box-sizing: border-box;
  margin-bottom: ${props => props.editable ? '5px' : '0'};
  position: relative;
`;

export const ActionField = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;