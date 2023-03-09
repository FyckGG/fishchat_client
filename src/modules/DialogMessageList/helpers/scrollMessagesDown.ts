import React from "react";

export const scrollMessagesDown = (
  messages_ref: React.MutableRefObject<HTMLInputElement>
) => {
  console.log(messages_ref.current.scrollTop);
  messages_ref.current.scrollTo(0, messages_ref.current.scrollHeight);
};
