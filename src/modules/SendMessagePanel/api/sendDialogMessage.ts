import ws from "../../../websocket";
import WebsocketSendClientTypes from "../../../textConstants/websocketSendClientTypes";

const sendDialogMessage = async (
  source_user_id: string,
  target_user_id: string,
  message_text: string
) => {
  ws.send(
    JSON.stringify({
      type: WebsocketSendClientTypes.SEND_DIALOG_MESSAGE,
      source: source_user_id,
      target: target_user_id,
      message_text: message_text,
    })
  );
};

export default sendDialogMessage;
