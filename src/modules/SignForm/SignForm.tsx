import React from "react";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import FillForm from "../../components/FillForm/FillForm";
import Tooltip_1 from "../../ui/Tooltip_1/Tooltip_1";
import validateEmail from "./helpers/validateEmail";
import validatePassword from "./helpers/validatePassword";
import { errorNotify } from "../../globalFunctions/erorrNotify";
import { succesNotify } from "../../globalFunctions/succesNotify";
import registration from "./api/registration";
import { sendIdToWebSocket } from "./api/sendIdToWebSocket";
import { Context } from "../../main";
import styles from "./SignForm.module.css";
import "react-toastify/dist/ReactToastify.css";

const SignForm = () => {
  const store = React.useContext(Context);
  const [email, setEmail] = React.useState("");
  const [isGoodEmail, setIsGoodEmail] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isGoodPassword, setIsGoodPassword] = React.useState(false);
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [isGoodRepeatPassword, setIsGoodRepeatPassword] = React.useState(false);
  const [isSendingData, setIsSendingData] = React.useState(false);

  const userRegistration = async (e: React.FormEvent<EventTarget>) => {
    try {
      e.preventDefault();
      setIsSendingData(true);
      const result = await registration(email, login, password);
      localStorage.setItem("token", result.acces_token);
      store.setAuth(true);
      store.setUser(result.user);
      sendIdToWebSocket(result.user.id);
      succesNotify("Succesful registration");
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
      <form className="sign_form" onSubmit={userRegistration}>
        <label>
          <div>E-mail</div>

          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsGoodEmail(validateEmail(e.target.value));
            }}
          />
          {email == "" ? (
            <></>
          ) : (
            <Tooltip_1
              is_show={!isGoodEmail}
              text="???????????????????????? email"
              styles={{
                marginLeft: "20rem",
                marginTop: "-2.5rem",
                color: "red",
              }}
            />
          )}
        </label>
        <label>
          <div>Login</div>
          <input
            type={"text"}
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
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
              setIsGoodPassword(validatePassword(e.target.value));
            }}
          />
          {password == "" ? (
            <></>
          ) : (
            <Tooltip_1
              is_show={!isGoodPassword}
              text="???????????????????? ????????????"
              styles={{
                marginLeft: "20rem",
                marginTop: "-2.5rem",
                color: "red",
              }}
            />
          )}
        </label>
        <label>
          <div>Repeat password</div>
          <input
            type={"password"}
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
              if (e.target.value === password) setIsGoodRepeatPassword(true);
              else setIsGoodRepeatPassword(false);
            }}
          />
          {repeatPassword == "" ? (
            <></>
          ) : (
            <Tooltip_1
              is_show={!isGoodRepeatPassword}
              text="???????????? ???? ??????????????????"
              styles={{
                marginLeft: "20rem",
                marginTop: "-2.5rem",
                color: "red",
              }}
            />
          )}
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
                value="Sign in"
                className={styles.disabled_submit}
                disabled={
                  !(
                    isGoodEmail &&
                    login &&
                    isGoodPassword &&
                    isGoodRepeatPassword
                  )
                }
              />
            </div>
          )}
        </label>
      </form>
    </FillForm>
  );
};

export default SignForm;
