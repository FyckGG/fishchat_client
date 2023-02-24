// import UserDto from "../../../globalInterfaces/UserDto";
import $api from "../../../http";
import ky, { KyResponse } from "ky";

const sendFollow = async (source_user_id: string, target_user_id: string) => {
  //   const authorization_result: KyResponse = await ky.post(
  //     `${import.meta.env.VITE_REACT_APP_API_URL}/user/authorization`,
  //     {
  //       credentials: "include",
  //       json: { email: email, password: password },
  //     }
  //   );
  //   console.log(authorization_result);
  //   const json_result: UserDto = await authorization_result.json();
  //   return json_result;
  const follow_result: KyResponse = await $api.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user-interation/send-follow`,
    { json: { source_user_id: source_user_id, target_user_id: target_user_id } }
  );
  return follow_result;
};

export default sendFollow;
