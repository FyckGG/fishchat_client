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
}

export default UserSearchStore;
