import React from "react";
import MessageBar from "../../components/MessageBar/MessageBar";
import { Context } from "../../main";
import sendDialogMessage from "./api/sendDialogMessage";

const SendMessagePanel = (props: { target_user: string | null }) => {
  const store = React.useContext(Context);
  const [message, setMessage] = React.useState("");
  const handleMessageTextChange = (e: string) => {
    setMessage(e);
  };
  return (
    <MessageBar
      pass_text_up={handleMessageTextChange}
      on_click={() => {
        if (!props.target_user)
          throw new Error("Cannot send a message with a null user value");
        sendDialogMessage(store.user.id, props.target_user, message);
      }}
    />
  );
};

export default SendMessagePanel;
