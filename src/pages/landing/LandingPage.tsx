import { FC, useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { ICategory } from "../../entities";
import { BigTitle } from "../../global";
import { categoriesSelector } from "../../redux/selectors";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import { ProductCardList } from "./components/ProductCardList/ProductCardList";


export const LandingPage: FC = () => {
    const categories = useSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

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