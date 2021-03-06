import React, { useEffect, useRef } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));
// material-uiを利用してメッセージに画像、名前、テキストを表示させる
const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  // メッセージの最新までスクロールさせる 
  useEffect(() => {
    if (isLastItem) {
      // ヌメっと投稿表示させる
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
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
