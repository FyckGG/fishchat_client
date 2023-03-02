import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UnauthorizedRoutes, AuthorizedRoutes, RouteNames } from ".";
import { ClipLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

import styles from "./AppRoutes.module.css";

const AppRoutes = observer(() => {
  const store = React.useContext(Context);

  return (
    <>
      {store.isloading ? (
        <div className={styles.loader}>
          <ClipLoader color="#85e1f9" size="15rem" />
        </div>
      ) : (
        <>
          {store.isAuth ? (
            <>
              <Routes>
                {AuthorizedRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.page}
                  ></Route>
                ))}
                <Route
                  path="*"
                  element={<Navigate to={RouteNames.CHATS} />}
                ></Route>
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                {UnauthorizedRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.page}
                  ></Route>
                ))}
                <Route
                  path="*"
                  element={<Navigate to={RouteNames.MAIN} />}
                ></Route>
              </Routes>
            </>
          )}
        </>
      )}
    </>
  );
});

export default AppRoutes;
