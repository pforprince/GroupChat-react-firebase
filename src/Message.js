import React from "react";
import "./App.css";
import Card from "@material-ui/core/Card";

function Message({ message, currentUsername }) {
  return (
    <Card
      className={
        currentUsername === message.username ? "message_current" : "message"
      }
    >
      {`${message.username}: `}
      {message.message}
    </Card>
  );
}


export default Message;
// message_current class is used if the user is sending message, means it'll show on the right side
// while in message class, other users messages will be displayed on the left side