import { API_URL } from "./index";
import api from ".";

export default async function getAllMarkets() {
  return (await api.get(`${API_URL}/market/all`)).data;
}
