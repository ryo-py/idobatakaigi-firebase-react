import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

function MessageList() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  // key: -MYeVLpUU_t4_rqoXXTI, value: {name: "ryo",text: "koko"}
  // write into,
  // {key: -MYeVLpUU_t4_rqoXXTI, name: "ryo", text: "koko"}

  useEffect(() => {
    console.log("useEffect");
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        console.log(messages);
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        console.log(newMessages);
        setMessages(newMessages);
      });
  }, []);
  return <div className={classes.root}>MessageList</div>;
}

export default MessageList;
