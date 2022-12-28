import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../../entities";
import { getAllCategories } from "../../redux/actions/actionCreators";
import { categoriesSelector } from "../../redux/selectors";
import { CategoryList } from "../CategoryList/CategoryList";
import { ProductCardList } from "../ProductCardList/ProductCardList";

export const MenuComponent: FC<IMenuComponentProps> = ({
  editable = false,
}) => {
  const categories = useSelector(categoriesSelector);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && !selectedCategory) {
      setSelectedCategory(categories[0]?.uuid);
    }
  }, [categories, selectedCategory]);

  return (
    <>
      <CategoryList
        editable={editable}
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <ProductCardList
        editable={editable}
        products={
          categories?.find(
            (categoryElement: ICategory) =>
              categoryElement.uuid === selectedCategory
          )?.products
        }
      />
    </>
  );
};

export interface IMenuComponentProps {
  editable?: boolean;
}
