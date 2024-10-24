import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Calendar1 from "./Calendar1/Calendar1";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListingCalendar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [selectedDates, setSelectedDates] = useState({
    checkIn: null,
    checkOut: null,
  });

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleDateChange = (checkIn, checkOut) => {
    setSelectedDates({ checkIn, checkOut });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append('checkIn', selectedDates.checkIn);
    formDataToSend.append('checkOut', selectedDates.checkOut);

    formData.images.forEach((image) => {
      console.log(image);
      
      formDataToSend.append('images', image);
    });
    try {
      await axios.post("http://44.196.192.232:8000/host/add", formDataToSend);
      toast.success("Listing saved successfully!");

      setTimeout(() => {
        navigate("/listingresponse");
      }, 2000);
    } catch (error) {
      toast.error("Failed to save the listing.");
    }
  };

  return (
    <div className="listingcalendar">
      <ToastContainer />
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form className="add_listing" onSubmit={handleSubmit}>
                <div className="inner_div">
                  <h1>Calendar</h1>
                  <p className="mb-4">• All Items Are Mandatory</p>
                  <h2 className="mb-5">
                    Pick The Dates For Check-in & Check-Out
                  </h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field">
                        <Calendar1
                          monthOffset={0}
                          onDateChange={handleDateChange}
                          selectedDates={selectedDates} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="property_description">
                      Property Description
                    </label>
                    <input
                      type="text"
                      name="property_description"
                      className="form-control"
                      placeholder="Describe Your Listing"
                      defaultValue={formData.property_description || ""}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="instant_booking">
                      <input
                        type="checkbox"
                        name="instant_booking"
                        style={{ marginRight: "6px" }}
                        defaultChecked={formData.instant_booking || false}
                      />
                      Do You Want To Allow 30+ Night Stand.
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="submit_btn"
                    value="Save & Next"
                  />
                </div>
                {/* Sidebar for steps */}
                <div className="sidebar">
                  <div className="steps">
                    <div className="line"></div>
                    {/* Add steps here */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingCalendar;
