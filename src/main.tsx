import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./globalStore/store";
import UserSearchStore from "./globalStore/userSearchStore";
import "./index.css";

const store = new Store();
const user_search_store = new UserSearchStore();
export const Context = React.createContext(store);
export const UserSearchContext = React.createContext(user_search_store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Context.Provider value={store}>
    <UserSearchContext.Provider value={user_search_store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserSearchContext.Provider>
  </Context.Provider>
);
