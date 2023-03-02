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

    this.users_list.map((user) => {
      if (user.id == user_id) user.status = status;
    });
  }
}

export default UserSearchStore;
