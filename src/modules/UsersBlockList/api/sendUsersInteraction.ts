import ws from "../../../websocket";

const sendUsersInteraction = async (
  source_user_id: string,
  target_user_id: string,
  send_type: string
) => {
  ws.send(
    JSON.stringify({
      type: send_type,
      source: source_user_id,
      target: target_user_id,
    })
  );
};

export default sendUsersInteraction;
