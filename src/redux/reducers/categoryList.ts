import { IProductForOrder } from './../../entities';
import { ICategory } from "../../entities";
import { CategoriesAction } from "../actions/actionCreators";
import { ADD_PRODUCT_TO_ORDER, CHANGE_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_ORDER, SET_ALL_CATEGORIES } from "../actions/actionsTypes";

export interface ICategoryList {
  categories: ICategory[] | null;
  productsForOrder: IProductForOrder[] | null;
}

const initial: ICategoryList = {
  categories: [],
  productsForOrder: [],
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
    case ADD_PRODUCT_TO_ORDER: 
    const isOrderInOrder = state.productsForOrder?.find((element: IProductForOrder) => (
      element.productUuid === action.productForOrder.productUuid
    ));
      if(!isOrderInOrder) {
        return {
          ...state,
          productsForOrder: [...(state.productsForOrder ?? []), action.productForOrder],
        }
      } else {
        return state
      }
    case CHANGE_PRODUCT_COUNT:
        return {
          ...state,
          productsForOrder: [...(state.productsForOrder?.map((element) => {
            if(element.productUuid === action.productForOrder.productUuid) {
              element.count = action.productForOrder.count;
            }
            return element;
          }) ?? [])],
        }
    case REMOVE_PRODUCT_FROM_ORDER:
        return {
          ...state,
          productsForOrder: [... (state.productsForOrder?.filter((element) => {
            return element.productUuid !== action.productUuid
          })) ?? []]
        }
    default:
      return state;
  }
}
