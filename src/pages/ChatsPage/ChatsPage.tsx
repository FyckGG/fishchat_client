import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import UserSearch from "../../modules/UserSearch";
import UserSearch from "../../modules/UserSearch";
import UsersBlockList from "../../modules/UsersBlockList/UsersBlockList";
import Logout from "../../modules/Logout";
import UserDialogBlock from "../../globalInterfaces/UserDialogBlock";
import { UserSearchContext } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./ChatsPage.module.css";

export const ChatsPage = observer(() => {
  const user_search_context = React.useContext(UserSearchContext);
  const [foundUsers, setFoundUsers] = React.useState<UserDialogBlock[] | null>(
    null
  );
  const handleFoundUsersChange = (e: string) => {
    // setFoundUsers(e ? Object.values(JSON.parse(e).users) : null);
    //console.log(Object.values(JSON.parse(e).users));
  };
  return (
    <div>
      <Navbar>
        <UserSearch return_search_results={handleFoundUsersChange} />
        <div className={styles.logout}>
          <Logout />
        </div>
      </Navbar>
      <div className={styles.users_block_list}>
        {/* <UsersBlockList users_list={foundUsers} /> */}
        {user_search_context.search_string == "" ? (
          <></>
        ) : (
          <UsersBlockList users_list={user_search_context.users_list} />
        )}
      </div>
    </div>
  );
});
