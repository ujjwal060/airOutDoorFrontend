import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className='forgotpassword'>
      <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="verfication">
                        <form action="">
                            <h1 class="text-center">Forgot Password</h1>  
                            <div class="field">
                                <label for="username">Email or Mobile Number</label>
                                <input type="text" id="username" class="form-control" name="username" value="" placeholder="Enter Email or Mobile Number" required/>
                            </div>    
                            <Link to="/otp">
                            <input type="submit" value="Submit" class="submit_btn" />       
                            </Link>           
                        </form>
                    </div>
                </div>                
            </div>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword;


