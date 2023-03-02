import React from "react";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { Context } from "../../../../main";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import sendUsersInteraction from "../../api/sendUsersInteraction";
import WebsocketSendClientTypes from "../../../../textConstants/websocketSendClientTypes";
import { observer } from "mobx-react-lite";

export const DeleteFriendButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const store = React.useContext(Context);

    const button_status = "default";
    return (
      <div style={{ display: "inline" }}>
        <UserBlockIcon
          icon={faUserMinus}
          icon_status={button_status}
          alt_activated_style={true}
          icon_action={async () => {
            await sendUsersInteraction(
              store.user.id,
              props.target_user.id,
              WebsocketSendClientTypes.DELETE_FRIEND
            );
          }}
        />
      </div>
    );
  }
);
