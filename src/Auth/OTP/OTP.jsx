import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function OTP() {
  return (
    <div className='otp'>
      <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="verfication">
                        <form action="" class="text-center">
                            <h1>OTP</h1>
                            <p>OTP has been send to your registered Email ID/Mobile number.</p>
                            <div id="verify">
                                <input class="input" type="text" inputmode="numeric" maxlength="1" />
                                <input class="input" type="text" inputmode="numeric" maxlength="1" />
                                <input class="input" type="text" inputmode="numeric" maxlength="1" />
                                <input class="input" type="text" inputmode="numeric" maxlength="1" />
                            </div>
                            <p>Didn’t receive the code? <a href="#" class="text-danger text-decoration-underline">Resend Again</a></p>
                            <Link to="/resetpassword">
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

export default OTP
