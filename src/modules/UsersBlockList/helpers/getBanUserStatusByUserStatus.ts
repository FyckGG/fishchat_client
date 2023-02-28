import IconStatus from "../../../textConstants/IconStatus";
import UserRelationships from "../../../textConstants/userRelationships";

const getBanUserStatusByUserStatus = (user_status: string) => {
  switch (user_status) {
    case UserRelationships.BLOCKED_SOURCE:
      return IconStatus.ACTIVATED;
    default:
      return IconStatus.DEFAULT;
  }
};

export default getBanUserStatusByUserStatus;
