import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import MessageItem from "./MessageItem";

import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
  },
});

const MessageList = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    messagesRef
      .orderByKey()
      .limitToLast(20)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        // console.log(newMessages);
        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;
  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;
        console.log(isLastItem);
        console.log({ name });
        return (
          <MessageItem
            isLastItem={isLastItem}
            key={key}
            name={name}
            text={text}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
