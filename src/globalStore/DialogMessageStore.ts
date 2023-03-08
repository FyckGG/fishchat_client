import { makeAutoObservable } from "mobx";
import { KyResponse } from "ky";
import $api from "../http";
import MessageBlock from "../globalInterfaces/MessageBlock";

class sendDialogMessageStore {
  interlocutor_list: string[] = [];
  message_list: MessageBlock[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getMessagesForDialog(user_id: string, interlocutor_id: string) {
    let is_interlocutor = false;
    this.interlocutor_list.map((interlocutor) => {
      if (interlocutor == interlocutor_id) is_interlocutor = true;
    });
    if (!is_interlocutor) {
      const getting_messages_result: KyResponse = await $api.get(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/message/get-dialog-messages/?user_1=${user_id}&user_2=${interlocutor_id}`
      );

      const json_getting_message_result: MessageBlock[] =
        await getting_messages_result.json();

      json_getting_message_result.map((message) =>
        this.message_list.push(message)
      );

      this.interlocutor_list.push(interlocutor_id);
    } else {
      const dialog_messages: MessageBlock[] = [];
      this.message_list.map((message) => {
        if (
          (message.source_id == interlocutor_id ||
            message.source_id == user_id) &&
          (message.target_id == interlocutor_id || message.target_id == user_id)
        ) {
          dialog_messages.push(message);
        }
      });
      return dialog_messages;
    }
  }

  addNewMessage(message: MessageBlock) {
    if (this.message_list.length == 0) this.message_list = [message];
    else this.message_list.push(message);
  }

  changeMessageReadStatus(message_id: string) {
    if (this.message_list.length != 0)
      this.message_list.map((message) => {
        if (message._id == message_id) message.is_message_read = true;
      });
  }
}

export default new sendDialogMessageStore();
