import IconStatus from "../../../textConstants/IconStatus";
import UserRelationships from "../../../textConstants/userRelationships";

const getSendMessageStatusByUserStatus = (user_status: string) => {
  switch (user_status) {
    // case UserRelationships.SUBSCRIBER_SOURCE:
    //   return IconStatus.ACTIVATED;
    // case UserRelationships.BLOCKED_SOURCE:
    //   return IconStatus.DISABLED;
    // case UserRelationships.SUBSCRIBER_TARGET:
    //   return IconStatus.DISABLED;
    // default:
    //   return IconStatus.DEFAULT;
    case UserRelationships.FRIEND:
      return IconStatus.DEFAULT;
    default:
      return IconStatus.DISABLED;
  }
};

export default getSendMessageStatusByUserStatus;
