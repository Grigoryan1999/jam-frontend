import { API_URL } from "./index";
import api from ".";

export default async function getCategoriesWithProducts() {
  return (await api.get(`${API_URL}/category/all`)).data;
}
