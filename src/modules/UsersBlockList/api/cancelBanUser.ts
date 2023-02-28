import $api from "../../../http";
import ky, { KyResponse } from "ky";

const cancelBanUser = async (
  source_user_id: string,
  target_user_id: string
) => {
  const cancel_ban_user_result: KyResponse = await $api.delete(
    `${import.meta.env.VITE_REACT_APP_API_URL}/user-interation/cancel-ban-user`,
    { json: { source_user_id: source_user_id, target_user_id: target_user_id } }
  );
  const json_cancel_ban_user_result: string =
    await cancel_ban_user_result.json();

  return json_cancel_ban_user_result;
};

export default cancelBanUser;
