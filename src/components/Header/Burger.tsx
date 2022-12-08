import { Dispatch, FC, SetStateAction } from "react";
import { BurgerContainer, Line } from "./Header.style";

export const Burger: FC<IBurgerProps> = ({expanded, expandCallback}) => {

    const toogleMenu = () => expandCallback(prev => !prev);

    return(
        <BurgerContainer expanded={expanded} onClick={toogleMenu}>
            <Line />
            <Line />
            <Line />
        </BurgerContainer>
    );
}

export interface IBurgerProps {
    expanded: boolean;
    expandCallback: Dispatch<SetStateAction<boolean>>;
}