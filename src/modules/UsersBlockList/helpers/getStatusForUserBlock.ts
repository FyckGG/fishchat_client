import React from "react";
import UserBlockStatus from "../textConstants/UserBlockStatus";
import UserRelationships from "../../../textConstants/userRelationships";

export const getStatusForUserBlock = (status: string) => {
  switch (status) {
    case UserRelationships.FRIEND:
      return UserBlockStatus.FRIEND;
    case UserRelationships.SUBSCRIBER_SOURCE:
      return UserBlockStatus.SUBSCRIBER_SOURCE;
    case UserRelationships.SUBSCRIBER_TARGET:
      return UserBlockStatus.SUBSCRIBER_TARGET;
    case UserRelationships.BLOCKED_SOURCE:
      return UserBlockStatus.BLOCKED_SOURCE;
    case UserRelationships.BLOCKED_TARGET:
      return UserBlockStatus.BLOCKED_TARGET;
    default:
      return "";
  }
};
