import React from "react";
//import MainPageInteractions from "../../modules/MainPageInteractions";
import MainPageGreeting from "../../components/MainPageGreeting/MainPageGreeting";
import SignForm from "../../modules/SignForm";
import LoginForm from "../../modules/LoginForm";
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./MainPage.module.css";

export const MainPage = observer(() => {
  const store = React.useContext(Context);
  const [contentType, setContentType] = React.useState(1);
  const handleFormChange: Function = (n: number) => {
    setContentType(n);
  };
  return (
    <div className={styles.main_page}>
      {store.isloading ? (
        <ClipLoader color="#85e1f9" size="15rem" />
      ) : (
        // <MainPageInteractions />
        <div className={styles.main_page_interactions}>
          <div>
            <MainPageGreeting switch_forms={handleFormChange} />
          </div>
          <div>{contentType == 0 ? <SignForm /> : <LoginForm />}</div>
        </div>
      )}
    </div>
  );
});
