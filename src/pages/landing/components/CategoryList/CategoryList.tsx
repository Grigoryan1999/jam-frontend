import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { ICategory } from "../../../../entities";
import { CategoryItem } from "../../../../global";
import { CategoryListContainer } from "./CategoryList.style";

const itemListGap = 10;

export const CategoryList: FC<ICategoryListProps> = ({categories, onSelectCategory}) => {

    const [hiddenItems, setHiddenItems] = useState<ICategory[]>();
    const menuListContainerRef = useRef<HTMLDivElement>(null);

    const changeCategoryListWidthHandle = useCallback(() => {
        const containerWidth = menuListContainerRef.current?.clientWidth || 0;
        let containerElementWidth = 0;
        for(let i = 0; i < (menuListContainerRef.current?.children.length || 0); i++) {
            containerElementWidth += (menuListContainerRef.current?.children[i].clientWidth || 0) + itemListGap;
            if(containerElementWidth >= containerWidth) {
                const hiddenListArray = categories?.slice(i);
                setHiddenItems(hiddenListArray);
                break;
            } else {
                setHiddenItems([]);
            }
        }
    }, [categories]);

    useEffect(() => changeCategoryListWidthHandle(), []);

    useEffect(() => console.log(hiddenItems), [hiddenItems]);

    useEffect(() => {
        window.addEventListener('resize', changeCategoryListWidthHandle)
        return () => {
            window.removeEventListener('resize', changeCategoryListWidthHandle)
        }
  }, [changeCategoryListWidthHandle])

    return(
        <CategoryListContainer ref={menuListContainerRef}>
            {
                categories?.map((categoryElement: ICategory, idx: number) => (
                    <CategoryItem key={categoryElement.uuid} onClick={() => onSelectCategory(idx)}>
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
