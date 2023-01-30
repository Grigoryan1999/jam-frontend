import { FC } from "react";
import { Link } from "react-router-dom";
import { OrangeButton } from "../../../../global";
import {
    HeaderImage,
    LandingHeaderContainer,
    LandingSubTitle,
    LandingTitle,
    LeftHeaderPanel,
    OrangeText,
    RightHeaderPanel
} from "./LandingHeader.style";

export const LandingHeader: FC = () => {
    return (
        <LandingHeaderContainer>
            <LeftHeaderPanel>
                <LandingTitle>Новый год с самыми вкусными <OrangeText>багетами</OrangeText></LandingTitle>
                <LandingSubTitle>Привезем вам целый камаз очень вкусных багетов. Оставьте заявку и наш волшебный камаз приедет к Вам</LandingSubTitle>
                <Link to={'/order'}>
                    <OrangeButton>Оставить заявку</OrangeButton>
                </Link>
            </LeftHeaderPanel>
            <RightHeaderPanel>
                <HeaderImage src="./images/headerImage.png" />
            </RightHeaderPanel>
        </LandingHeaderContainer>
    );
}
