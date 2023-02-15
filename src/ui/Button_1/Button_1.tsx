import React from "react";
import styles from "./Button_1.module.css";

const Button_1 = (props: {
  text: string;
  font_size: string;
  on_click: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={styles.button_1}
      style={{ fontSize: props.font_size }}
      onClick={props.on_click}
    >
      {props.text}
    </button>
  );
};

export default Button_1;
