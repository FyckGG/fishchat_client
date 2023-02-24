import React from "react";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import UserBlock from "../../components/UserBlock/UserBlock";
import styles from "./UsersBlockList.module.css";

const UsersBlockList = (props: { users_list: UserDialogBlock[] | null }) => {
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
            <UserBlock key={user.id} login={user.login} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UsersBlockList;
