import React from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserBlock from "../../components/UserBlock/UserBlock";
import { getActionsForUser } from "./helpers/getActionsForUser";
import { Context } from "../../main";
import styles from "./UsersBlockList.module.css";

const UsersBlockList = (props: { users_list: UserDialogBlock[] | null }) => {
  const store = React.useContext(Context);
  console.log(props.users_list);
  if (props.users_list !== null) {
    //console.log(props.users_list[0]);
    //console.log(getActionsForUser(props.users_list[0].status));
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
              icons_set={getActionsForUser(store.user.id, user.id, user.status)}
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
