import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import MessageList from "./MessageList";
import MessageInputField from "./MessageInputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

function Main({ name }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <MessageList />
        <MessageInputField name={name} />
      </div>
    </div>
  );
}

export default Main;
