import RobotImg from '../assets/robot.png'
import UserImg from '../assets/user.png'
import './ChatbotMessage.css'

export function ChatbotMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message, sender} = {props};
  return (
    <div
      className={
        sender === "robot"
          ? "message-robot-container"
          : "message-user-container"
      }
    >
      {sender === "robot" && <img src={RobotImg} width="50" />}
      <div className="chat-message">{message}</div>
      {sender === "user" && <img src={UserImg} width="50" />}
    </div>
  );
}