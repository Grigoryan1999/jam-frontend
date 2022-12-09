import { IInitialState } from "./reducers";

export const categoriesSelector = (state: IInitialState) =>
  state.categoryList.categories;
