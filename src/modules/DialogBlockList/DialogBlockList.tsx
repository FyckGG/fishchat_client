import React from "react";
import DialogBlock from "../../components/DialogBlock/DialogBlock";
import { Context } from "../../main";
import DialogMessageStore from "../../globalStore/DialogMessageStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../router";
import styles from "./DialogBlockList.module.css";

const DialogBlockList = observer(() => {
  const store = React.useContext(Context);
  const navigate = useNavigate();
  const [isDialogsLoading, setIsDialogsLoading] = React.useState(true);

  const dateParser = new Intl.DateTimeFormat("ru", {
    // надо бы в отдельный файл
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  React.useEffect(() => {
    const getDialogs = async () => {
      const getting_dialogs_resut = await DialogMessageStore.getDialogs(
        store.user.id
      );
    };
    getDialogs();
  }, []);
  return (
    <div className={styles.dialog_block_list}>
      {DialogMessageStore.interlocutor_list.map((interlocutor) => {
        const last_message = DialogMessageStore.getLastDialogMessage(
          interlocutor.interlocutor_id
        );
        if (last_message != null) {
          return (
            <div
              onClick={() => {
                navigate(
                  `${RouteNames.DIALOG}?target_user=${interlocutor.interlocutor_id}`
                );
              }}
            >
              <DialogBlock
                key={interlocutor.interlocutor_id}
                dialog_name={interlocutor.interlocutor_id}
                message={last_message.message_text}
                is_my_message={last_message.source_id == store.user.id}
                is_message_read={last_message.is_message_read}
                message_date={dateParser.format(
                  Date.parse(last_message.message_date)
                )}
                unread_messages_count={DialogMessageStore.getCountUnreadDialogMessages(
                  interlocutor.interlocutor_id
                )}
              />
            </div>
          );
        }
      })}
    </div>
  );
});

export default DialogBlockList;
