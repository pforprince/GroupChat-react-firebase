import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import db from "./FirebaseConfig";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    // { username: "Mohit", text: "How are you?" },
  ]);

  const [username, setUsername] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    // setMessages([...messages, { username: username, message: input }]); // to save the data in state locally!
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  }; 

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);

  useEffect(() => {
    setUsername(prompt("What's your name"));
  }, []);

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Add your message</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          color="primary"
          variant="contained"
          type="submit"
          onClick={sendMessage}
        >
          Send Message,
        </Button>
      </form>
      <br />
      {messages.map(({ id, message } ) => (
        <Message key={id} message={message} currentUsername={username} />
      ))
}
    </div>
  );
}

export default App;

// adding this to test