import { call } from "redux-saga/effects";
import deleteCategory, { IDeleteCategory } from "../../api/deleteCategory";

export function* workerDeleteCategory(action: IDeleteCategory): Generator {
  try {
    const response = yield call(deleteCategory, action.categoryUuid);
  } catch (e) {}
}
