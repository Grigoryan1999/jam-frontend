import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { CenterWrapper, PrimaryButton } from "../../global";
import { Burger } from "./Burger";
import { HeaderContainer, Logo, MenuBlock } from "./Header.style";

export const Header: FC = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    return(
        <CenterWrapper>
            <HeaderContainer expanded={menuExpanded}>
                <Logo src="./icons/logo.jpg" />
                <MenuBlock>
                    <NavLink to='/'>Главная</NavLink>
                    <NavLink to='/order'>Оставить заявку</NavLink>
                    <NavLink to='/map'>Мы на карте</NavLink>
                    <NavLink to='/about'>О нас</NavLink>
                </MenuBlock>
                <PrimaryButton>Войти</PrimaryButton>
            </HeaderContainer>
            <Burger expanded={menuExpanded} expandCallback={setMenuExpanded} />
        </CenterWrapper>
    );
}