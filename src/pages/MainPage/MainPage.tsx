import React from "react";
import MainPageInteractions from "../../modules/MainPageInteractions";
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./MainPage.module.css";

export const MainPage = observer(() => {
  const store = React.useContext(Context);
  return (
    <div>
      {store.isloading ? (
        <ClipLoader color="#85e1f9" size="15rem" />
      ) : (
        <MainPageInteractions />
      )}
    </div>
  );
});
