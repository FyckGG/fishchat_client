import { faMessage } from "@fortawesome/free-solid-svg-icons";
import UserBlockIcon from "../../../../ui/UserBlockIcon/UserBlockIcon";
import { RouteNames } from "../../../../router";
import IconStatus from "../../../../textConstants/IconStatus";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import getSendMessageStatusByUserStatus from "../../helpers/getSendMessageStatusByUserStatus";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const SendMessageButton = observer(
  (props: { target_user: UserDialogBlock }) => {
    const navigate = useNavigate();
    const button_status = getSendMessageStatusByUserStatus(
      props.target_user.status
    );
    return (
      <div style={{ display: "inline" }}>
        <UserBlockIcon
          icon={faMessage}
          icon_status={button_status}
          icon_action={
            button_status == IconStatus.DISABLED
              ? () => {}
              : () => {
                  navigate(
                    `${RouteNames.DIALOG}?target_user=${props.target_user.id}`
                    //`${RouteNames.DIALOG}`
                  );
                }
          }
        />
      </div>
    );
  }
);
