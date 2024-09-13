import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png";

function Header() {
  return (
    <div className='header'>
      <header>
        <div className="container">
          <nav className="nav_bar">
            <a href="index.html">
              <img src={logo} alt="Logo" width="250px" height="41px" />
            </a>
            <div className="box-right">
              <a href="login.html" className="btn btn-dark log_in">Log In</a>
              <a href="signup.html" className="btn btn-secondary sign_up">Sign Up</a>
              <a href="adding-listing.html" className="btn btn-dark property_btn">Submit Property</a>                 
            </div>
          </nav>                        
        </div>
      </header>
    </div>
  );
}

export default Header;
