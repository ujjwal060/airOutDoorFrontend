import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://44.196.192.232:8000/user/forgate", { email });
      if (response.status === 200) {
        toast.success("OTP sent successfully!");
        setTimeout(() => {
          navigate("/otp",{state:{email:email}});
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="forgotpassword">
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="verfication">
                <form  onSubmit={handleSubmit}>
                  <h1 class="text-center">Forgot Password</h1>
                  <div class="field">
                    <label for="username">Email or Mobile Number</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <input type="submit" value="Send OTP" class="submit_btn" />
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

export default ForgotPassword;
