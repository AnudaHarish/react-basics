import { useRef, useEffect } from 'react'
import {ChatbotMessage} from './ChatbotMessage';
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const containerElm = useRef(null);
  useEffect(() => {
    const container = containerElm.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [chatMessages]);
  return (
    <div className="chat-message-container" ref={containerElm}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatbotMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.key}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;