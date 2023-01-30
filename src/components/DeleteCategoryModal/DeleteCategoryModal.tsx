import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { OrangeButton, PrimaryButton, SmallTitle, Text, Title } from "../../global";
import { deleteCategory } from "../../redux/actions/actionCreators";
import { Modal } from "../Modal/Modal";
import { ButtonsWrapper } from "./DeleteCategoryModal.style";

export const DeleteCategoryModal: FC<IEditCategoryModalProps> = ({
    isOpen,
    categoryUuid,
    onClose,
}) => {
    const dispatch = useDispatch();

    const onDeleteHandle = () => {
        dispatch(deleteCategory(categoryUuid));
        onClose(false);
    };

    const cancel = () => onClose(false);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <SmallTitle>Вы уверены что хотите удалить категорию?</SmallTitle>
            <Text>Продукты данной категории будут сохранены в разделе "Без категории"</Text>
            <ButtonsWrapper>
                <OrangeButton onClick={onDeleteHandle}>Да</OrangeButton>
                <PrimaryButton onClick={cancel}>Нет</PrimaryButton>
            </ButtonsWrapper>
        </Modal>
    );
};

export interface IEditCategoryModalProps {
    onClose: Dispatch<SetStateAction<boolean>>;
    categoryUuid: string;
    isOpen: boolean;
}
