import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const ExitButton = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faDoorOpen} size="2x" />
    </button>
  );
};

export default ExitButton;
