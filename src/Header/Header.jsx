import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/logo.png";
import menu from "../images/menu-icon.svg";
import user from "../images/user-icn.svg";
import first from "../images/user-black.svg";
import second from "../images/message.svg";
import third from "../images/booking.svg";
import fourth from "../images/heart.svg";
import fifth from "../images/nortification.svg";
import sixth from "../images/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext";
import axios from "axios";

function Header() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const [userdata, setUser] = useState("");
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference to the menu

  useEffect(() => {
    if (userId && token && !userdata) {
      fetch();
    }

    if (!userId || !token) {
      navigate("/");
    }
  }, [userId, token]);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  const fetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user/getUser/${userId}`
      );
      setUser(response?.data?.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
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
              {!isLoggedIn ? (
                <>
                  <Link to="/login" className="btn btn-dark log_in">
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-light sign_up"
                    style={{
                      border: "1px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/listingdescription"
                    className="btn btn-dark property_btn"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Submit Property
                  </Link>
                </>
              ) : (
                <>
                  <div className="menu1">
                    <button
                      className="menu"
                      onClick={toggleMenu}
                      style={{ background: "none", border: "none" }}
                    >
                      <img src={menu} alt="Menu" />
                    </button>
                    {menuOpen && (
                      <div className="menu_dropdown" ref={menuRef}>
                        <div className="user">
                          <img src={user} alt="User" />
                          {userdata.username}
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
                              data-bs-toggle="modal"
                              data-bs-target="#logoutModal"
                              className="link-menu"
                            >
                              <img src={sixth} alt="Log Out" /> Log Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* Logout Confirmation Modal */}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          aria-labelledby="logoutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h5 className="modal-title w-100 text-center" id="logoutModalLabel">
                  Confirm Logout
                </h5>
              </div>
              <div className="modal-body text-center">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{ width: "100px" }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                  data-bs-dismiss="modal"
                  style={{ width: "100px" }}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
    </div>
  );
}

export default Header;
