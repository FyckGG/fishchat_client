import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const SendMessageButton = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={props.on_click}>
      <FontAwesomeIcon icon={faMessage} size="1x" />
    </button>
  );
};

export default SendMessageButton;
