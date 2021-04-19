import React, { useState, useRef } from "react";

import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gravatarPath } from "../gravatar";

import MessagerField from "./MessagerField";
import MessageSubmitButton from "./MessageSubmitButton";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

function MessageInputField({ name }) {
  const inputEl = useRef(null);
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1} item={true}>
          <Avatar src={gravatarPath(name)} />
        </Grid>
        <Grid xs={10} item={true}>
          <MessagerField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid xs={1} item={true}>
          <MessageSubmitButton
            name={name}
            setText={setText}
            text={text}
            inputEl={inputEl}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageInputField;
