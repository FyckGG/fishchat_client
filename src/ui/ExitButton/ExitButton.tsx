import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const ExitButton = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={props.on_click}>
      <FontAwesomeIcon icon={faDoorOpen} size="2x" />
    </button>
  );
};

export default ExitButton;
