import React from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserBlock from "../../components/UserBlock/UserBlock";
import { BlockUserButtonPanel } from "./components/BlockUserButtonsPanel/BlockUserButtonPanel";
import ws from "../../websocket";
import WebsocketSendServerTypes from "../../textConstants/websocketSendServerTypes";
import { UserSearchContext } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./UsersBlockList.module.css";

const UsersBlockList = observer(
  (props: { users_list: UserDialogBlock[] | null }) => {
    const user_search_store = React.useContext(UserSearchContext);

    ws.addEventListener("message", (event) => {
      if (
        JSON.parse(event.data).message_type ==
        WebsocketSendServerTypes.NEW_STATUS
      )
        console.log(JSON.parse(event.data).new_status);
      user_search_store.changeUserStatus(
        JSON.parse(event.data).target_user_id,
        JSON.parse(event.data).new_status
      );
    });

    if (props.users_list !== null) {
    }
    return (
      <>
        {props.users_list ? (
          <div className={styles.users_block_list}>
            <div className={styles.notification_div}>
              {props.users_list.length == 0
                ? `Ничего не найдено`
                : `Результаты поиска по пользователям:`}
            </div>
            {props.users_list.map((user) => (
              <UserBlock
                key={user.id}
                user={user}
                children={<BlockUserButtonPanel target_user={user} />}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
);

export default UsersBlockList;
