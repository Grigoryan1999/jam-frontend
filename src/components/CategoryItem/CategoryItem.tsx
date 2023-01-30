import { FC, useCallback, useState, memo } from "react";
import { ICategory } from "../../entities";
import { ActionButton } from "../ActionButton/ActionButton";
import { EditCategoryModal } from "../EditCategoryModal/EditCategoryModal";
import { CategoryContainer } from "./CategoryItem.style";

const CategoryItem: FC<ICategoryItemProps> = ({
  onClick,
  categoryElement,
}) => {

  return (
    <CategoryContainer onClick={() => onClick(categoryElement.uuid)}>
      {categoryElement.name}
    </CategoryContainer>
  );
};

export default memo(CategoryItem); 

export interface ICategoryItemProps {
  onClick: (categoryUuid: string) => void;
  categoryElement: ICategory;
}
