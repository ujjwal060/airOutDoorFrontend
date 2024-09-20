import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import footerLogo from "../images/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-12 text-center">
                    <img src={footerLogo} alt="" width="320" class="img-fluid my-3" />
                    <p>Travel helps companies manage payments easily.</p>
                </div>
            </div>
            <div class="row  mb-5">
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="footer_widget">
                        <h4>Company</h4>
                        <ul class="footer_link">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="#">Guide</a></li>
                            <li><Link to="faq">FAQ</Link></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Customer Service Help</a></li>
                            <li><a href="#">Safety Resources Center</a></li>
                        </ul>
                    </div>                    
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="footer_widget">
                        <Link to="./contactus" class="btn btn-dark big">Contact Us!</Link>
                        <div class="icon-box">
                            <i class="fa fa-phone-square" aria-hidden="true"></i> +88888888
                        </div>
                        <div class="icon-box">
                            <i class="fa-solid fa-square-envelope"></i> xyz@support.com
                        </div>
                        <div class="social_links">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-solid fa-infinity"></i></a></li>
                            </ul>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="footer_widget">
                        <h4>Destinations</h4>
                        <ul class="footer_link">
                            <li><a href="#">New York</a></li>
                            <li><a href="#">Montana</a></li>
                            <li><a href="#">Wisconsin</a></li>
                            <li><a href="#">Alaska</a></li>
                            <li><a href="#">Chicago</a></li>
                            <li><a href="#">Georgetown</a></li>
                            <li><a href="#">Des moines</a></li>
                        </ul>
                    </div>                    
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <p class="copyright text-center">Copyright @ Air Outdoors . All Rights Reserved.</p>
                </div>
            </div>         
        </div>
    </div>
  )
}

export default Footer;