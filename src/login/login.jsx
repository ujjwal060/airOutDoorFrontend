import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function login() {
  return (
    <div className='login'>
        <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="verfication">
                        <form action="account.html">
                            <div class="d-flex align-items-center justify-content-between">
                                <h1>Log in</h1>
                                <p class="hidden-xs">No Account?<br/><Link className="text-decoration-underline fw-bold text-dark" to="/signup">Sign Up</Link></p>
                            </div>
                            <div class="field">
                                <label for="username">Username or Email Address</label>
                                <input type="text" id="username" class="form-control" name="username" value="" placeholder="Enter Username or Email address" required/>
                            </div>
                            <div class="field">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" name="password" value="" placeholder="Enter Password" required/>
                                <button  class="eye_btn"><i class="fa-regular fa-eye"></i></button>
                            </div>
                            <div class="text-right">
                                <Link class="flex-end text-danger"  to="/forgotpassword">Forget Password?</Link>
                            </div>                      
                            <input type="submit" value="Submit" class="submit_btn" />
                            <p class="text-center hidden-sm">No Account? <a class="text-decoration-underline fw-bold" href="signup.html">Sign Up</a></p>                 
                        </form>
                    </div>
                </div>                
            </div>
        </div>
    </section>
    </div>
  )
}

export default login;