import { IMarket } from './../../entities';
import { MarketsAction } from "../actions/actionCreators";
import { SET_ALL_MARKETS } from "../actions/actionsTypes";

export interface IMarketList {
  markets: IMarket[] | null;
}

const initial: IMarketList = {
  markets: [],
};

export function marketList(
  state: IMarketList = initial,
  action: MarketsAction
): IMarketList {
  switch (action.type) {
    case SET_ALL_MARKETS:
      return {
        ...state,
        markets: action.markets?.message,
      };
    default:
      return state;
  }
}
