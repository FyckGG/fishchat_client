import React from "react";
import IconStatus from "../../textConstants/IconStatus";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import styles from "./UserBlockIcon.module.css";

const UserBlockIcon = (props: {
  icon: FontAwesomeIconProps["icon"];
  icon_status: string;
  icon_action: React.MouseEventHandler;
  alt_activated_style?: boolean;
}) => {
  return (
    <div
      className={
        props.icon_status == IconStatus.DEFAULT
          ? `${styles.icon_default} ${styles.icon}`
          : props.icon_status == IconStatus.ACTIVATED &&
            props.alt_activated_style
          ? `${styles.icon_alt_activated} ${styles.icon}`
          : props.icon_status == IconStatus.ACTIVATED &&
            !props.alt_activated_style
          ? `${styles.icon_activated} ${styles.icon}`
          : `${styles.icon_disabled} ${styles.icon}`
      }
    >
      <FontAwesomeIcon icon={props.icon} onClick={props.icon_action} />
    </div>
  );
};

export default UserBlockIcon;
