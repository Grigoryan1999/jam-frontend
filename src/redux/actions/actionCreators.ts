import { IMarket, IProductForOrder, ISignIn, ISignUp } from "./../../entities";
import { ICategory, Response } from "../../entities";
import {
  ADD_PRODUCT_TO_ORDER,
  CHANGE_CATEGORY_ITEM,
  CHANGE_PRODUCT_COUNT,
  GET_ALL_CATEGORIES,
  GET_ALL_MARKETS,
  REMOVE_PRODUCT_FROM_ORDER,
  SET_ACTIVATION_REQUIRED,
  SET_ALL_CATEGORIES,
  SET_ALL_MARKETS,
  SET_AUTH_ERROR,
  SET_USER_INFO,
  SIGN_IN_ACTION,
  SIGN_UP_ACTION,
} from "./actionsTypes";
import { IAuth } from "../reducers/auth";

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

export function getAllMarkets() {
  return {
    type: GET_ALL_MARKETS,
  } as const;
}

export function setAllMarkets(markets: Response<IMarket[]>) {
  return {
    type: SET_ALL_MARKETS,
    markets,
  } as const;
}

export function signIn(body?: ISignIn) {
  return {
    type: SIGN_IN_ACTION,
    body,
  } as const;
}

export function signUp(body: ISignUp) {
  return {
    type: SIGN_UP_ACTION,
    body,
  } as const;
}

export function setUserInfo(userInfo: IAuth) {
  return {
    type: SET_USER_INFO,
    userInfo,
  } as const;
}

export function AuthError(errorTitle: string) {
  return {
    type: SET_AUTH_ERROR,
    errorTitle,
  } as const;
}

export function setActivationRequired() {
  return {
    type: SET_ACTIVATION_REQUIRED,
  } as const;
}

export function saveChangedCategory(categoryElement: ICategory) {
  return {
    type: CHANGE_CATEGORY_ITEM,
    categoryElement
  } as const;
}

export type CategoriesAction = ReturnType<
  | typeof setAllCategories
  | typeof addProductToOrder
  | typeof changeProductToOrderCount
  | typeof removeProductFromOrder
>;

export type MarketsAction = ReturnType<
  typeof getAllMarkets | typeof setAllMarkets
>;

export type AuthAction = ReturnType<
  typeof setUserInfo
  | typeof AuthError
  | typeof setActivationRequired
>;