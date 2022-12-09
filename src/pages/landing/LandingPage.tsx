import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BigTitle } from "../../global";
import { getAllCategories } from "../../redux/actions/actionCreators";
import { categoriesSelector } from "../../redux/selectors";
import { CategoryList } from "./components/CategoryList";
import { LandingHeader } from "./components/LandingHeader";
import { ProductCardList } from "./components/ProductCardList";

const defaultCategoryIndex = 0;

export const LandingPage: FC = () => {
    const dispatch = useDispatch();

    const categories = useSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = useState<number>(defaultCategoryIndex);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    useEffect(() => console.log(categories), [categories]);

    return(
        <>
            <LandingHeader />
            <BigTitle>Наше меню</BigTitle>
            <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
            <ProductCardList products={categories?.at(selectedCategory)?.products} />
        </>
    );
}