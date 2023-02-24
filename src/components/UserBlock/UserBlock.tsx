import React from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserActionIcon from "../../modules/UsersBlockList/classes/UserActionIcon";
import UserBlockIcon from "../../ui/UserBlockIcon/UserBlockIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faBan,
  faCheck,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import UserRelationships from "../../textConstants/userRelationships";
import styles from "./UserBlock.module.css";

const UserBlock = (props: {
  user: UserDialogBlock;
  icons_set: UserActionIcon[];
}) => {
  console.log(props.icons_set);
  return (
    <div className={styles.user_block}>
      <div className={styles.user_login}>{props.user.login}</div>
      <div className={styles.user_status}>
        {props.user.status == UserRelationships.DEFAULT
          ? ""
          : props.user.status}
      </div>
      <div className={styles.user_block_icons}>
        {/* <UserBlockIcon
          icon={faMessage}
          icon_status={"activated"}
          icon_action={() => {
            console.log("gg");
          }}
        /> */}
        {props.icons_set.map((icon) => (
          <UserBlockIcon
            icon={icon.icon}
            icon_status={icon.status}
            icon_action={icon.action}
          ></UserBlockIcon>
        ))}
      </div>
    </div>
  );
};

export default UserBlock;
