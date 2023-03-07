import React from "react";
import MessageTextarea from "../../ui/MessageTextarea/MessageTextarea";
import SendMessageButton from "../../ui/SendMessageButton/SendMessageButton";
import styles from "./MessageBar.module.css";

const MessageBar = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
  pass_text_up?: Function;
  is_clear_area?: boolean;
  clear_area_change?: Function;
}) => {
  const [messageText, setMesageText] = React.useState("");

  const handleMessageTextChange = (e: string) => {
    setMesageText(e);
    if (props.pass_text_up) props.pass_text_up(e);
  };

  return (
    <div className={styles.message_bar}>
      <div className={styles.gg}>
        <MessageTextarea
          pass_text_up={handleMessageTextChange}
          is_clear_area={props.is_clear_area}
          clear_area_change={props.clear_area_change}
        />
        <SendMessageButton on_click={props.on_click} />
      </div>
    </div>
  );
};

export default MessageBar;
