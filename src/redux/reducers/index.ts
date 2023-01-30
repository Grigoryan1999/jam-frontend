import { combineReducers } from "redux";
import { auth, IAuth } from './auth';
import { categoryList, ICategoryList } from "./categoryList";
import { marketList, IMarketList } from './marketList';

export interface IInitialState {
  categoryList: ICategoryList;
  marketList: IMarketList;
  auth: IAuth;
}

export default combineReducers({ categoryList, marketList, auth });
