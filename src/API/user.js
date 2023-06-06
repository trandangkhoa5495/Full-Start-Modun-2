import axiosClient from "./AxiosClient";

export class UserAPI {
  static register(params) {
    const url = "/register";
    return axiosClient.post(url, params);
  }
  static login(params) {
    const url = "/login";
    return axiosClient.post(url, params);
  }
}
