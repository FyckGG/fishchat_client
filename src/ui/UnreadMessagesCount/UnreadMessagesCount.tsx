import React from "react";
import styles from "./UnreadMessagesCount.module.css";

const UnreadMessagesCount = (props: { count: number }) => {
  return <div className={styles.unread_messages_count}>{props.count}</div>;
};

export default UnreadMessagesCount;
