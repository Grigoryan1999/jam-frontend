import { IProductForOrder } from './../../entities';
import { ICategory, Response } from "../../entities";
import { ADD_PRODUCT_TO_ORDER, CHANGE_PRODUCT_COUNT, GET_ALL_CATEGORIES, REMOVE_PRODUCT_FROM_ORDER, SET_ALL_CATEGORIES } from "./actionsTypes";

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

export function addProductToOrder(productForOrder: IProductForOrder) {
  return {
    type: ADD_PRODUCT_TO_ORDER,
    productForOrder,
  } as const;
}

export function changeProductToOrderCount(productForOrder: IProductForOrder) {
  return {
    type: CHANGE_PRODUCT_COUNT,
    productForOrder,
  } as const;
}

export function removeProductFromOrder(productUuid: string) {
  return {
    type: REMOVE_PRODUCT_FROM_ORDER,
    productUuid,
  } as const;
}

export type CategoriesAction = ReturnType<typeof setAllCategories
  | typeof addProductToOrder
  | typeof changeProductToOrderCount
  | typeof removeProductFromOrder>;
