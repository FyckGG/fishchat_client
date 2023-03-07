import { makeAutoObservable } from "mobx";
import MessageBlock from "../interfaces/MessageBlock";

class sendDialogMessageStore {
  message_list: MessageBlock[] | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  addNewMessage(message: MessageBlock) {
    if (!this.message_list) this.message_list = [message];
    else this.message_list.push(message);
  }

  // changeMessageReadStatus(message_id: string) {
  //   if (this.message_list != null)
  //     this.message_list.map((message) => {
  //       if (message._id == message_id) message.is_message_read = true;
  //     });
  // }
}

export default new sendDialogMessageStore();
