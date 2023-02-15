import React, { ReactNode } from "react";
import styles from "./FormWindow.module.css";

const FormWindow = (props: { children: ReactNode }) => {
  return <div className={styles.form_window}>{props.children}</div>;
};

export default FormWindow;
