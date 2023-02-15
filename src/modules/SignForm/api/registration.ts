import UserDto from "../../../globalInterfaces/UserDto";
import ky, { KyResponse } from "ky";

const registration = async (email: string, login: string, password: string) => {
  const registration_result: KyResponse = await ky.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user/registration`,
    {
      credentials: "include",

      json: { email: email, login: login, password: password },
    }
  );
  console.log(registration_result);
  const json_result: UserDto = await registration_result.json();
  return json_result;
};

export default registration;
