import ws from "../../../websocket";
import WebsocketSendClientTypes from "../../../textConstants/websocketSendClientTypes";

const changeMessageReadStatus = async (
  //   source_user_id: string,
  //   target_user_id: string,
  //   message_text: string
  message_id: string
) => {
  ws.send(
    JSON.stringify({
      type: WebsocketSendClientTypes.CHANGE_MESSAGE_READ_STATUS,
      //   source: source_user_id,
      //   target: target_user_id,
      //   message_text: message_text,
      message_id: message_id,
    })
  );
};

export default changeMessageReadStatus;
