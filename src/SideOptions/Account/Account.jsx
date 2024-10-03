import React from "react";
import logo from "../../images/logo.png";
import menu from "../../images/menu-icon.svg";
import user from "../../images/user-icn.svg";
import sixth from "../../images/avtar-placeholder.png";
import { Link } from "react-router-dom";
import SecondNav from "../SecondNav/SecondNav";

function Account() {
  return (
    <div className="account">
      <SecondNav/>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="account_form">
                <form action="">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="avtar_box">
                        <input type="file" name="avtar" id="" class="d-none" />
                        <img
                          src={sixth}
                          alt=""
                          width="90"
                          height="90"
                        />
                        <button class="avtarupload">Upload Photo</button>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="field">
                        <label for="full_name">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="full_name"
                          value=""
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                      <div class="field">
                        <label for="username">Username</label>
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          value=""
                          placeholder="Enter Username"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="field">
                        <label for="email">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          value=""
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <div class="field">
                        <label for="mobile">Mobile Number</label>
                        <input
                          type="text"
                          class="form-control"
                          name="mobile"
                          value=""
                          placeholder="Enter Mobile Number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="field">
                        <label for="about">About Me</label>
                        <input
                          type="text"
                          class="form-control"
                          name="about"
                          value=""
                          placeholder="Enter bio"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="place">I live in</label>
                        <input
                          type="text"
                          class="form-control"
                          name="place"
                          value=""
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="lang">I Speak</label>
                        <input
                          type="text"
                          class="form-control"
                          name="lang"
                          value=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="field">
                        <label for="website">Website</label>
                        <input
                          type="text"
                          class="form-control"
                          name="website"
                          value=""
                          placeholder="Enter Website"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="skype">Skype URL</label>
                        <input
                          type="text"
                          class="form-control"
                          name="skype"
                          value=""
                          placeholder="Enter URL"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="facebook">Facebook URL</label>
                        <input
                          type="text"
                          class="form-control"
                          name="facebook"
                          value=""
                          placeholder="Enter URL"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="field">
                        <label for="instagram">Instagram URL</label>
                        <input
                          type="text"
                          class="form-control"
                          name="instagram"
                          value=""
                          placeholder="Enter URL"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="linkedin">Linkedin URL</label>
                        <input
                          type="text"
                          class="form-control"
                          name="linkedin"
                          value=""
                          placeholder="Enter URL"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="field">
                        <label for="youtube">Youtube URL</label>
                        <input
                          type="text"
                          class="form-control"
                          name="youtube"
                          value=""
                          placeholder="Enter URL"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-12 text-center">
                      <input
                        type="submit"
                        class="submitbtn"
                        value="Save & Next"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="change_password_form">
                <h2 class="text-center mb-5">Change Password</h2>
                <form action="">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="field">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          name="password"
                          value=""
                          placeholder="Enter Password"
                          required
                        />
                        <button class="eye_btn">
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <span>Must be atleast 8 characters.</span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="field">
                        <label for="confirm">Confirm Password</label>
                        <input
                          type="password"
                          id="confirm"
                          class="form-control"
                          name="confirm_pass"
                          value=""
                          placeholder="Enter Confirm Password"
                          required
                        />
                        <button class="eye_btn">
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <span>Both password must match.</span>
                      </div>
                    </div>
                    <div class="col-sm-12 text-center">
                      <input type="submit" value="Submit" class="submit_btn" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
