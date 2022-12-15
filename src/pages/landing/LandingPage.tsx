import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ICategory } from "../../entities";
import { BigTitle } from "../../global";
import { getAllCategories } from "../../redux/actions/actionCreators";
import { categoriesSelector } from "../../redux/selectors";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import { ProductCardList } from "./components/ProductCardList/ProductCardList";


export const LandingPage: FC = () => {
    const dispatch = useDispatch();

    const categories = useSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch, selectedCategory]);

    useEffect(() => {
        if(categories && !selectedCategory) {
            setSelectedCategory(categories[0]?.uuid)
        }
    }, [categories, selectedCategory]);

    return(
        <>
            <LandingHeader />
            <BigTitle>Наше меню</BigTitle>
            <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
            <ProductCardList products={categories?.find((categoryElement: ICategory) => categoryElement.uuid === selectedCategory)?.products} />
        </>
    );
}