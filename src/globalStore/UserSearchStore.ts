import { makeAutoObservable } from "mobx";
import UserDialogBlock from "../globalInterfaces/UserDialogBlock";

class UserSearchStore {
  search_string: string = "";
  users_list: UserDialogBlock[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchString(search_string: string) {
    this.search_string = search_string;
  }

  setUsersList(users_list: UserDialogBlock[] | null) {
    this.users_list = users_list;
  }

  changeUserStatus(user_id: string, status: string) {
    if (this.users_list == null) return;
    const user_for_change = this.users_list.filter(
      (user) => user.id == user_id
    );
    user_for_change[0].status = status;
    this.users_list.map((user) => {
      if (user.id == user_id) user = user_for_change[0];
    });
  }
}

export default UserSearchStore;
