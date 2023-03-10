import MessageBlock from "./MessageBlock";
export interface Dialog {
  interlocutor_id: string;
  messages: MessageBlock[];
  dialog_length: number;
}
