import { FC, useCallback, useState } from "react";
import { ICategory } from "../../entities";
import { ActionButton } from "../ActionButton/ActionButton";
import { EditCategoryModal } from "../EditCategoryModal/EditCategoryModal";
import { ActionField, CategoryContainer } from "./CategoryItem.style";

export const CategoryItem: FC<ICategoryItemProps> = ({
  editable,
  onClick,
  categoryElement,
}) => {
  const [isCategoryEditModalOpen, setCategoryEditModalOpen] =
    useState<boolean>(false);

    const editButton = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setCategoryEditModalOpen(prev => !prev);
    }, []);

  return (
    <CategoryContainer editable={editable} onClick={onClick}>
      {categoryElement.name}
      {editable && (
        <ActionField>
          <ActionButton buttonType="edit" onClick={editButton}/>
          <ActionButton buttonType="remove" onClick={editButton}/>
        </ActionField>
      )}
      <EditCategoryModal
        isOpen={isCategoryEditModalOpen}
        onClose={setCategoryEditModalOpen}
        categoryItem={categoryElement}
      />
    </CategoryContainer>
  );
};

export interface ICategoryItemProps {
  editable: boolean;
  onClick: () => void;
  categoryElement: ICategory;
}
