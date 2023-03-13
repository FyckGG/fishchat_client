import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const GoBackButton = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={props.on_click}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};
