import React from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { Context, UserSearchContext } from "../../main";
import WebsocketSendClientTypes from "../../textConstants/websocketSendClientTypes";
import WebsocketSendServerTypes from "../../textConstants/websocketSendServerTypes";
import ws from "../../websocket";
import { once } from "mobx/dist/internal";

const UserSearch = () => {
  const store = React.useContext(Context);
  const user_search_store = React.useContext(UserSearchContext);

  React.useEffect(() => {
    user_search_store.setSearchString("");
  }, []);

  ws.addEventListener(
    "message",
    (event) => {
      if (
        JSON.parse(event.data).message_type ==
        WebsocketSendServerTypes.FIND_USER
      )
        user_search_store.setUsersList(
          Object.values(JSON.parse(event.data).users)
        );
    },
    { once: true }
  );

  const handleSearchTextChange: Function = (e: string) => {
    user_search_store.setSearchString(e);
    ws.send(
      JSON.stringify({
        //type: import.meta.env.VITE_REACT_APP_WSS_USERFIND_TYPE,
        type: WebsocketSendClientTypes.USER__SEARCH,
        sender: store.user.id,
        message: e,
      })
    );
  };

  return <SearchBar changeSearchText={handleSearchTextChange} />;
};

export default UserSearch;
