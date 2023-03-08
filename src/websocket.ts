import WebsocketSendServerTypes from "./textConstants/websocketSendServerTypes";
import DialogMessageStore from "./globalStore/DialogMessageStore";

const ws = new WebSocket(import.meta.env.VITE_REACT_APP_WSS_API_URL);

ws.onmessage = (event) => {
  //console.log(JSON.parse(event.data));
  if (
    JSON.parse(event.data).message_type ==
    WebsocketSendServerTypes.NEW_DIALOG_MESSAGE
  )
    DialogMessageStore.addNewMessage(
      //JSON.parse(event.data).interlocutor_id,
      JSON.parse(event.data).new_message
    );

  if (
    JSON.parse(event.data).message_type ==
    WebsocketSendServerTypes.NEW_MESSAGE_READ_STATUS
  )
    DialogMessageStore.changeMessageReadStatus(
      //JSON.parse(event.data).interlocutor_id,
      JSON.parse(event.data).message_id
    );
};

export default ws;
