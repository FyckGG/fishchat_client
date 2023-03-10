import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserSearch from "../../modules/UserSearch";
import DialogBlockList from "../../modules/DialogBlockList";
import UsersBlockList from "../../modules/UsersBlockList";
import Logout from "../../modules/Logout";
import { UserSearchContext } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./ChatsPage.module.css";

export const ChatsPage = observer(() => {
  const user_search_context = React.useContext(UserSearchContext);

  return (
    <div>
      <Navbar>
        <UserSearch />
        <div className={styles.logout}>
          <Logout />
        </div>
      </Navbar>
      <DialogBlockList />
      <div className={styles.users_block_list}>
        {user_search_context.search_string == "" ? (
          <></>
        ) : (
          <UsersBlockList users_list={user_search_context.users_list} />
        )}
      </div>
    </div>
  );
});
