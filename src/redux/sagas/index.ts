import { takeEvery, all } from "redux-saga/effects";
import { GET_ALL_CATEGORIES } from "../actions/actionsTypes";
import { workerGetCategoriesWithProducts } from "./workerGetCategoriesWithProducts";

export function* watchSaga() {
  yield all([takeEvery(GET_ALL_CATEGORIES, workerGetCategoriesWithProducts)]);
}

export default function* rootSaga() {
  yield watchSaga();
}
