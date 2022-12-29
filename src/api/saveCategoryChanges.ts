import { API_URL } from "./index";
import api from ".";
import { Action } from "redux";
import { ICategory } from "../entities";

export interface ICategoryChanges extends Action {
  categoryElement: ICategory
}

export default async function saveCategoryChanges(categoryElement: ICategory) {
  return (await api.put(`${API_URL}/category/${categoryElement.uuid}`, {...categoryElement})).data;
}
