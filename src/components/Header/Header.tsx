import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { CenterWrapper, PrimaryButton } from "../../global";
import { Burger } from "./Burger";
import { HeaderContainer, Logo, MenuBlock } from "./Header.style";

export const Header: FC = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const linkClickHandle = () => {
        setMenuExpanded(false);
    }

    return(
        <CenterWrapper>
            <HeaderContainer expanded={menuExpanded}>
                <Logo src="./icons/logo.jpg" />
                <MenuBlock>
                    <NavLink to='/' onClick={linkClickHandle}>Главная</NavLink>
                    <NavLink to='/order' onClick={linkClickHandle}>Оставить заявку</NavLink>
                    <NavLink to='/map' onClick={linkClickHandle}>Мы на карте</NavLink>
                    <NavLink to='/about' onClick={linkClickHandle}>О нас</NavLink>
                </MenuBlock>
                <PrimaryButton>Войти</PrimaryButton>
            </HeaderContainer>
            <Burger expanded={menuExpanded} expandCallback={setMenuExpanded} />
        </CenterWrapper>
    );
}