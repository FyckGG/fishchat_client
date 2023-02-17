import React from "react";
import ExitButton from "../../ui/ExitButton/ExitButton";
import logout from "./api/logout";
import { Context } from "../../main";
import styles from "./Logout.module.css";

const Logout = () => {
  const store = React.useContext(Context);

  const userLogout = async () => {
    try {
      const result = await logout();
      localStorage.removeItem("token");
      store.setAuth(false);
      store.setUser({});
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <div className={styles.logout}>
      <ExitButton on_click={userLogout} />
    </div>
  );
};

export default Logout;
