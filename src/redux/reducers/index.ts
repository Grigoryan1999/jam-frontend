import { IProductForOrder } from './../../entities';
import { combineReducers } from "redux";
import { categoryList, ICategoryList } from "./categoryList";
import { marketList, IMarketList } from './marketList';

export interface IInitialState {
  categoryList: ICategoryList;
  marketList: IMarketList;
}

export default combineReducers({ categoryList, marketList });
