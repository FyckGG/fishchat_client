import MessageBlock from "./MessageBlock";

export default interface GetMessageResponce {
  messages: MessageBlock[];
  user_1_name: string;
  user_2_name: string;
  dialog_length: number;
}
