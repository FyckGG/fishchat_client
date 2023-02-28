import $api from "../../../http";
import ky, { KyResponse } from "ky";

const banUser = async (source_user_id: string, target_user_id: string) => {
  const ban_result: KyResponse = await $api.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user-interation//ban-user`,
    { json: { source_user_id: source_user_id, target_user_id: target_user_id } }
  );
  const json_ban_result: string = await ban_result.json();

  return json_ban_result;
};

export default banUser;
