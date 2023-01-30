import Divider from "@mui/material/Divider";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionButton } from "../../../../components/ActionButton/ActionButton";
import { DeleteCategoryModal } from "../../../../components/DeleteCategoryModal/DeleteCategoryModal";
import { EditCategoryModal } from "../../../../components/EditCategoryModal/EditCategoryModal";
import { ICategory } from "../../../../entities";
import { Title } from "../../../../global";
import { getAllCategories } from "../../../../redux/actions/actionCreators";
import { categoriesSelector } from "../../../../redux/selectors";
import { ActionField, CategoryEditorContainer, CategoryEditorItem, CategoryTitle } from "./CategoryEditor.style";

export const CategoryEditor: FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectCategory, setSelectCategory] = useState<ICategory>();
    const categories = useSelector(categoriesSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const onEditButtonHandle = useCallback((category: ICategory) => () => {
        setOpen(true);
        setSelectCategory(category);
    }, []);

    const onDeleteButtonHandle = useCallback((category: ICategory) => () => {
        setDeleteModalOpen(true);
        setSelectCategory(category);
    }, []);

    return (<CategoryEditorContainer>
        <Title>Редактирование категорий</Title>
        {categories?.map((element: ICategory) => {
            return (
                <CategoryEditorItem key={element.uuid}>
                    <CategoryTitle>{element.name}</CategoryTitle>
                    <ActionField>
                        <ActionButton buttonType="edit" onClick={onEditButtonHandle(element)} />
                        <ActionButton buttonType="remove" onClick={onDeleteButtonHandle(element)} />
                    </ActionField>
                    <Divider />
                </CategoryEditorItem>
            )
        })}
        {<EditCategoryModal isOpen={isOpen} onClose={setOpen} category={selectCategory} />}
        {<DeleteCategoryModal isOpen={isDeleteModalOpen} onClose={setDeleteModalOpen} categoryUuid={selectCategory?.uuid || ''} />}
    </CategoryEditorContainer>);
}