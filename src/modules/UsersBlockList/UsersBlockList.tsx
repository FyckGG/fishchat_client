import React from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserBlock from "../../components/UserBlock/UserBlock";
import { BlockUserButtonPanel } from "./components/BlockUserButtonsPanel/BlockUserButtonPanel";
import { Context } from "../../main";
import styles from "./UsersBlockList.module.css";

const UsersBlockList = (props: { users_list: UserDialogBlock[] | null }) => {
  const store = React.useContext(Context);

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
};

export default UsersBlockList;
