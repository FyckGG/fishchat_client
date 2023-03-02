import ws from "../../../websocket";
import WebsocketSendClientTypes from "../../../textConstants/websocketSendClientTypes";

const sendFollow = async (source_user_id: string, target_user_id: string) => {
  ws.send(
    JSON.stringify({
      type: WebsocketSendClientTypes.SEND_FOLLOW,
      source: source_user_id,
      target: target_user_id,
    })
  );
};

export default sendFollow;
