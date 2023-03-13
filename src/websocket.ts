import WebsocketSendServerTypes from "./textConstants/websocketSendServerTypes";
import DialogMessageStore from "./globalStore/DialogMessageStore";
import { errorNotify } from "./globalFunctions/erorrNotify";
const ws = new WebSocket(import.meta.env.VITE_REACT_APP_WSS_API_URL);

ws.onmessage = (event) => {
  if (
    JSON.parse(event.data).message_type ==
    WebsocketSendServerTypes.NEW_DIALOG_MESSAGE
  )
    DialogMessageStore.addNewMessage(
      JSON.parse(event.data).new_message,

      JSON.parse(event.data).interlocutor_id,
      JSON.parse(event.data).interlocutor_name
    );

  if (
    JSON.parse(event.data).message_type ==
    WebsocketSendServerTypes.NEW_MESSAGE_READ_STATUS
  )
    DialogMessageStore.changeMessageReadStatus(
      JSON.parse(event.data).message_id
    );

  if (JSON.parse(event.data).message_type == WebsocketSendServerTypes.ERROR)
    errorNotify(JSON.parse(event.data).error);
};

export default ws;
