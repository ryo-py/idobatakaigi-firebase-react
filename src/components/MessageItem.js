import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const avatarPath = gravatarPath(name);
  const classes = useStyles();
  useEffect(() => {
    if (isLastItem) {
      // ここでスクロールする
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);
  return (
    <ListItem alignItems="flex-start" ref={ref}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
