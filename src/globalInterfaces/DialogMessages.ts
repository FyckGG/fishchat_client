import MessageBlock from "./MessageBlock";

export default interface DialogMessages {
  interlocutor_id: string;
  dialog_messages: MessageBlock[] | null;
}
