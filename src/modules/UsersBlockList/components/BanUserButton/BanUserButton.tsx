import React from "react";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { Context } from "../../../../main";
import IconStatus from "../../../../textConstants/IconStatus";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import getBanUserStatusByUserStatus from "../../helpers/getBanUserStatusByUserStatus";
import sendUsersInteraction from "../../api/sendUsersInteraction";
import WebsocketSendClientTypes from "../../../../textConstants/websocketSendClientTypes";
import { observer } from "mobx-react-lite";

export const BanUserButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const store = React.useContext(Context);
    const button_status = getBanUserStatusByUserStatus(
      props.target_user.status
    );
    return (
      <div style={{ display: "inline" }}>
        <UserBlockIcon
          icon={faBan}
          icon_status={button_status}
          alt_activated_style={true}
          icon_action={async () => {
            button_status == IconStatus.DEFAULT
              ? await sendUsersInteraction(
                  store.user.id,
                  props.target_user.id,
                  WebsocketSendClientTypes.BAN
                )
              : await sendUsersInteraction(
                  store.user.id,
                  props.target_user.id,
                  WebsocketSendClientTypes.CANCEL_BAN
                );
          }}
        />
      </div>
    );
  }
);
