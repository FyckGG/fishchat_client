import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollDownButton = (props: {
  on_click: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={props.on_click}>
      <FontAwesomeIcon icon={faArrowDown} />
    </button>
  );
};

export default ScrollDownButton;
