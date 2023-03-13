import MessageBlock from "./MessageBlock";
export interface Dialog {
  interlocutor_id: string;
  interlocutor_name: string;
  messages: MessageBlock[];
  dialog_length: number;
}
