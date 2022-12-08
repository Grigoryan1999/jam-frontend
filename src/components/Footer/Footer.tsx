import { FC } from "react";
import { NavLink } from "react-router-dom";
import { CenterWrapper, SmallTitle } from "../../global";
import { CopyrightText, FlexWrapper, FooterContainer, FooterMenuBlock, SocialNetworkLogo } from "./Footer.style";

export const Footer: FC = () => {

    return(
        <CenterWrapper>
            <FooterContainer>
                <FooterMenuBlock>
                    <SmallTitle>Наша компания</SmallTitle>
                    <NavLink to='/'>Главная</NavLink>
                    <NavLink to='/order'>Оставить заявку</NavLink>
                    <NavLink to='/map'>Мы на карте</NavLink>
                    <NavLink to='/about'>О нас</NavLink>
                </FooterMenuBlock>
                <FooterMenuBlock>
                    <SmallTitle>Контакты</SmallTitle>
                    <NavLink to='/'>Главная</NavLink>
                    <NavLink to='/order'>Оставить заявку</NavLink>
                    <NavLink to='/map'>Мы на карте</NavLink>
                    <NavLink to='/about'>О нас</NavLink>
                </FooterMenuBlock>
                <FooterMenuBlock>
                    <SmallTitle>Мы рядом</SmallTitle>
                    <a href="tel:+78002003542">+7(800) 200-35-42</a>
                    <FlexWrapper>
                        <SocialNetworkLogo src="/icons/vk.svg" />
                        <SocialNetworkLogo src="/icons/telegram.svg" />
                    </FlexWrapper>
                </FooterMenuBlock>
                <CopyrightText>&copy; 2023 Кафе-пекарня Варенье | г. Армавир</CopyrightText>
            </FooterContainer>
        </CenterWrapper>
    );
}