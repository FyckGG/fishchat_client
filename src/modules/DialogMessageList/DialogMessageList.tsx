import React, { LegacyRef } from "react";
import DialogMessageBlock from "../../components/DialogMessageBlock/DialogMessageBlock";
import DialogMessageStore from "../../globalStore/DialogMessageStore";
import changeMessageReadStatus from "./api/changeMessageReadStatus";
import { ClipLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrolldownButton from "./components/ScrolldownButton";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import styles from "./DialogMessageList.module.css";

const DialogMessageList = observer((props: { interlocutor_user: string }) => {
  const store = React.useContext(Context);

  const scroll_div_ref =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const [messagePart, setMessagePart] = React.useState(1);
  const [isMessagesLoading, setIsMessagesLoading] = React.useState(true);

  const dateParser = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  React.useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [isMessagesLoading]);

  React.useEffect(() => {
    const getMessages = async () => {
      if (props.interlocutor_user) {
        console.log("we get messages");
        const result = await DialogMessageStore.getMessagesForDialog(
          store.user.id,
          props.interlocutor_user,
          20
        );

        setIsMessagesLoading(false);
      }
    };
    getMessages();
  }, []);

  return (
    <div className={styles.dialog_message_list}>
      {isMessagesLoading ? (
        <ClipLoader color="#85e1f9" size="15rem" />
      ) : (
        <div
          id="scrollableDiv"
          className={styles.list_items}
          style={{
            height: "90vh",
            marginTop: "1rem",
            overflow: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
          ref={scroll_div_ref}
        >
          <InfiniteScroll
            dataLength={DialogMessageStore.getStoreCountDialogMessages(
              props.interlocutor_user
            )}
            next={() => {
              DialogMessageStore.getMoreMessagesForDialog(
                store.user.id,
                props.interlocutor_user,
                20,
                messagePart
              );
              setMessagePart(messagePart + 1);
            }}
            inverse={true}
            hasMore={
              !(
                DialogMessageStore.getStoreCountDialogMessages(
                  props.interlocutor_user
                ) ==
                DialogMessageStore.getCountDialogMessages(
                  props.interlocutor_user
                )
              )
            }
            loader={<ClipLoader color="#85e1f9" size="1rem" />}
            scrollableTarget="scrollableDiv"
          >
            {DialogMessageStore.message_list.map((message) => {
              if (
                (message.source_id != store.user.id &&
                  message.source_id != props.interlocutor_user) ||
                (message.target_id != store.user.id &&
                  message.target_id != props.interlocutor_user)
              )
                return;
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
          </InfiniteScroll>

          <ScrolldownButton messages_ref={scroll_div_ref} />
        </div>
      )}
    </div>
  );
});

export default DialogMessageList;
