import React from "react";
import SecondNav from "../SecondNav/SecondNav";

function Notification() {
  return (
    <div className="notification">
      <SecondNav />
      <div className="container">
        <div class="content_box">
          <p>You Have 0 Unread Notifications</p>
          <button class="prev">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button class="next">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
