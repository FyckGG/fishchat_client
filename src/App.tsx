import React from "react";

//import { UnauthRouteProps } from "./customRoutes/UnauthRoute";

import { Context } from "./main";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./router/AppRoutes";
import { observer } from "mobx-react-lite";
import "./App.css";

const App = observer(() => {
  const store = React.useContext(Context);
  //const navigate = useNavigate();
  //const location = useLocation();

  // const defaultProtectedRouteProps: Omit<UnauthRouteProps, "outlet"> = {
  //   isAuthenticated: store.isAuth,
  //   navigatePath: "/chats",
  // };

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
        {/* {store.isAuth ? (
          <>
            <Routes>
              {AuthorizedRoutes.map((route) => (
                <Route path={route.path} element={route.page}></Route>
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
                <Route path={route.path} element={route.page}></Route>
              ))}
              <Route
                path="*"
                element={<Navigate to={RouteNames.MAIN} />}
              ></Route>
            </Routes>
          </>
        )} */}
        <AppRoutes />
        <ToastContainer />
      </div>
    </div>
  );
});

export default App;
