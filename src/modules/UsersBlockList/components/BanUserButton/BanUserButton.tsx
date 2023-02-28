import React from "react";
import { faBan } from "@fortawesome/free-solid-svg-icons";
//import sendFollow from "../../api/sendFollow";
import banUser from "../../api/banUser";
import cancelBanUser from "../../api/cancelBanUser";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { Context } from "../../../../main";
import { UserSearchContext } from "../../../../main";
import IconStatus from "../../../../textConstants/IconStatus";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
//import getSendFollowStatusByUserStatus from "../../helpers/getSendFollowStatusByUserStatus";
import getBanUserStatusByUserStatus from "../../helpers/getBanUserStatusByUserStatus";
import { observer } from "mobx-react-lite";

export const BanUserButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const store = React.useContext(Context);
    const userSearchStore = React.useContext(UserSearchContext);
    const button_status = getBanUserStatusByUserStatus(
      props.target_user.status
    );
    return (
      <div style={{ display: "inline" }}>
        <UserBlockIcon
          icon={faBan}
          icon_status={button_status}
          icon_action={async () => {
            const new_status =
              button_status == IconStatus.DEFAULT
                ? await banUser(store.user.id, props.target_user.id)
                : await cancelBanUser(store.user.id, props.target_user.id);
            userSearchStore.changeUserStatus(props.target_user.id, new_status);
          }}
        />
      </div>
    );
  }
);
