import IconStatus from "../../../textConstants/IconStatus";
import UserRelationships from "../../../textConstants/userRelationships";

const getSendFollowStatusByUserStatus = (user_status: string) => {
  switch (user_status) {
    case UserRelationships.SUBSCRIBER_SOURCE:
      return IconStatus.ACTIVATED;
    case UserRelationships.BLOCKED_SOURCE:
      return IconStatus.DISABLED;
    case UserRelationships.BLOCKED_TARGET:
      return IconStatus.DISABLED;
    case UserRelationships.SUBSCRIBER_TARGET:
      return IconStatus.DISABLED;
    default:
      return IconStatus.DEFAULT;
  }
};

export default getSendFollowStatusByUserStatus;
