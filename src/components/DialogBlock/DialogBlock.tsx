import React from "react";
import UnreadMessagesCount from "../../ui/UnreadMessagesCount/UnreadMessagesCount";
import Circle from "../../ui/Circle/Circle";
import styles from "./DialogBlock.module.css";

const DialogBlock = (props: {
  dialog_name: string;
  message: string;
  is_my_message: boolean;
  is_message_read: boolean;
  message_date: string;
  unread_messages_count: number;
}) => {
  return (
    <div className={styles.dialog_block}>
      <div>
        <div className={styles.dialog_name}>{props.dialog_name}</div>
        <div className={styles.last_message_date}>{props.message_date}</div>
      </div>

      <div className={styles.messages}>
        <div className={styles.dialog_last_message}>{props.message}</div>
        {/* {props.unread_messages_count != 0 ? (
          <div className={styles.unread_messages_count}>
            <UnreadMessagesCount count={props.unread_messages_count} />
          </div>
        ) : (
          <></>
        )} */}
        {props.is_my_message ? (
          props.is_message_read ? (
            <></>
          ) : (
            <Circle />
          )
        ) : props.unread_messages_count != 0 ? (
          <div className={styles.unread_messages_count}>
            <UnreadMessagesCount count={props.unread_messages_count} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DialogBlock;
