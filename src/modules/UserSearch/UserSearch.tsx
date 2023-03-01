import React from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { Context, UserSearchContext } from "../../main";
//import ws from "./websockets/websocket";
import ws from "../../websocket";

const UserSearch = () => {
  const store = React.useContext(Context);
  const user_search_store = React.useContext(UserSearchContext);

  ws.addEventListener("message", (event) => {
    user_search_store.setUsersList(Object.values(JSON.parse(event.data).users));
  });

  const handleSearchTextChange: Function = (e: string) => {
    user_search_store.setSearchString(e);
    ws.send(
      JSON.stringify({
        type: import.meta.env.VITE_REACT_APP_WSS_USERFIND_TYPE,
        sender: store.user.id,
        message: e,
      })
    );
  };

  return <SearchBar changeSearchText={handleSearchTextChange} />;
};

export default UserSearch;
