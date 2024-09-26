import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import lofoSignUp from "../images/logo-white.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    mobileNumber: "",
    userType: "adventures",
    termsAccepted: false,
    smsConsent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://44.196.192.232:8000/user/signup",
        formData
      );
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate("/verification", { state: { email: formData.email } });
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="signup">
                <div className="d-flex justify-content-between">
                  <h1>Sign up</h1>
                  <div className="d-flex align-items-center hidden-xs">
                    <span>Welcome to </span>
                    <img className="logo_white" src={lofoSignUp} alt="logo" />
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        id="full_name"
                        className="form-control"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter Username"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mobile">Mobile Number</label>
                      <input
                        type="text"
                        id="mobile"
                        className="form-control"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                        placeholder="Enter Mobile Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="adventures" className="mr-3">
                        <input
                          type="radio"
                          name="userType"
                          id="adventures"
                          value="adventures"
                          checked={formData.userType === "adventures"}
                          onChange={handleInputChange}
                        />
                        For Book Adventures
                      </label>
                      <label htmlFor="properties">
                        <input
                          type="radio"
                          name="userType"
                          id="properties"
                          value="properties"
                          checked={formData.userType === "properties"}
                          onChange={handleInputChange}
                        />
                        For Host Properties
                      </label>
                      <br />
                      <label htmlFor="chkbk">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          id="chkbk"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          required
                        />
                        I agree with terms & conditions
                      </label>
                      <br />
                      <label htmlFor="chkbk2">
                        <input
                          type="checkbox"
                          name="smsConsent"
                          id="chkbk2"
                          checked={formData.smsConsent}
                          onChange={handleInputChange}
                          required
                        />
                        By signing up as a member, you agree to receive a
                        one-time SMS automated text messages from Airoutdoors...
                      </label>
                      <br />
                      <div className="text-center">
                        <input
                          type="submit"
                          value="Sign up"
                          className="submit_btn"
                        />
                        <br />
                        <span>
                          Already have an account?
                          <Link
                            className="text-decoration-underline fw-bold text-light"
                            to="/login"
                          >
                            Log in
                          </Link>
                        </span>
                      </div>
                      {loading && <p>Loading...</p>}
                    </div>
                  </div>
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

export default Signup;
