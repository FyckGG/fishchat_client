import { makeAutoObservable } from "mobx";
import UserDto from "../globalInterfaces/UserDto";
import ky, { KyResponse } from "ky";

class Store {
  user = {};
  isAuth = false;
  //isLoading = false;
  isloading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: object) {
    this.user = user;
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setIsloading(isLoading: boolean) {
    this.isloading = isLoading;
  }

  async checkAuth() {
    try {
      //this.setIsloading(true);
      const is_auth_response: KyResponse = await ky.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/user/refresh`,
        {
          credentials: "include",
        }
      );
      const json_is_auth_response: UserDto = await is_auth_response.json();
      localStorage.setItem("token", json_is_auth_response.acces_token);
      this.setAuth(true);
      this.setUser(json_is_auth_response.user);
      console.log(json_is_auth_response);
    } catch (e) {
      console.log(e);
    } finally {
      this.setIsloading(false);
    }
  }
}

export default Store;
