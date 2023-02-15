import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Context } from "./main";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const store = React.useContext(Context);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    } else store.setIsloading(false);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
