import ws from "../../../websocket";

export const sendIdToWebSocket = (id: string) => {
  ws.send(
    JSON.stringify({
      type: import.meta.env.VITE_REACT_APP_WSS_USERID_TYPE,
      sender: id,
      //message: e,
    })
  );
};
