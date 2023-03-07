export default interface MessageBlock {
  _id: string;
  message_text: string;
  source_id: string;
  target_id: string;
  is_message_read: boolean;
  message_date: string;
}
