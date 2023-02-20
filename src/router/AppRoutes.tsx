import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UnauthorizedRoutes, AuthorizedRoutes, RouteNames } from ".";
import { Context } from "../main";

const AppRoutes = () => {
  const store = React.useContext(Context);

  return (
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
            <Route path="*" element={<Navigate to={RouteNames.MAIN} />}></Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default AppRoutes;
