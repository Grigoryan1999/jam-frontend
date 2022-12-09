import { Dispatch, FC, SetStateAction } from "react";
import { ICategory } from "../../../entities";
import { CategoryItem } from "../../../global";
import { CategoryListContainer } from "./CategoryList.style";

export const CategoryList: FC<ICategoryListProps> = ({categories, onSelectCategory}) => {

    return(
        <CategoryListContainer>
            {
                categories?.map((categoryElement: ICategory, idx: number) => (
                    <CategoryItem onClick={() => onSelectCategory(idx)}>
                        {categoryElement.name}
                    </CategoryItem>
                ))
            }
        </CategoryListContainer>
    );
}

export interface ICategoryListProps {
    categories: ICategory[] | null;
    onSelectCategory: Dispatch<SetStateAction<number>>;
}