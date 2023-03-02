import ws from "../../../websocket";
import WebsocketSendClientTypes from "../../../textConstants/websocketSendClientTypes";

export const sendIdToWebSocket = (id: string) => {
  ws.send(
    JSON.stringify({
      type: WebsocketSendClientTypes.USER_ID,
      sender: id,
    })
  );
};
