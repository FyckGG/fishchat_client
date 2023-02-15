import React from "react";
import MainPageGreeting from "../../components/MainPageGreeting/MainPageGreeting";
import SignForm from "../SignForm/SignForm";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from "./MainPageInteractions.module.css";

export const MainPageInteractions = () => {
  const [contentType, setContentType] = React.useState(1);
  const handleFormChange: Function = (n: number) => {
    setContentType(n);
  };
  return (
    <div className={styles.main_page_interactions}>
      <div>
        <MainPageGreeting switch_forms={handleFormChange} />
      </div>
      <div>{contentType == 0 ? <SignForm /> : <LoginForm />}</div>
    </div>
  );
};
