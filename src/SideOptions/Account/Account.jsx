import React, { useState, useEffect, useRef } from "react";
import sixth from "../../images/avtar-placeholder.png";
import SecondNav from "../SecondNav/SecondNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Account() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [selectedFile, setSelectedFile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    if (userId && token) {
      fetchUserData();
    }
  }, [userId, token]);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    about: "",
    place: "",
    lang: "",
    website: "",
    skype: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://44.196.192.232:8000/user/getUser/${userId}`
      );
      const userData = response?.data?.data;
      setFormData({
        fullName: userData.fullName || "",
        username: userData.username || "",
        email: userData.email || "",
        mobile: userData.mobileNumber || "",
        about: userData.about || "",
        place: userData.place || "",
        lang: userData.lang || "",
        website: userData.website || "",
        skype: userData.skype || "",
        facebook: userData.facebook || "",
        instagram: userData.instagram || "",
        linkedin: userData.linkedin || "",
        youtube: userData.youtube || "",
        imageUrl: userData.imageUrl || sixth,
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToUpdate = {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        mobileNumber: formData.mobile,
        about: formData.about,
        place: formData.place,
        lang: formData.lang,
        website: formData.website,
        skype: formData.skype,
        facebook: formData.facebook,
        instagram: formData.instagram,
        linkedin: formData.linkedin,
        youtube: formData.youtube,
      };

      const formDataToSend = new FormData();
      Object.entries(dataToUpdate).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      if (selectedFile) {
        formDataToSend.append("images", selectedFile);
      }

      const response = await axios.put(
        `http://44.196.192.232:8000/user/update/${userId}`,
        formDataToSend
      );
      fetchUserData();
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Both passwords must match.");
      return;
    }
    try {
      const response = await axios.put(`http://44.196.192.232:8000/user/changePassword/${userId}`, {
        password,
      });
      toast.success(response?.data?.message);
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  if (!userId || !token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="account">
      <SecondNav />
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="account_form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-2">
                      <div class="avtar_box">
                        <input
                          type="file"
                          name="avtar"
                          id=""
                          ref={fileInputRef}
                          class="d-none"
                          onChange={handleFileChange}
                        />
                        <img
                          src={formData.imageUrl}
                          alt=""
                          width="150"
                          height="100"
                        />
                        <button
                          type="button"
                          class="avtarupload"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Upload Photo
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="field">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={formData.fullName}
                          placeholder="Enter full name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={formData.username}
                          placeholder="Enter Username"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="field">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          placeholder="Enter your email address"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          value={formData.mobile}
                          placeholder="Enter Mobile Number"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="about">About Me</label>
                        <input
                          type="text"
                          className="form-control"
                          name="about"
                          value={formData.about}
                          placeholder="Enter bio"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="place">I live in</label>
                        <input
                          type="text"
                          className="form-control"
                          name="place"
                          value={formData.place}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="lang">I Speak</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lang"
                          value={formData.lang}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          value={formData.website}
                          placeholder="Enter Website"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="skype">Skype URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="skype"
                          value={formData.skype}
                          placeholder="Enter URL"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="facebook">Facebook URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="facebook"
                          value={formData.facebook}
                          placeholder="Enter URL"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="instagram">Instagram URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="instagram"
                          value={formData.instagram}
                          placeholder="Enter URL"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="linkedin">LinkedIn URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="linkedin"
                          value={formData.linkedin}
                          placeholder="Enter URL"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field">
                        <label htmlFor="youtube">YouTube URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="youtube"
                          value={formData.youtube}
                          placeholder="Enter URL"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      className="submitbtn"
                      value="Update Profile"
                    />
                  </div>
                </form>
              </div>
              <div class="change_password_form">
                <h2 class="text-center mb-5">Change Password</h2>
                <form onSubmit={handleChangePassword}>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="field">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
      <ToastContainer />
    </div>
  );
}

export default Account;
