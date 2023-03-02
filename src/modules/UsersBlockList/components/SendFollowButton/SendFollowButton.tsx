import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { Context } from "../../../../main";
import IconStatus from "../../../../textConstants/IconStatus";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import getSendFollowStatusByUserStatus from "../../helpers/getSendFollowStatusByUserStatus";
import sendUsersInteraction from "../../api/sendUsersInteraction";
import WebsocketSendClientTypes from "../../../../textConstants/websocketSendClientTypes";
import { observer } from "mobx-react-lite";

export const SendFollowButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const store = React.useContext(Context);

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
                  button_status == IconStatus.DEFAULT
                    ? await sendUsersInteraction(
                        store.user.id,
                        props.target_user.id,
                        WebsocketSendClientTypes.SEND_FOLLOW
                      )
                    : await sendUsersInteraction(
                        store.user.id,
                        props.target_user.id,
                        WebsocketSendClientTypes.CANCEL_FOLLOW
                      );
                }
          }
        />
      </div>
    );
  }
);
