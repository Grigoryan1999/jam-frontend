import { IProductForOrder, ICategory } from './../../entities';
import { CategoriesAction } from "../actions/actionCreators";
import { ADD_PRODUCT_TO_ORDER, CHANGE_CATEGORY_ITEM, CHANGE_PRODUCT_COUNT, DELETE_CATEGORY_ITEM, REMOVE_PRODUCT_FROM_ORDER, SET_ALL_CATEGORIES } from "../actions/actionsTypes";

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
      if (!isOrderInOrder) {
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
          if (element.productUuid === action.productForOrder.productUuid) {
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
    case DELETE_CATEGORY_ITEM:
      return {
        ...state,
        categories: [...(state.categories?.filter((element: ICategory) => element.uuid !== action.categoryUuid) || [])]
      };
    case CHANGE_CATEGORY_ITEM:
      return {
        ...state,
        categories: [...(state.categories?.map((element: ICategory) => {
          if(element.uuid === action.categoryElement.uuid) {
            element.name = action.categoryElement.name;
            element.subscription = element.subscription;
          }
          return element;
        }) || [])]
      }
    default:
      return state;
  }
}
