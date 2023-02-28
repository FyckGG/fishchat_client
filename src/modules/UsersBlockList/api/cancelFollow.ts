import $api from "../../../http";
import ky, { KyResponse } from "ky";

const cancelFollow = async (source_user_id: string, target_user_id: string) => {
  const cancel_follow_result: KyResponse = await $api.delete(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user-interation/cancel-follow`,
    { json: { source_user_id: source_user_id, target_user_id: target_user_id } }
  );
  const json_cancel_follow_result: string = await cancel_follow_result.json();
  return json_cancel_follow_result;
};

export default cancelFollow;
