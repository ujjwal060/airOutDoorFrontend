import React, { useState, useEffect } from "react";
import "./chats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPhone,
  faEllipsisV,
  faPaperPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "./firebase"; // Import your Firestore instance
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

const dummyImage = "https://via.placeholder.com/50";

function Chats() {
  const navigate = useNavigate();
  const location = useLocation();
  const { vendorId, name, profileImage } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  // Fetch chat messages from Firestore
  useEffect(() => {
    const messagesRef = collection(db, "chats");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  // Function to send a new message
  const sendMessage = async () => {
    if (newMessage.trim() === "") {
      console.log("Message is empty, nothing to send.");
      return;
    }

    try {
      const messagesRef = collection(db, "chats");
      const newMessageData = {
        text: newMessage,
        senderId: localStorage.getItem("userId"), // Ensure userId is set
        vendorId: vendorId,
        profileImage: profileImage || dummyImage,
        timestamp: new Date(),
      };

      console.log("Sending message data: ", newMessageData); // Log the message data

      await addDoc(messagesRef, newMessageData);
      setNewMessage(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="container chat-container">
      {/* Header Section */}
      <div className="chat-header c-head d-flex align-items-center justify-content-between text-white">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="fa-lg" onClick={goBack} />
          <div className="d-flex align-items-center" style={{ marginLeft: "20px" }}>
            <img
              src={profileImage || dummyImage}
              alt="Profile"
              className="chat-profile-image rounded-circle me-2"
            />
            <span className="chat-username">{name}</span>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="fa-lg me-3" />
          <FontAwesomeIcon icon={faEllipsisV} className="fa-lg" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages p-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex mb-3 ${msg.senderId === localStorage.getItem("userId") ? "align-items-end justify-content-end" : "align-items-start"}`}
          >
            {msg.senderId !== localStorage.getItem("userId") && (
              <img
                src={msg.profileImage || dummyImage}
                alt="Profile"
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            )}
            <div className={`chat-bubble p-2 rounded ${msg.senderId === localStorage.getItem("userId") ? "bg-dark text-white" : "bg-light"}`}>
              <p className="mb-0">{msg.text}</p>
              <small className="text-muted">{new Date(msg.timestamp.toDate()).toLocaleTimeString()}</small>
            </div>
            {msg.senderId === localStorage.getItem("userId") && (
              <img
                src={dummyImage}
                alt="Profile"
                className="rounded-circle ms-2"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input d-flex align-items-center p-3 c-input">
        <FontAwesomeIcon icon={faSmile} className="fa-lg text-white me-3" />
        <input
          type="text"
          className="form-control me-3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevent form submission if inside a form
              sendMessage();
            }
          }}
          placeholder="Type a message"
        />
        <FontAwesomeIcon icon={faPaperPlane} className="fa-lg text-white" onClick={sendMessage} />
      </div>
    </div>
  );
}

export default Chats;
