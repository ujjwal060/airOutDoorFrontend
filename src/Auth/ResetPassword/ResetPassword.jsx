import React from 'react';
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className='resetpassword'>
      <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="verfication">
                        <form action="">
                            <h1 class="text-center">Reset Password</h1>  
                            <div class="field">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" name="password" value="" placeholder="Enter Password" required/>
                                <button class="eye_btn"><i class="fa-regular fa-eye"></i></button>
                                <span>Must be atleast 8 characters.</span>
                            </div>                            
                            <div class="field">
                                <label for="confirm">Confirm Password</label>
                                <input type="password" id="confirm" class="form-control" name="confirm_pass" value="" placeholder="Enter Confirm Password" required/>
                                <button  class="eye_btn"><i class="fa-regular fa-eye"></i></button>
                                <span>Both password must match.</span>
                            </div>
                            <Link to="/login">
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

export default ResetPassword;
