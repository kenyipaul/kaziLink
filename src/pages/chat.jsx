import "../sass/chat.scss";
import { useState } from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
export default function Chat (){
    
    return(
        <div className="chat">
            <ChatLeft/>
            <ChatRight/>
            
        </div>
    ) 
} 



const ChatLeft = () => {

  return (
    <div className="chat-left-section">
        <IoChatbubbleEllipses style={{ fontSize: "45px" }} className= "chat-icon"  />
        <div className="chat-contacts">
            <div className="chat-profile"></div>
            <div className="user">
                <h3>John Doe</h3>
                <p>last message</p>
            </div>
      </div>
      <div className="chat-contacts">
        <div className="chat-profile"></div>
        <div className="user">
          <h3>John Doe</h3>
          <p>last message</p>
        </div>
      </div>
    </div>
  );
}



function ChatRight(){
    return (
      <div className="chat-right-section">
        <div className="chat-right-contacts">
          <div className="chat-right-profile"></div>
          <div className="user">
            <h3>John Doe</h3>
          </div>
        </div>

        <div className="user2">
          <div className="user2-profile"></div>
          <div className="user2-info">
            <div className="user2-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                enim quis omnis provident
              </p>
            </div>
            <h3>9:00pm</h3>
          </div>
        </div>
        <div className="user1">
          <div className="user1-profile"></div>
          <div className="user1-info">
            <div className="user1-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                enim quis omnis provident
              </p>
            </div>
            <h3>9:10pm</h3>
          </div>
        </div>
        <div className="chat-right-input">
          <input type="text" placeholder="Type a message..." />
          <IoSend style={{ fontSize: "35px", color: "#2194F2" }} />
        </div>
      </div>
    );
}