import {
  //   faMessage,
  //   faBan,
  //   faCheck,
  //   faPaperPlane,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

//   export default interface UserActionIcon {
//     icon: IconDefinition;
//     status: string;
//     action: React.MouseEventHandler;
//   }

class UserActionIcon {
  icon: IconDefinition;
  status: string;
  action: React.MouseEventHandler;
  constructor(
    icon: IconDefinition,
    status: string,
    action: React.MouseEventHandler
  ) {
    this.icon = icon;
    this.status = status;
    this.action = action;
  }
}

export default UserActionIcon;
