import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function ListingDescription() {
  const [formData, setFormData] = useState({
    propery_nickname: "",
    category: "0",
    property_description: "",
    instant_booking: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.propery_nickname) {
      formErrors.propery_nickname = "Property Nickname is required";
    }
    if (!formData.property_description) {
      formErrors.property_description = "Property Description is required";
    }
    // Add other field validations if necessary
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      navigate("/listingprice", { state: { formData } });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="listingdescription">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form onSubmit={handleSubmit} className="add_listing">
                <div className="inner_div">
                  <h1>Description</h1>
                  <p className="mb-5">All Items Are Mandatory</p>
                  
                  <div className="field">
                    <label htmlFor="propery_nickname">Property Nickname</label>
                    <input
                      type="text"
                      name="propery_nickname"
                      className="form-control"
                      placeholder="Enter Property Nickname"
                      value={formData.propery_nickname}
                      onChange={handleChange}
                    />
                    {errors.propery_nickname && (
                      <p style={{ color: "red" }}>{errors.propery_nickname}</p>
                    )}
                  </div>
                  
                  <div className="field">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      className="form-control"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="0">Flats</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4">4 BHK</option>
                    </select>
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
                      value={formData.property_description}
                      onChange={handleChange}
                    />
                    {errors.property_description && (
                      <p style={{ color: "red" }}>
                        {errors.property_description}
                      </p>
                    )}
                  </div>
                  
                  <div className="field">
                    <label htmlFor="instant_booking">
                      <input
                        type="checkbox"
                        name="instant_booking"
                        id=""
                        style={{ marginRight: "6px" }}
                        checked={formData.instant_booking}
                        onChange={handleChange}
                      />
                      Allow instant booking? If checked, you will not have the
                      option to reject a booking request.
                    </label>
                  </div>
                  
                  <input
                    type="submit"
                    className="submit_btn"
                    value="Save & Next"
                  />
                </div>
                <div className="sidebar">
                  <div className="steps">
                    <div className="line"></div>
                    <div className="step active">
                      <span>1</span> Description
                    </div>
                    <div className="step">
                      <span>2</span> Price
                    </div>
                    <div className="step">
                      <span>3</span> Images
                    </div>
                    <div className="step">
                      <span>4</span> Details
                    </div>
                    <div className="step">
                      <span>5</span> Location
                    </div>
                    <div className="step">
                      <span>6</span> Calender
                    </div>
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

export default ListingDescription;
