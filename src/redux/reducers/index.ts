import { combineReducers } from "redux";
import { categoryList, ICategoryList } from "./categoryList";

export interface IInitialState {
  categoryList: ICategoryList;
}

export default combineReducers({ categoryList });
