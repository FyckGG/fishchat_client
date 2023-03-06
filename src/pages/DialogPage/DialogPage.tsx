import DialogMessageList from "../../modules/DialogMessageList";
import SendMessagePanel from "../../modules/SendMessagePanel";
import { useSearchParams } from "react-router-dom";
import styles from "./DialogPage.module.css";

export const DialogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div className={styles.dialog_div}>
        {/* <DialogMessageBlock />
        <DialogMessageBlock /> */}
        <DialogMessageList />
        <div className={styles.send_message_panel}>
          <SendMessagePanel target_user={searchParams.get("target_user")} />
        </div>
      </div>
    </div>
  );
};
