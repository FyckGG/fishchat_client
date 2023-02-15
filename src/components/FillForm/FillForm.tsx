import React, { ReactNode } from "react";
import { Form } from "react-router-dom";
import FormWindow from "../../ui/FormWindow/FormWindow";
import styles from "./FillForm.module.css";

const FillForm = (props: { children: ReactNode }) => {
  return (
    <FormWindow>
      <div className={styles.fillform}>{props.children}</div>
    </FormWindow>
  );
};

export default FillForm;
