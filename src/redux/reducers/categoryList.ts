import { ICategory } from "../../entities";
import { CategoriesAction } from "../actions/actionCreators";
import { SET_ALL_CATEGORIES } from "../actions/actionsTypes";

export interface ICategoryList {
  categories: ICategory[] | null;
}

const initial: ICategoryList = {
  categories: [],
};

export function categoryList(
  state: ICategoryList = initial,
  action: CategoriesAction
): ICategoryList {
  switch (action.type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.categories?.message,
      };
    default:
      return state;
  }
}
