import React from "react";
import DialogMessageBlock from "../../components/DialogMessageBlock/DialogMessageBlock";

const DialogMessageList = () => {
  const arr: number[] = [1, 2, 3, 4, 4, 4, 2, 3, 2];
  return (
    <div>
      {arr.map((message) => (
        <DialogMessageBlock
          message_text={"cdcdcdcdcdc"}
          message_date={"11 сентября 228 г"}
          is_my_message={false}
          is_read={true}
        />
      ))}
    </div>
  );
};

export default DialogMessageList;
