import { call } from "redux-saga/effects";
import saveCategoryChanges, { ICategoryChanges } from "../../api/saveCategoryChanges";

export function* workerSaveCategoryChanges(action: ICategoryChanges): Generator {
  try {
    const response = yield call(saveCategoryChanges, action.categoryElement);
  } catch (e) {}
}
