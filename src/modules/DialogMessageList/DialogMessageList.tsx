import React from "react";
import DialogMessageBlock from "../../components/DialogMessageBlock/DialogMessageBlock";
import DialogMessageStore from "../../globalStore/DialogMessageStore";
import changeMessageReadStatus from "./api/changeMessageReadStatus";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./DialogMessageList.module.css";

const DialogMessageList = observer(
  (props: { interlocutor_user: string | null }) => {
    const store = React.useContext(Context);
    const dateParser = new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    React.useEffect(() => {
      console.log("effect in dialogmessagelist");
      if (props.interlocutor_user)
        DialogMessageStore.getMessagesForDialog(
          store.user.id,
          props.interlocutor_user
        );
    }, []);

    return (
      <div className={styles.dialog_message_list}>
        {DialogMessageStore.message_list.length != 0 ? (
          <div className={styles.list_items}>
            {DialogMessageStore.message_list.map((message) => {
              if (
                message.target_id == store.user.id &&
                !message.is_message_read
              ) {
                changeMessageReadStatus(message._id);
              }
              return (
                <DialogMessageBlock
                  key={message._id}
                  message_text={message.message_text}
                  message_date={dateParser.format(
                    Date.parse(message.message_date)
                  )}
                  is_my_message={message.source_id == store.user.id}
                  is_read={message.is_message_read}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>Диалог пуст</div>
        )}
      </div>
    );
  }
);

export default DialogMessageList;
