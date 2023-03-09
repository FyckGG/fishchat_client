import React from "react";
import ScrollDownButton from "../../../ui/ScrollDownButton/ScrollDownButton";
import { scrollMessagesDown } from "../helpers/scrollMessagesDown";
import styles from "./ScrollDownButton.module.css";

const ScrolldownButton = (props: {
  messages_ref: React.MutableRefObject<HTMLInputElement>;
}) => {
  return (
    <div className={styles.scroll_button}>
      <ScrollDownButton
        on_click={() => {
          scrollMessagesDown(props.messages_ref);
        }}
      />
    </div>
  );
};

export default ScrolldownButton;
