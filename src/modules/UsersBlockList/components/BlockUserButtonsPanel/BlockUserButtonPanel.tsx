import { AddFriendButton } from "../AddFriendButton/AddFriendButton";
import { SendMessageButton } from "../SendMessageButton/SendMessageButton";
import { SendFollowButton } from "../SendFollowButton/SendFollowButton";
import { DeleteFriendButton } from "../DeleteFriendButton/DeleteFriendButton";
import { BanUserButton } from "../BanUserButton/BanUserButton";
import UserDialogBlock from "../../../../globalInterfaces/UserDialogBlock";
import UserRelationships from "../../../../textConstants/userRelationships";
import { observer } from "mobx-react-lite";
import styles from "./BlockUserButtonPanel.module.css";

export const BlockUserButtonPanel = observer(
  (props: { target_user: UserDialogBlock }) => {
    return (
      <div>
        {props.target_user.status == UserRelationships.SUBSCRIBER_TARGET ? (
          <div className={styles.responce_offer_buttons}>
            <AddFriendButton target_user={props.target_user} />
          </div>
        ) : (
          <></>
        )}
        <div className={styles.main_buttons}>
          <SendMessageButton target_user={props.target_user} />
          {props.target_user.status == UserRelationships.FRIEND ? (
            <DeleteFriendButton target_user={props.target_user} />
          ) : (
            <SendFollowButton target_user={props.target_user} />
          )}
          <BanUserButton target_user={props.target_user} />
        </div>
      </div>
    );
  }
);
