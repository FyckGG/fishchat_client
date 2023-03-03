import React from "react";
import MessageTextarea from "../../ui/MessageTextarea/MessageTextarea";
import SendMessageButton from "../../ui/SendMessageButton/SendMessageButton";
import styles from "./MessageBar.module.css";

const MessageBar = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
  pass_text_up?: Function;
}) => {
  const [messageText, setMesageText] = React.useState("");
  const handleMessageTextChange = (e: string) => {
    setMesageText(e);
    if (props.pass_text_up) props.pass_text_up(e);
  };
  return (
    <div className={styles.message_bar}>
      <div className={styles.gg}>
        <MessageTextarea pass_text_up={handleMessageTextChange} />
        <SendMessageButton on_click={props.on_click} />
      </div>
    </div>
  );
};

export default MessageBar;
