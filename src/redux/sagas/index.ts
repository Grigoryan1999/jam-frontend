import { takeEvery, all } from "redux-saga/effects";
import { CHANGE_CATEGORY_ITEM, GET_ALL_MARKETS, SIGN_IN_ACTION, SIGN_UP_ACTION } from './../actions/actionsTypes';
import { GET_ALL_CATEGORIES } from "../actions/actionsTypes";
import { workerGetCategoriesWithProducts } from "./workerGetCategoriesWithProducts";
import { workerGetMarkets } from "./workerGetMarkets";
import { workerSignIn } from "./workerSignIn";
import { workerSignUp } from "./workerSignUp";
import { workerSaveCategoryChanges } from "./workerSaveCategoryChanges";

export function* watchSaga() {
  yield all([
    takeEvery(GET_ALL_CATEGORIES, workerGetCategoriesWithProducts),
    takeEvery(GET_ALL_MARKETS, workerGetMarkets),
    takeEvery(SIGN_IN_ACTION, workerSignIn),
    takeEvery(SIGN_UP_ACTION, workerSignUp),
    takeEvery(CHANGE_CATEGORY_ITEM, workerSaveCategoryChanges)
  ]);
}

export default function* rootSaga() {
  yield watchSaga();
}
