import { useState } from 'react'
import { ChatBotInput } from './components/ChatBotInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App(){
        const [chatMessages, setChatMessages] = useState(
          [{
            message: 'hello chatbot',
            sender: 'user',
            key: 'Id1'
          }, {
            message: 'Hello! How can I help you?',
            sender: 'robot',
            key: 'Id2'
          }, {
            message: 'hello chatbot',
            sender: 'user',
            key: 'Id3'
          }, {
            message: 'Hello! How can I help you?',
            sender: 'robot',
            key: 'Id4'
          }]
        )
        // const chatMessages = array[0]; //gives the current data
        // const setChatMessages = array[1];
        return (
          <div className="app-container">
      
            <ChatMessages chatMessages={chatMessages} />
            <ChatBotInput 
              chatMessages={chatMessages} 
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
