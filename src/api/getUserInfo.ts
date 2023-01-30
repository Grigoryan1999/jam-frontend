import { API_URL } from "./index";
import api from ".";

export default async function getUserInfo() {
  return (await api.get(`${API_URL}/user/my`)).data;
}
