import React, { useRef } from "react";
import DialogMessageBlock from "../../components/DialogMessageBlock/DialogMessageBlock";
import ws from "../../websocket";
import WebsocketSendServerTypes from "../../textConstants/websocketSendServerTypes";
import DialogMessageStore from "./store/DialogMessageStore";
import changeMessageReadStatus from "./api/changeMessageReadStatus";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./DialogMessageList.module.css";

const DialogMessageList = observer(() => {
  const arr_ref: any[] = [];
  const store = React.useContext(Context);
  const dateParser = new Intl.DateTimeFormat("ru");
  ws.onmessage = (event) => {
    if (
      JSON.parse(event.data).message_type ==
      WebsocketSendServerTypes.NEW_DIALOG_MESSAGE
    )
      DialogMessageStore.addNewMessage(JSON.parse(event.data).new_message);
    console.log(JSON.parse(event.data).new_message);
  };

  // if (DialogMessageStore.message_list != null)
  //   DialogMessageStore.message_list.map((message) => {
  //     const ref = useRef();

  //   });

  return (
    <div className={styles.dialog_message_list}>
      {DialogMessageStore.message_list != null &&
      DialogMessageStore.message_list.length != 0 ? (
        <div className={styles.list_items}>
          {/* {DialogMessageStore.message_list.map((message) => (
            <DialogMessageBlock
              key={message._id}
              message_text={message.message_text}
              message_date={dateParser.format(Date.parse(message.message_date))}
              is_my_message={message.source_id == store.user.id}
              is_read={message.is_message_read}
            />
          ))} */}
          {DialogMessageStore.message_list.map((message) => {
            // const ref = useRef();
            if (
              message.target_id == store.user.id &&
              !message.is_message_read
            ) {
              //console.log("dont proshitano bleat");
              changeMessageReadStatus(message._id);
            }
            return (
              // <div ref={ref}>
              <DialogMessageBlock
                key={message._id}
                message_text={message.message_text}
                message_date={dateParser.format(
                  Date.parse(message.message_date)
                )}
                is_my_message={message.source_id == store.user.id}
                is_read={message.is_message_read}
              />
              // </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>Диалог пуст</div>
      )}
    </div>
  );
});

export default DialogMessageList;
