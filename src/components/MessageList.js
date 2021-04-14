import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

// firebaseから取得したデータ
// key -MYCUlOTdhGKoAloXY6B: value {name: "toshi", text: "ffff"}
//      ↓↓↓変更
// 下記を要素とする配列を作っていく
// {key -MYCUlOTdhGKoAloXY6B, value name: "toshi", text: "ffff"}

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          // ... ← 展開する
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
