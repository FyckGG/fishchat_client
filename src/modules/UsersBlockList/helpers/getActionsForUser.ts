import UserRelationships from "../../../textConstants/userRelationships";
import IconStatus from "../../../textConstants/IconStatus";
import UserActionIcon from "../classes/UserActionIcon";
import sendFollow from "../api/sendFollow";
import {
  faMessage,
  faBan,
  faCheck,
  faPaperPlane,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const getActionsForUser = (
  source_user_id: string,
  target_user_id: string,
  user_status: string
) => {
  switch (user_status) {
    //case UserRelationships.DEFAULT:
    default:
      return [
        new UserActionIcon(faMessage, IconStatus.DISABLED, () => {
          console.log("gg");
        }),
        new UserActionIcon(faBan, IconStatus.DEFAULT, () => {
          console.log("bb");
        }),
        new UserActionIcon(faPaperPlane, IconStatus.DEFAULT, () => {
          sendFollow(source_user_id, target_user_id);
        }),
      ];
  }
};
