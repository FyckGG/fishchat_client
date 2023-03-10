import { makeAutoObservable } from "mobx";
import { KyResponse } from "ky";
import $api from "../http";
import GetMessageResponce from "../globalInterfaces/GetMessageResponce";
import MessageBlock from "../globalInterfaces/MessageBlock";
import Interlocutor from "../globalInterfaces/Interlocutor";
import { Dialog } from "../globalInterfaces/Dialog";

class sendDialogMessageStore {
  interlocutor_list: Interlocutor[] = [];
  message_list: MessageBlock[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getDialogs(user_id: string) {
    const getting_dialog_result: KyResponse = await $api.get(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/dialog/get-user-dialogs/?user_id=${user_id}&dialog_count=20&dialog_part=0`
    );
    console.log("dialog");
    const json_getting_dialog_result: Dialog[] =
      await getting_dialog_result.json();
    json_getting_dialog_result.map((dialog) => {
      if (
        this.interlocutor_list.filter(
          (interlocutor) =>
            interlocutor.interlocutor_id == dialog.interlocutor_id
        ).length == 0
      ) {
        this.interlocutor_list.push({
          interlocutor_id: dialog.interlocutor_id,
          messages_count: dialog.dialog_length,
        });
        dialog.messages.map((message) => {
          this.message_list.push(message);
        });
      }
    });
    //console.log("gg");
  }

  async getMessagesForDialog(
    user_id: string,
    interlocutor_id: string,
    message_count: number
  ) {
    let is_interlocutor = false;
    this.interlocutor_list.map((interlocutor) => {
      if (interlocutor.interlocutor_id == interlocutor_id)
        is_interlocutor = true;
    });
    if (!is_interlocutor) {
      const getting_messages_result: KyResponse = await $api.get(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/message/get-dialog-messages/?user_1=${user_id}&user_2=${interlocutor_id}&message_count=${message_count}&list_part=0`
      );

      const json_getting_message_result: GetMessageResponce =
        await getting_messages_result.json();

      const message_list: MessageBlock[] = json_getting_message_result.messages;

      message_list.map((message) => this.message_list.push(message));

      this.interlocutor_list.push({
        interlocutor_id: interlocutor_id,
        messages_count: json_getting_message_result.dialog_length,
      });

      return json_getting_message_result;
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

  async getMoreMessagesForDialog(
    user_id: string,
    interlocutor_id: string,
    message_count: number,
    list_part: number
  ) {
    const getting_messages_result: KyResponse = await $api.get(
      `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/message/get-dialog-messages/?user_1=${user_id}&user_2=${interlocutor_id}&message_count=${message_count}&list_part=${list_part}`
    );

    const json_getting_message_result: GetMessageResponce =
      await getting_messages_result.json();

    console.log(json_getting_message_result.messages);
    for (let i = json_getting_message_result.messages.length - 1; i >= 0; i--) {
      this.message_list.unshift(json_getting_message_result.messages[i]);
    }

    return json_getting_message_result;
  }

  getLastDialogMessage(interlocutor_id: string): MessageBlock | null {
    let last_message = null;
    this.message_list.map((message) => {
      if (
        message.source_id == interlocutor_id ||
        message.target_id == interlocutor_id
      ) {
        last_message = message;
        return;
      }
    });
    //console.log("gg");
    return last_message;
  }

  getCountUnreadDialogMessages(interlocutor_id: string) {
    let unread_messages = 0;
    this.message_list.map((message) => {
      if (message.source_id == interlocutor_id && !message.is_message_read)
        unread_messages++;
    });
    return unread_messages;
  }

  getStoreCountDialogMessages(interlocutor_id: string) {
    let messages_count = 0;
    this.message_list.map((message) => {
      if (
        message.source_id == interlocutor_id ||
        message.target_id == interlocutor_id
      )
        messages_count++;
    });

    return messages_count;
  }

  getCountDialogMessages(interlocutor_id: string) {
    let dialog_count = 0;
    this.interlocutor_list.map((interlocutor) => {
      if (interlocutor.interlocutor_id == interlocutor_id)
        dialog_count = interlocutor.messages_count;
    });
    return dialog_count;
  }

  moveDialog(interlocutor_id: string) {
    this.interlocutor_list.map((interlocutor, index) => {
      if (interlocutor.interlocutor_id == interlocutor_id) {
        let moving_interlocutor = this.interlocutor_list.splice(index, 1);
        this.interlocutor_list.unshift(moving_interlocutor[0]);
      }
    });
  }

  addNewMessage(message: MessageBlock) {
    if (this.message_list.length == 0) this.message_list = [message];
    else this.message_list.push(message);
    let interlocutor_id = "";
    this.interlocutor_list.map((interlocutor) => {
      if (
        interlocutor.interlocutor_id == message.source_id ||
        interlocutor.interlocutor_id == message.target_id
      ) {
        interlocutor_id = interlocutor.interlocutor_id;
        interlocutor.messages_count++;
      }
    });
    console.log("new message");
    this.moveDialog(interlocutor_id);
  }

  changeMessageReadStatus(message_id: string) {
    if (this.message_list.length != 0)
      this.message_list.map((message) => {
        if (message._id == message_id) message.is_message_read = true;
      });
  }
}

export default new sendDialogMessageStore();
