import { API_URL } from "./index";
import api from ".";
import { Action } from "redux";
import { ICategory } from "../entities";

export interface IDeleteCategory extends Action {
  categoryUuid: string
}

export default async function deleteCategory(categoryUuid: string) {
  return (await api.delete(`${API_URL}/category/${categoryUuid}`)).data;
}
