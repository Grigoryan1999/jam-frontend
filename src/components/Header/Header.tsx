import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CenterWrapper, PrimaryButton } from "../../global";
import { Burger } from "./Burger";
import { HeaderContainer, Logo, MenuBlock } from "./Header.style";

const mainMenu = [
    {
        link: '/',
        title: 'Главная',
    },
    {
        link: '/order',
        title: 'Оставить заявку',
    },
    {
        link: '/map',
        title: 'Мы на карте',
    },
    {
        link: '/about',
        title: 'О нас',
    },
]

export const Header: FC = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const onMenuLinkHandle = () => {
        setMenuExpanded(false);
    }

    return(
        <CenterWrapper>
            <HeaderContainer expanded={menuExpanded}>
                <Logo src="./icons/logo.jpg" />
                <MenuBlock>
                    {
                        mainMenu.map((menuElement) => (
                            <NavLink
                                key={menuElement.link}
                                to={menuElement.link}
                                onClick={onMenuLinkHandle}
                            >
                                {menuElement.title}
                            </NavLink>
                        ))
                    }
                </MenuBlock>
                <Link to={'/authorization'}>
                    <PrimaryButton onClick={onMenuLinkHandle}>Войти</PrimaryButton>
                </Link>
            </HeaderContainer>
            <Burger expanded={menuExpanded} expandCallback={setMenuExpanded} />
        </CenterWrapper>
    );
}