import React from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { Context } from "../../main";
import ws from "./websockets/websocket";

const UserSearch = (props: { return_search_results: Function }) => {
  const store = React.useContext(Context);
  ws.onmessage = (event) => {
    props.return_search_results(event.data);
  };

  const handleSearchTextChange: Function = (e: string) => {
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
