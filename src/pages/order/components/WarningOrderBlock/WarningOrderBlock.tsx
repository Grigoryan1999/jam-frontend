import { FC } from "react";
import { Text } from "../../../../global";
import { Container, WarningPicture } from "./WarningOrderBlock.style";

export const WarningOrderBlock: FC = () => {
    return(
        <Container>
            <WarningPicture src="./images/truck.svg" />
            <Text>Заполните данные и мы свяжимся с Вами. Выберите продукты, которые Вам необходимы и оставьте комментарий к заказу, если это необходимо. В комментарии Вы можете указать подробности по заказу, на которые необходимо обратить внимание</Text>
        </Container>
    );
}