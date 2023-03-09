import MessageBlock from "./MessageBlock";

export default interface GetMessageResponce {
  messages: MessageBlock[];
  dialog_length: number;
}
