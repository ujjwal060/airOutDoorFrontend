import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import img6 from "../../images/user1.png";
import Img2 from "../../images/user2.png";
import Img3 from "../../images/user3.png";
import Img4 from "../../images/user4.png";
import SecondNav from "../SecondNav/SecondNav";

function Message() {
  const navigate = useNavigate();  // Hook to handle navigation

  // Function to handle message box click and navigate to /chats
  const openChat = () => {
    navigate("/chats");
  };

  return (
    <div className="message">
      <SecondNav />
      <div className="container" style={{ margin: "-50px auto 50px auto" }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="searchbar">
              <div className="search_box w-75 rounded-3">
                <form method="POST" action="">
                  <input
                    className="p-3 rounded-3 bg-none"
                    type="search"
                    name="search"
                    placeholder="Search by host name"
                  />
                  <button className="search_btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="message_box" onClick={openChat}>
                <img src={img6} alt="" />
                <div className="content">
                  <h4>Owner 1</h4>
                  <p>Hey! whatsapp? how can I help you?</p>
                </div>
              </div>
              <div className="message_box" onClick={openChat}>
                <img src={Img2} alt="" />
                <div className="content">
                  <h4>Owner 2</h4>
                  <p>Hey! whatsapp? how can I help you?</p>
                </div>
              </div>
              <div className="message_box" onClick={openChat}>
                <img src={Img3} alt="" />
                <div className="content">
                  <h4>Owner 3</h4>
                  <p>Hey! whatsapp? how can I help you?</p>
                </div>
              </div>
              <div className="message_box" onClick={openChat}>
                <img src={Img4} alt="" />
                <div className="content">
                  <h4>Owner 4</h4>
                  <p>Hey! whatsapp? how can I help you?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Message;
