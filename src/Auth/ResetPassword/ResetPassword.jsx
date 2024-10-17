import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhot:8000/user/setPassword",
        { password:password, email: email }
      );
      toast.success("Password reset successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div className="resetpassword">
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="verfication">
                <form onSubmit={handleSubmit}>
                  <h1 class="text-center">Set Password</h1>
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required
                    />
                    <button type="button" className="eye_btn">
                      <i className="fa-regular fa-eye"></i>
                    </button>
                    <span>Must be at least 8 characters.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm"
                      className="form-control"
                      name="confirm_pass"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Enter Confirm Password"
                      required
                    />
                    <button type="button" className="eye_btn">
                      <i className="fa-regular fa-eye"></i>
                    </button>
                    <span>Both passwords must match.</span>
                  </div>
                  <input type="submit" value="Submit" className="submit_btn" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default ResetPassword;
