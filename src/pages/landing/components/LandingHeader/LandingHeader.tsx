import { FC } from "react";
import { OrangeButton } from "../../../../global";
import { HeaderImage, LandingHeaderContainer, LandingSubTitle, LandingTitle, LeftHeaderPanel, OrangeText, RightHeaderPanel } from "./LandingHeader.style";

export const LandingHeader: FC = () => {
    return (
            <LandingHeaderContainer>
                <LeftHeaderPanel>
                    <LandingTitle>Новый год с самыми вкусными <OrangeText>багетами</OrangeText></LandingTitle>
                    <LandingSubTitle>Привезем вам целый камаз очень вкусных багетов. Оставьте заявку и наш волшебный камаз приедет к Вам</LandingSubTitle>
                    <OrangeButton>Оставить заявку</OrangeButton>
                </LeftHeaderPanel>
                <RightHeaderPanel>
                    <HeaderImage src="./images/headerImage.png" />
                </RightHeaderPanel>
            </LandingHeaderContainer>
    );
}
