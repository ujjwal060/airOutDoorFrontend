import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function OTP() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    try {
      const response = await axios.post(
        "http://localhost:8000/user/verifyCode",
        { verificationCode: otpCode, email: email }
      );
      toast.success("OTP verified successfully!");
      setTimeout(() => {
        navigate("/resetpassword",{state:{email:email}});
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/sendOTP", {
        email: email,
      });
      if (response.status === 200) {
      toast.success("OTP resent successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="otp">
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="verfication">
                <form onSubmit={handleSubmit} class="text-center">
                  <h1>OTP</h1>
                  <p>
                    OTP has been send to your registered Email ID.
                  </p>
                  <div id="verify">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        className="input"
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                    ))}
                  </div>
                  <p>
                    Didn't receive the code?{" "}
                    <a
                      href="#"
                      className="text-danger text-decoration-underline"
                      onClick={handleResend}
                    >
                      Resend Again
                    </a>
                  </p>
                  <input type="submit" value="Verify" className="submit_btn" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default OTP;
