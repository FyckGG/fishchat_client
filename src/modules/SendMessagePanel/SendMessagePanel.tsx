import React from "react";
import MessageBar from "../../components/MessageBar/MessageBar";
import { Context } from "../../main";
import sendDialogMessage from "./api/sendDialogMessage";

const SendMessagePanel = (props: { target_user: string | null }) => {
  const store = React.useContext(Context);
  const [message, setMessage] = React.useState("");
  const [clearMessage, setClearMessage] = React.useState(false);
  const handleMessageTextChange = (e: string) => {
    setMessage(e);
  };
  const handleclearMessageChange = (e: boolean) => {
    setClearMessage(false);
  };
  return (
    <MessageBar
      is_clear_area={clearMessage}
      clear_area_change={handleclearMessageChange}
      pass_text_up={handleMessageTextChange}
      on_click={() => {
        if (!props.target_user)
          throw new Error("Cannot send a message with a null user value");
        sendDialogMessage(store.user.id, props.target_user, message);
        setMessage("");
        setClearMessage(true);
      }}
    />
  );
};

export default SendMessagePanel;
