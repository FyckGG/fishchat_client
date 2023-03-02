import ws from "../../../websocket";
import WebsocketSendClientTypes from "../../../textConstants/websocketSendClientTypes";

const cancelBanUser = async (
  source_user_id: string,
  target_user_id: string
) => {
  ws.send(
    JSON.stringify({
      type: WebsocketSendClientTypes.CANCEL_BAN,
      source: source_user_id,
      target: target_user_id,
    })
  );
};

export default cancelBanUser;
