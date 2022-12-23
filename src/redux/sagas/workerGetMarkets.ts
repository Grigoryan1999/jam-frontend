import { call, put } from "redux-saga/effects";
import getAllMarkets from "../../api/getAllMarkets";
import { IMarket, Response } from "../../entities";
import { setAllMarkets } from "../actions/actionCreators";

export function* workerGetMarkets(): Generator {
  try {
    const response = yield call(getAllMarkets);

    yield put(setAllMarkets(response as Response<
      IMarket[]
    >));
  } catch (e) {}
}
