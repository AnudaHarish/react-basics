import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatBotInput.css'

export function ChatBotInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function getInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    //state will update the code at last
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    //creating the chatbot resoponse
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        key: crypto.randomUUID(),
      },
    ]);
    //delete the value in the input
    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={getInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}