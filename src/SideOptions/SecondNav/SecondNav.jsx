import React from "react";
import img1 from "../../images/user-black.svg";
import img2 from "../../images/message.svg";
import img3 from "../../images/booking.svg";
import img4 from "../../images/heart.svg";
import img5 from "../../images/nortification.svg";
import { Link } from "react-router-dom";

function SecondNav() {
  return (
    <div className="secondnav">
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="nav_menu">
                <ul>
                  <li>
                    <Link to="/account" class="" style={{textDecoration: "none"}}>
                      <img src={img1} alt="" /> My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/message" class="" style={{textDecoration: "none"}}>
                      <img src={img2} alt="" /> Messages
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" class="" style={{textDecoration: "none"}}>
                      <img src={img3} alt="" /> My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link to="/favorites" class="" style={{textDecoration: "none"}}>
                      <img src={img4} alt="" /> Favourites
                    </Link>
                  </li>
                  <li>
                    <Link to="/notification" class="" style={{textDecoration: "none"}}>
                      <img src={img5} alt="" /> Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondNav;
