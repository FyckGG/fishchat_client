import { makeAutoObservable } from "mobx";
import UserDto from "../globalInterfaces/UserDto";
import ky, { KyResponse } from "ky";
import StoreUser from "../globalInterfaces/StoreUser";
import WebsocketSendClientTypes from "../textConstants/websocketSendClientTypes";
import ws from "../websocket";

class Store {
  user!: StoreUser;
  isAuth = false;
  //isLoading = false;
  isloading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: StoreUser) {
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
      const is_auth_response: KyResponse = await ky.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/user/refresh`,
        {
          credentials: "include",
        }
      );
      const json_is_auth_response: UserDto = await is_auth_response.json();
      //const responce_user: StoreUser = json_is_auth_response.user;
      localStorage.setItem("token", json_is_auth_response.acces_token);
      this.setAuth(true);
      this.setUser(json_is_auth_response.user);
      ws.send(
        JSON.stringify({
          //type: import.meta.env.VITE_REACT_APP_WSS_USERID_TYPE,
          type: WebsocketSendClientTypes.USER_ID,
          sender: json_is_auth_response.user.id,
          //message: e,
        })
      );
    } catch (e) {
      console.log(e);
    } finally {
      this.setIsloading(false);
    }
  }
}

export default Store;
