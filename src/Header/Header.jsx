import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import menu from "../images/menu-icon.svg";
import user from "../images/user-icn.svg";
import first from "../images/user-black.svg";
import second from "../images/message.svg";
import third from "../images/booking.svg";
import fourth from "../images/heart.svg";
import fifth from "../images/nortification.svg";
import sixth from "../images/logout.svg";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <header>
        <div className="container">
          <nav className="nav_bar">
            <Link to="/">
              <img src={logo} alt="Logo" width="250px" height="41px" />
            </Link>
            <div className="box-right">
              <Link to="/login" className="btn btn-dark log_in">
                Log In
              </Link>
              <Link
                to="/signup"
                className="btn btn-light sign_up"
                style={{ border: "1px solid black", backgroundColor: "white" }}>
                Sign Up
              </Link>
              <Link
                to="/listingdescription"
                className="btn btn-dark property_btn"
                style={{ whiteSpace: "nowrap" }}
              >
                Submit Property
              </Link>

              <div className="menu1">
                <a href="#" className="menu" onClick={toggleMenu}>
                  <img src={menu} alt="Menu" />
                </a>
                {menuOpen && (
                  <div className="menu_dropdown">
                    <div className="user">
                      <img src={user} alt="User" />
                      XYZ.123
                    </div>
                    <ul>
                      <li>
                        <Link to="account" className="link-menu">
                          <img src={first} alt="My Account" /> My Account
                        </Link>
                      </li>
                      <li>
                        <Link to="message" className="link-menu">
                          <img src={second} alt="Messages" /> Messages
                        </Link>
                      </li>
                      <li>
                        <Link to="booking" className="link-menu">
                          <img src={third} alt="My Bookings" /> My Bookings
                        </Link>
                      </li>
                      <li>
                        <Link to="favorites" className="link-menu">
                          <img src={fourth} alt="Favourites" /> Favourites
                        </Link>
                      </li>
                      <li>
                        <Link to="notification" className="link-menu">
                          <img src={fifth} alt="Notifications" /> Notifications
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="login"
                          data-bs-toggle="modal"
                          data-bs-target="#logout"
                          className="link-menu"
                        >
                          <img src={sixth} alt="Log Out" /> Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
