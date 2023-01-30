import { call, put } from "redux-saga/effects";
import { mockCategoriesList } from './../../assets/mockData';
import { ICategory, Response } from "./../../entities";
import getCategoriesWithProducts from "../../api/getAllCategories";
import { setAllCategories } from "../actions/actionCreators";

export function* workerGetCategoriesWithProducts(): Generator {
  try {
    const response = mockCategoriesList as unknown as Response<ICategory[]>;

    yield put(setAllCategories(response as Response<
      ICategory[]
    >));
  } catch (e) {}
}
