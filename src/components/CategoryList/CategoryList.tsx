import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CategoryListContainer, CategoryListField, SelectProductListField } from "./CategoryList.style";
import { ICategory } from "../../entities";
import { screenSize } from "../../assets/ScreenResolutions";
import CategoryItem from "../CategoryItem/CategoryItem";

const itemListGap = 10;

export const CategoryList: FC<ICategoryListProps> = ({ categories, onSelectCategory }) => {
    const [hiddenItems, setHiddenItems] = useState<ICategory[]>();
    const menuListFieldRef = useRef<HTMLDivElement>(null);
    const [hiddenItemValue, setHiddenItemValue] = useState("");

    const changeCategoryListWidthHandle = useCallback(() => {
        if (window.innerWidth < screenSize.mobileM) return;
        const containerWidth = menuListFieldRef.current?.clientWidth || 0;
        let containerElementWidth = 0;
        for (let i = 0; i < (menuListFieldRef.current?.children.length || 0); i++) {
            containerElementWidth += (menuListFieldRef.current?.children[i].clientWidth || 0) + itemListGap;
            if (containerElementWidth >= containerWidth) {
                const hiddenListArray = categories?.slice(i);
                setHiddenItems(hiddenListArray);
                break;
            } else {
                setHiddenItems([]);
            }
        }
    }, [categories]);

    const selectHiddenItemHandle = (event: SelectChangeEvent<string>) => {
        setHiddenItemValue(event.target.value);
        onSelectCategory(event.target.value);
    };

    const selectCategoryHandle = useCallback((categoryUuid: string) => {
        onSelectCategory(categoryUuid);
        setHiddenItemValue("");
    }, []);

    useEffect(() => changeCategoryListWidthHandle(), [changeCategoryListWidthHandle]);

    useEffect(() => {
        window.addEventListener('resize', changeCategoryListWidthHandle)
        return () => {
            window.removeEventListener('resize', changeCategoryListWidthHandle)
        }
    }, [changeCategoryListWidthHandle])

    return (
        <CategoryListContainer>
            <CategoryListField ref={menuListFieldRef}>
                {
                    categories?.map((categoryElement: ICategory) => (
                        <CategoryItem
                            key={categoryElement.uuid}
                            onClick={selectCategoryHandle}
                            categoryElement={categoryElement}
                        />
                    ))
                }
            </CategoryListField>
            {hiddenItems && hiddenItems?.length > 0 && <SelectProductListField>
                <Select
                    displayEmpty
                    value={hiddenItemValue}
                    onChange={selectHiddenItemHandle}
                >
                    <MenuItem value={""} style={{ display: 'none' }}>Еще</MenuItem>
                    {
                        hiddenItems.map((categoryItem: ICategory) => (
                            <MenuItem value={categoryItem.uuid} key={categoryItem.uuid}>{categoryItem.name}</MenuItem>
                        ))
                    }
                </Select>
            </SelectProductListField>}
        </CategoryListContainer>
    );
};
export interface ICategoryListProps {
    categories: ICategory[] | null;
    onSelectCategory: Dispatch<SetStateAction<string>>;
}
