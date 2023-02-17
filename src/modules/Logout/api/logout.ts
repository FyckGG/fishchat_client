// import UserDto from "../../../globalInterfaces/UserDto";
import $api from "./../../../http/index";
import { KyResponse } from "ky";

const logout = async () => {
  const logout_result: KyResponse = await $api.get(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user/logout`,
    {
      credentials: "include",
    }
  );
  //console.log(logout_result);
  return logout_result;
};

export default logout;
