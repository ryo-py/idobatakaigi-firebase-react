import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

function MessageInputField() {
  const classes = useStyles();
  return <div className={classes.root}>input field</div>;
}

export default MessageInputField;
