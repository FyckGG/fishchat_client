import React, { useState } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { UnauthRouteProps } from "./customRoutes/UnauthRoute";
import UnauthRoute from "./customRoutes/UnauthRoute";
import { MainPage } from "./pages/MainPage/MainPage";
import { ChatsPage } from "./pages/ChatsPage/ChatsPage";
import { Context } from "./main";
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";
import "./App.css";

const App = observer(() => {
  const store = React.useContext(Context);
  //const navigate = useNavigate();
  //const location = useLocation();

  const defaultProtectedRouteProps: Omit<UnauthRouteProps, "outlet"> = {
    isAuthenticated: store.isAuth,
    navigatePath: "/chats",
  };

  React.useEffect(() => {
    const checkAuthEffect = async () => {
      if (localStorage.getItem("token")) {
        await store.checkAuth();

        //if (location.pathname == "/" && store.isAuth) navigate("/chats");
      } else store.setIsloading(false);
    };
    checkAuthEffect();
  }, []);

  // React.useEffect(() => {
  //   console.log("ff" + store.isAuth);
  //   if (location.pathname == "/" && store.isAuth) navigate("/chats");
  // }, [store.isAuth]);

  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <UnauthRoute
                {...defaultProtectedRouteProps}
                outlet={<MainPage />}
              />
            }
          />
          <Route path="/chats" element={<ChatsPage />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
});

export default App;
