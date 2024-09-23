import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        username,
        password,
      });
      toast.success(response?.data?.message);
      setTimeout(() => {
        navigate("/");
      }, 200);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const handleForgotPasswordClick = () => {
    navigate("/forgotpassword");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="verfication">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between">
                    <h1>Log in</h1>
                    <p className="hidden-xs">
                      No Account?
                      <br />
                      <Link
                        className="text-decoration-underline fw-bold text-dark"
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="username">Username or Email Address</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Username or Email address"
                      required
                    />
                  </div>
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
                  </div>
                  <div className="text-right">
                    <span
                      className="flex-end text-danger"
                      onClick={handleForgotPasswordClick}
                      style={{ cursor: "pointer" }}
                    >
                      Forget Password?
                    </span>
                  </div>
                  <input type="submit" value="Login" className="submit_btn" />
                  <p className="text-center hidden-sm">
                    No Account?
                    <span
                      className="text-decoration-underline fw-bold"
                      onClick={handleSignupClick}
                      style={{ cursor: "pointer" }}
                    >
                      Sign Up
                    </span>
                  </p>
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

export default Login;
