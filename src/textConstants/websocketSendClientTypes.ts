const enum WebsocketSendClientTypes {
  USER__SEARCH = "user_search",
  USER_ID = "user_id",
  SEND_FOLLOW = "send_follow",
  CANCEL_FOLLOW = "cancel_follow",
  BAN = "ban",
  CANCEL_BAN = "cancel_ban",
  ADD_FRIEND = "add_friend",
  DELETE_FRIEND = "delete_friend",
  SEND_DIALOG_MESSAGE = "send_dialog_message",
  CHANGE_MESSAGE_READ_STATUS = "change_message_read_status",
}

export default WebsocketSendClientTypes;
