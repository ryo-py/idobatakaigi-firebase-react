import React, { useState } from "react";

import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gravatarPath } from "../gravatar";

import MessagerField from "./MessagerField";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

function MessageInputField({ name }) {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1} item={true}>
          <Avatar src={gravatarPath(name)} />
        </Grid>
        <Grid xs={10} item={true}>
          <MessagerField name={name} setText={setText} text={text} />
        </Grid>
        <Grid xs={1} item={true}>
          <button>送信</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageInputField;
