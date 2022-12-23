import { takeEvery, all } from "redux-saga/effects";
import { GET_ALL_MARKETS } from './../actions/actionsTypes';
import { GET_ALL_CATEGORIES } from "../actions/actionsTypes";
import { workerGetCategoriesWithProducts } from "./workerGetCategoriesWithProducts";
import { workerGetMarkets } from "./workerGetMarkets";

export function* watchSaga() {
  yield all([
    takeEvery(GET_ALL_CATEGORIES, workerGetCategoriesWithProducts),
    takeEvery(GET_ALL_MARKETS, workerGetMarkets)
  ]);
}

export default function* rootSaga() {
  yield watchSaga();
}
