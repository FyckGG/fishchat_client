import React from "react";
import useAutosizeTextArea from "./useAutorizeTextarea";
import styles from "./MessageTextarea.module.css";

const MessageTextarea = (props: {
  pass_text_up?: Function;
  is_clear_area?: boolean;
  clear_area_change?: Function;
}) => {
  React.useEffect(() => {
    if (props.is_clear_area && props.clear_area_change) {
      setMessageText("");
      props.clear_area_change(false);
    }
  }, [props.is_clear_area]);

  const [messageText, setMessageText] = React.useState("");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, messageText);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
    if (props.pass_text_up) props.pass_text_up(e.target.value);
  };

  return (
    <div className={styles.message_textarea}>
      <textarea
        placeholder="Написать сообщение"
        value={messageText}
        onChange={handleMessageChange}
        ref={textAreaRef}
      ></textarea>
    </div>
  );
};

export default MessageTextarea;
