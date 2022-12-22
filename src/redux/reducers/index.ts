import { IProductForOrder } from './../../entities';
import { combineReducers } from "redux";
import { categoryList, ICategoryList } from "./categoryList";

export interface IInitialState {
  categoryList: ICategoryList;
  productsForOrder: IProductForOrder[];
}

export default combineReducers({ categoryList });
