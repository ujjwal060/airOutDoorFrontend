import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import lofoSignUp from "../images/logo-white.png";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div className='signup'>
           <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="signup">
                        <div class="d-flex justify-content-between">
                            <h1>Sign up</h1>
                            <div class="d-flex align-items-center hidden-xs">
                                <span>Welcome to </span> <img class="logo_white" src={lofoSignUp} alt="logo"/>
                            </div>                            
                        </div>
                        <form action="">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" id="full_name" class="form-control" name="full_name" value="" placeholder="Enter full name" required/>
                                </div>
                                <div class="col-md-6">
                                    <label for="email">Email address</label>
                                    <input type="email" id="email" class="form-control" name="email" value="" placeholder="Enter your email address" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" class="form-control" name="username" value="" placeholder="Enter Username" required/>
                                </div>
                                <div class="col-md-6">
                                    <label for="mobile">Mobile Number</label>
                                    <input type="number" id="mobile" class="form-control" name="mobile" value="" placeholder="Enter Mobile Number" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">                                    
                                    <label for="adventures" class="mr-3">
                                        <input type="radio" name="redio" id="adventures" selected />
                                        For Book Adventures
                                    </label>
                                    <label for="properties">
                                        <input type="radio" name="redio" id="properties" />
                                        For Host Properties
                                    </label>
                                    <br/>
                                    <label for="chkbk">
                                        <input type="checkbox" name="chkbk" id="chkbk" required />
                                        I agree with terms & conditions
                                    </label>
                                    <br/>
                                    <label for="chkbk2">
                                        <input type="checkbox" name="chkbk2" id="chkbk2" required />
                                        By signing up as a member, you agree to receive a one-time SMS automated text messages from Airoutdoors at the phone number used when signing up. Consent is not a condition of any booking. Msg and data rates may apply. View Terms and Conditions for additional information. *Exclusions apply
                                    </label>
                                    <br/>
                                    <div class="text-center">
                                        <input type="submit" value="Sign up" class="submit_btn" /><br/>
                                        <span>Already Account?<Link className="text-decoration-underline fw-bold text-light" to="/login">Log in</Link></span>
                                    </div>                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        </div>
    </section>
    </div>
  )
}

export default signup;