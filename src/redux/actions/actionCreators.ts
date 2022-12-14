import { ICategory, Response } from "../../entities";
import { GET_ALL_CATEGORIES, SET_ALL_CATEGORIES } from "./actionsTypes";

export function setAllCategories(categories: Response<ICategory[]>) {
  return {
    type: SET_ALL_CATEGORIES,
    categories,
  } as const;
}

export function getAllCategories() {
  return {
    type: GET_ALL_CATEGORIES,
  } as const;
}

export type CategoriesAction = ReturnType<typeof setAllCategories>;
