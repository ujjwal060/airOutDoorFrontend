import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header>
        <div className="container">
          <nav className="nav_bar">
            <Link to="/">
              <img src={logo} alt="Logo" width="250px" height="41px" />
            </Link>
            <div className="box-right">
              <Link to="/login">
                <a href="login.html" className="btn btn-dark log_in">Log In</a>
              </Link>
              <Link to="/signup">
                <a href="signup.html" className="btn btn-light sign_up"
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}>Sign Up</a>
              </Link>
              <Link to="/listingdescription">
                <a href="adding-listing.html" className="btn btn-dark property_btn" style={{whiteSpace: 'nowrap'}}>Submit Property</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
