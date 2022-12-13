import axios from "axios";

export const API_URL = `https://localhost:3001/api`;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (confing) => {
    return confing;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const originRequest = error.config;
        const response = await axios.get<AuthenticatorResponse>(
          `${API_URL}/token`,
          {
            withCredentials: true,
          }
        );

        const token: any = response.data;

        localStorage.setItem("token", token.accessToken);
        return api.request(originRequest);
      } catch (e) {}
    }
  }
);

export default api;
