import React from "react";
import "./chats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPhone,
  faEllipsisV,
  faPaperPlane,
  faSmile,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

const dummyImage = "https://via.placeholder.com/50";

function Chats() {
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, vendorId, name, profileImage } = location.state || {};

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container chat-container">
      {/* Header Section */}
      <div className="chat-header c-head d-flex align-items-center justify-content-between text-white">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="fa-lg"
            onClick={goBack}
          />
          <div
            className="d-flex align-items-center"
            style={{ marginLeft: "20px" }}
          >
            <img
              src={profileImage || "https://via.placeholder.com/50"}
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

      {/* Chat Date */}
      <div className="text-center my-2">
        <span className="chat-date">TODAY</span>
      </div>

      <div className="chat-messages p-3">
        <div className="d-flex align-items-start mb-3">
          <img
            src={profileImage || "https://via.placeholder.com/50"}
            alt="Profile"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
            className="rounded-circle me-2"
          />
          <div
            className="chat-bubble p-2 rounded"
            style={{ backgroundColor: "#DBDBDB" }}
          >
            <p className="mb-0">
              Absolutely! ✨ I'm all in for ice cream. I'll bring my favorite
              flavors. What's your preference?
            </p>
            <small className="text-muted">3:37 PM</small>
          </div>
        </div>

        <div className="d-flex align-items-end justify-content-end mb-3">
          <div className="chat-bubble bg-dark text-white p-2 rounded">
            <p className="mb-0">
              Awesome! 🍕 I love chocolate chip cookie dough. Looking forward to
              pizza party on Friday!!
            </p>
            <div className="d-flex justify-content-between">
              <small className="text-muted" style={{ color: "#fff" }}>
                3:29 PM
              </small>
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="fa-xs text-white ms-2"
              />
            </div>
          </div>
          <img
            src={dummyImage}
            alt="Profile"
            className="rounded-circle ms-2"
            width="40"
            height="40"
          />
        </div>
      </div>

      <div className="chat-input d-flex align-items-center p-3 c-input">
        <FontAwesomeIcon icon={faSmile} className="fa-lg text-white me-3" />
        <input
          type="text"
          className="form-control me-3"
          placeholder="Type a message"
        />
        <FontAwesomeIcon icon={faPaperPlane} className="fa-lg text-white" />
      </div>
    </div>
  );
}

export default Chats;