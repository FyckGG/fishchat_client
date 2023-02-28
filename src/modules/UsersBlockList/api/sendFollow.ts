import $api from "../../../http";
import ky, { KyResponse } from "ky";

const sendFollow = async (source_user_id: string, target_user_id: string) => {
  const follow_result: KyResponse = await $api.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user-interation/send-follow`,
    { json: { source_user_id: source_user_id, target_user_id: target_user_id } }
  );
  const json_follow_result: string = await follow_result.json();
  return json_follow_result;
};

export default sendFollow;
