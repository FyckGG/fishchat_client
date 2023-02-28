import React from "react";
import { SendFollowButton } from "../SendFollowButton/SendFollowButton";
import { BanUserButton } from "../BanUserButton/BanUserButton";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";

export const BlockUserButtonPanel = (props: {
  target_user: UserDialogBlock;
}) => {
  return (
    <div>
      <SendFollowButton target_user={props.target_user} />
      <BanUserButton target_user={props.target_user} />
    </div>
  );
};