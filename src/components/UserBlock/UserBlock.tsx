import React, { ReactNode } from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserBlockIcon from "../../ui/UserBlockIcon/UserBlockIcon";
import UserRelationships from "../../textConstants/userRelationships";
import { getStatusForUserBlock } from "../../modules/UsersBlockList/helpers/getStatusForUserBlock";
import { observer } from "mobx-react-lite";
import styles from "./UserBlock.module.css";

const UserBlock = observer(
  (props: { user: UserDialogBlock; children?: ReactNode }) => {
    return (
      <div className={styles.user_block}>
        <div className={styles.user_login}>{props.user.login}</div>
        <div className={styles.user_status}>
          {props.user.status == UserRelationships.DEFAULT
            ? ""
            : getStatusForUserBlock(props.user.status)}
        </div>
        <div className={styles.user_block_icons}>{props.children}</div>
      </div>
    );
  }
);

export default UserBlock;
