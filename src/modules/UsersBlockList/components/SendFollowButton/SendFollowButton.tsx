import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import sendFollow from "../../api/sendFollow";
import cancelFollow from "../../api/cancelFollow";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { Context } from "../../../../main";
import { UserSearchContext } from "../../../../main";
import IconStatus from "../../../../textConstants/IconStatus";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import getSendFollowStatusByUserStatus from "../../helpers/getSendFollowStatusByUserStatus";
import { observer } from "mobx-react-lite";

export const SendFollowButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const store = React.useContext(Context);
    const userSearchStore = React.useContext(UserSearchContext);
    const button_status = getSendFollowStatusByUserStatus(
      props.target_user.status
    );
    return (
      <div style={{ display: "inline" }}>
        <UserBlockIcon
          icon={faPaperPlane}
          icon_status={button_status}
          icon_action={
            button_status == IconStatus.DISABLED
              ? () => {}
              : async () => {
                  const new_status =
                    button_status == IconStatus.DEFAULT
                      ? await sendFollow(store.user.id, props.target_user.id)
                      : await cancelFollow(store.user.id, props.target_user.id);
                  userSearchStore.changeUserStatus(
                    props.target_user.id,
                    new_status
                  );
                }
          }
        />
      </div>
    );
  }
);
