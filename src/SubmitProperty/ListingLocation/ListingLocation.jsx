import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ListingLocation() {
  const location = useLocation();
  const previousData = location.state?.formData || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    zip_code: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMapClick = (lat, lng) => {
    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedData = {
      ...previousData,
      ...formData,
    };

    navigate("/listingcalendar", { state: { formData: combinedData } });
  };

  return (
    <div className="listinglocation">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form onSubmit={handleSubmit} className="add_listing">
                <div className="inner_div_location">
                  <h1>Location</h1>
                  <h2 className="text-center">Select Location</h2>
                  <p className="text-center">Pin on location to select</p>
                  <p className="mb-5">All Items Are Mandatory</p>

                  <div className="list-location">
                    <div className="field">
                      <iframe
                        // Google Maps iframe
                        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                        width="100%"
                        height="250"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                      <p className="text-center">Or Enter Manually</p>
                    </div>
                    <div className="field">
                      <label htmlFor="address">Address(Not Mandatory)</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter Your Address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="city">City(Not Mandatory)</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="Enter City Name"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="zip_code">Zip Code(Not Mandatory)</label>
                      <input
                        type="text"
                        name="zip_code"
                        className="form-control"
                        placeholder="Enter Zip Code"
                        value={formData.zip_code}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="state">State(Mandatory)</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="country">Country(Mandatory)</label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        placeholder="Enter Country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="address">
                        Physical Address Location will not be visible to users
                        on the AirOutdoors site. Once Airoutdoors and the Vendor
                        have approved a booking request, the approved user will
                        receive the listed property location.
                      </label>
                    </div>
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
                      <span><i className='bx bx-check'></i></span> Description
                    </div>
                    <div className="step active">
                      <span><i className='bx bx-check'></i></span> Price
                    </div>
                    <div className="step active">
                      <span><i className='bx bx-check'></i></span> Images
                    </div>
                    <div className="step active">
                      <span><i className='bx bx-check'></i></span> Details
                    </div>
                    <div className="step active">
                      <span>5</span> Location
                    </div>
                    <div className="step">
                      <span>6</span> Calendar
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

export default ListingLocation;
