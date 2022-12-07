import { API_URL } from "./index";
import api from ".";

export default async function getAllProducts() {
  return await api.get(`${API_URL}/role/all`);
}
