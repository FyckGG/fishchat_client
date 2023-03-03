import React from "react";
import MessageCloud from "../../ui/MessageCloud/MessageCloud";
import Circle from "../../ui/Circle/Circle";
import styles from "./DialogMessageBlock.module.css";

const DialogMessageBlock = (props: {
  message_text: string;
  message_date: string;
  is_my_message: boolean;
  is_read: boolean;
}) => {
  return (
    <div
      className={
        props.is_my_message
          ? `${styles.my_message} ${styles.dialog_message_block}`
          : `${styles.interlocutor_message} ${styles.dialog_message_block}`
      }
    >
      <div className={styles.message_cloud}>
        <MessageCloud
          message_text={props.message_text}
          message_date={props.message_date}
          is_my_message={props.is_my_message}
        />
      </div>
      {props.is_my_message && !props.is_read ? (
        <div className={styles.circle}>
          <Circle />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DialogMessageBlock;
