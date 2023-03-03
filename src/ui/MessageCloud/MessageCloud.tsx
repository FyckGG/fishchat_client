import React from "react";
import styles from "./MessageCloud.module.css";

const MessageCloud = (props: {
  message_text: string;
  message_date: string;
  is_my_message: boolean;
}) => {
  return (
    <div
      className={
        props.is_my_message
          ? `${styles.my_message} ${styles.message_cloud}`
          : `${styles.interlocutor_message} ${styles.message_cloud}`
      }
    >
      <div className={styles.message_text}>{props.message_text}</div>

      <div className={styles.message_time}>{props.message_date}</div>
    </div>
  );
};

export default MessageCloud;
