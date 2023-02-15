import React, { ReactNode } from "react";
import styles from "./Tooltip_1.module.css";

const Tooltip_1 = (props: {
  is_show: boolean;
  text: string;
  styles?: React.CSSProperties;
}) => {
  const [show, setShow] = React.useState(props.is_show);
  React.useEffect(() => {
    setShow(props.is_show);
  }, [props.is_show]);
  return (
    <div>
      <div
        className={styles.tooltip}
        style={show ? { visibility: "visible", ...props.styles } : {}}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip_1;
