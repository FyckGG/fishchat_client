import UserDto from "../../../globalInterfaces/UserDto";
import ky, { KyResponse } from "ky";

const authorization = async (email: string, password: string) => {
  const authorization_result: KyResponse = await ky.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user/authorization`,
    {
      credentials: "include",

      json: { email: email, password: password },
    }
  );

  const json_result: UserDto = await authorization_result.json();
  return json_result;
};

export default authorization;
