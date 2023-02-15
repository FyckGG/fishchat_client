import React from "react";
import GreetingText from "../../ui/GreetingText/GreetingText";
import Button_1 from "../../ui/Button_1/Button_1";
import styles from "./MainPageGreeting.module.css";

const MainPageGreeting = (props: { switch_forms: Function }) => {
  const handleSwitchForms = (n: number) => {
    props.switch_forms(n);
  };
  return (
    <div className={styles.greeting}>
      <div>
        <GreetingText />
      </div>
      <div className={styles.greeting_buttons}>
        <Button_1
          text="Log in"
          font_size="1.5em"
          on_click={() => {
            handleSwitchForms(1);
          }}
        />
      </div>
      <div className={styles.greeting_buttons}>
        <Button_1
          text="Sign in"
          font_size="1.5em"
          on_click={() => {
            handleSwitchForms(0);
          }}
        />
      </div>
    </div>
  );
};

export default MainPageGreeting;
