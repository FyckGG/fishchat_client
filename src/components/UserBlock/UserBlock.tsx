import React from "react";
import styles from "./UserBlock.module.css";

const UserBlock = (props: { login: string }) => {
  return <div className={styles.user_block}>{props.login}</div>;
};

export default UserBlock;
