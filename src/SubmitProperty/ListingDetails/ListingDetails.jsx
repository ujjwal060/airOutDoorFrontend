import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ListingDetails() {
  const [formData, setFormData] = useState({
    property_name: "",
    acreage: "",
    guided_hunt: "",
    guest_limit: "0",
    lodging: "0",
    shooting_range: "",
    extended_details: "0",
    instant_booking: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const previousData = location.state?.formData || {};

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.property_name ||
      !formData.acreage ||
      !formData.guided_hunt ||
      !formData.shooting_range
    ) {
      setError("All fields are mandatory.");
      return;
    }

    setError("");

    const combinedData = {
      ...previousData,
      ...formData,
    };

    navigate("/listinglocation", { state: { formData: combinedData } });
  };

  return (
    <div className="listingdetails">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form onSubmit={handleSubmit} className="add_listing">
                <div className="inner_div">
                  <h1>Details</h1>
                  <p className="mb-5">All Items Are Mandatory</p>
                  
                  {/* Property Name */}
                  <div className="field">
                    <label htmlFor="property_name">Property Name</label>
                    <input
                      type="text"
                      name="property_name"
                      className="form-control"
                      placeholder="Enter Property Name"
                      value={formData.property_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  {/* Acreage */}
                  <div className="field">
                    <label htmlFor="acreage">Acreage</label>
                    <input
                      type="text"
                      name="acreage"
                      className="form-control"
                      placeholder="Enter Acreage"
                      value={formData.acreage}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  {/* Guided Hunt */}
                  <div className="field">
                    <label htmlFor="guided_hunt">Guided Hunt</label>
                    <input
                      type="text"
                      name="guided_hunt"
                      className="form-control"
                      placeholder="Enter"
                      value={formData.guided_hunt}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  {/* Guest Limit */}
                  <div className="field">
                    <label htmlFor="guest_limit">Guest Limit/Day</label>
                    <select
                      name="guest_limit"
                      className="form-control"
                      value={formData.guest_limit}
                      onChange={handleInputChange}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  
                  {/* Lodging */}
                  <div className="field">
                    <label htmlFor="lodging">Lodging</label>
                    <select
                      name="lodging"
                      className="form-control"
                      value={formData.lodging}
                      onChange={handleInputChange}
                    >
                      <option value="0">Select Options</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  
                  {/* Shooting Range */}
                  <div className="field">
                    <label htmlFor="shooting_range">Shooting Range</label>
                    <input
                      type="text"
                      name="shooting_range"
                      className="form-control"
                      placeholder="Enter Shooting Range"
                      value={formData.shooting_range}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Extended Details */}
                  <div className="field">
                    <label htmlFor="extended_details">Optional Extended Details</label>
                    <select
                      name="extended_details"
                      className="form-control"
                      value={formData.extended_details}
                      onChange={handleInputChange}
                    >
                      <option value="0">Mark Options Below</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  
                  {/* Instant Booking */}
                  <div className="field">
                    <label htmlFor="instant_booking">
                      <input
                        type="checkbox"
                        name="instant_booking"
                        checked={formData.instant_booking}
                        onChange={handleInputChange}
                        style={{ marginRight: "6px" }}
                      />
                      Allow instant booking? If checked, you will not have the option to reject a booking request.
                    </label>
                  </div>
                  
                  {/* Display error message */}
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  
                  {/* Save & Next Button */}
                  <input
                    type="submit"
                    className="submit_btn"
                    value="Save & Next"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingDetails;
