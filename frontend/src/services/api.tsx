import axios from "axios";

let  _access_token = "";

export const setAccessToken = (token: string) => {
  _access_token = token;
}

export const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

const interceptRequest = (config: any) => {
  if(_access_token) {
    config.headers['Authorization'] = `Bearer ${_access_token}`;
  }
  return config;
};

const interceptRequestError = (error: any) => {
  return Promise.reject(error);
};

api.interceptors.request.use(interceptRequest, interceptRequestError);

export default api;
