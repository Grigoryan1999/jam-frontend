import styled from "styled-components";
import { Container } from "./../../global";

export const FooterContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const FooterMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;

  justify-content: space-between;

  a {
    font-size: 14px;
    text-decoration: none;
    line-height: 150%;
  }
`;

export const SocialNetworkLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const FlexWrapper = styled.div`
  display: flex;

  * {
    margin-top: 5px;
    margin-left: 5px;
  }
`;

export const CopyrightText = styled.p`
  margin-top: 30px;
  font-size: 12px;
  width: fit-content;
`;
