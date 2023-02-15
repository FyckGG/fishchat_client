import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./globalStore/store";
import "./index.css";

const store = new Store();
export const Context = React.createContext(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Context.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
