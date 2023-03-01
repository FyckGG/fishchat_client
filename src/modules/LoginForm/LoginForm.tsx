import React from "react";
import authorization from "./api/authorization";
import { succesNotify } from "../../globalFunctions/succesNotify";
import { errorNotify } from "../../globalFunctions/erorrNotify";
import FillForm from "../../components/FillForm/FillForm";
import { ClipLoader } from "react-spinners";
import { Context } from "../../main";
import { sendIdToWebSocket } from "./api/sendIdToWebsocket";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const store = React.useContext(Context);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSendingData, setIsSendingData] = React.useState(false);

  const userAuthorization = async (e: React.FormEvent<EventTarget>) => {
    try {
      e.preventDefault();
      setIsSendingData(true);
      const result = await authorization(email, password);
      localStorage.setItem("token", result.acces_token);
      store.setAuth(true);
      store.setUser(result.user);
      sendIdToWebSocket(result.user.id);
      succesNotify("Succesful authorization");
      setIsSendingData(false);
    } catch (e: any) {
      const error_response_json = e.response.json();

      error_response_json.then((result: any) => {
        errorNotify(result.error);
      });
      setIsSendingData(false);
    }
  };
  return (
    <FillForm>
      <form onSubmit={userAuthorization}>
        <label>
          <div>E-mail</div>
          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <div>Password</div>
          <input
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          {isSendingData ? (
            <div className={styles.loader}>
              <ClipLoader color="#85e1f9" />
            </div>
          ) : (
            <div>
              <input
                type="submit"
                value="Log in"
                disabled={email === "" || password === ""}
              />
            </div>
          )}
        </label>
      </form>
    </FillForm>
  );
};
