import { GoBackButton } from "../../ui/GoBackButton/GoBackButton";
import { useNavigate } from "react-router-dom";

import React from "react";

export const GoBack = () => {
  const navigate = useNavigate();

  return (
    <GoBackButton
      on_click={() => {
        navigate(-1);
      }}
    />
  );
};
