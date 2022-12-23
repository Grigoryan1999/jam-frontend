import { Arrow, Container, EmptyBlockText, MessageField } from "./EmptyProductBlock.style";

export const EmptyProductBlock = () => {
    return(
        <Container> 
            <Arrow src='./images/arrow.svg'></Arrow>
            <MessageField>
                <h3>Вы не выбрали ни один продукт!</h3>
                <EmptyBlockText>Нажмите на кнопку "добавить" чтобы выбрать и добавить продукт!</EmptyBlockText>
            </MessageField>
        </Container>
    );
}