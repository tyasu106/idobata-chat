import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYOK48GkoAw2jdJDUfjglO72nm6k-Jco8",
  authDomain: "idobata-chat-5bfb9.firebaseapp.com",
  projectId: "idobata-chat-5bfb9",
  storageBucket: "idobata-chat-5bfb9.appspot.com",
  messagingSenderId: "707612334331",
  appId: "1:707612334331:web:86fd1d5bbdada07ce5785e",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({name, text}) => {
  messagesRef.push({ name, text });
};
