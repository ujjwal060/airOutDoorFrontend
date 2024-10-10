import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ListingPrice() {
  const location = useLocation();
  const formData = location.state?.formData;
  const navigate = useNavigate();

  const [minRange, setMinRange] = useState(1000);
  const [maxRange, setMaxRange] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value < maxRange) {
      setMinRange(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > minRange) {
      setMaxRange(value);
    }
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    const dataToPass = {
      ...formData,
      priceRange: { min: minRange, max: maxRange },
    };

    navigate("/listingimage", { state: { formData: dataToPass } });
  };

  return (
    <div className="listingprice">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form onSubmit={handleSubmit} className="add_listing">
                <div className="inner_div">
                  <h1>Pricing</h1>
                  <h4>How many do you want to charge per night?</h4>
                  <h6 className="mt-4">
                    Price Range from ${minRange} to ${maxRange}
                  </h6>
                  <div className="range-slider mb-4">
                    <div className="values">
                      Price range from $<span id="minValue">{minRange}</span> to $
                      <span id="maxValue">{maxRange}</span>
                    </div>
                    <div className="range">
                      <input
                        type="range"
                        id="minRange"
                        name="minRange"
                        min="1000"
                        max="50000"
                        value={minRange}
                        onChange={handleMinChange}
                      />
                      <input
                        type="range"
                        id="maxRange"
                        name="maxRange"
                        min="1000"
                        max="50000"
                        value={maxRange}
                        onChange={handleMaxChange}
                      />
                    </div>
                  </div>
                  <p style={{ marginTop: "50px" }}>
                    To attract a wider range we suggest you to setting up multiple
                    rate plans.
                  </p>
                  <div className="guest-range">
                    <div className="guest-inner1 d-flex">
                      <h6>Guests Limit Per Day</h6>
                      <h4 style={{ marginLeft: "150px" }}>1</h4>
                    </div>
                    <div className="guest-inner2 d-flex">
                      <h6>Guests Price Per Day</h6>
                      <h4 style={{ marginLeft: "150px" }}>$1000</h4>
                    </div>
                  </div>
                  <h6 className="mt-3">Extra Option:</h6>
                  <p className="guest-para">
                    write Mark Lodging, Guided Hunt etc, if have any.
                  </p>
                  <ul style={{ fontSize: "13px" }}>
                    <li>
                      <p>
                        Vendors will receive a 10% Cancellation deposit fee for
                        each booking that is confirmed.
                      </p>
                    </li>
                    <li>
                      <p className="mb-5">
                        Vendor will secure 100% of their booking funds if a
                        cancellation is received within 7 days of Booking Date.
                      </p>
                    </li>
                  </ul>
                  <h6>Price per group size :</h6>

                  <div className="guest-range d-flex mt-4">
                    <div className="guest-inner1">
                      <h6>Guests</h6>
                      <h4>
                        <i className="bx bxs-user"></i> ⨯ 3
                      </h4>
                    </div>
                    <div
                      className="guest-inner2"
                      style={{ marginLeft: "120px" }}
                    >
                      <h6>Price</h6>
                      <h4>$1000</h4>
                    </div>
                  </div>
                  <div className="guest-range d-flex">
                    <div className="guest-inner1">
                      <h6>Guests</h6>
                      <h4>
                        <i className="bx bxs-user"></i> ⨯ 2
                      </h4>
                    </div>
                    <div
                      className="guest-inner2"
                      style={{ marginLeft: "120px" }}
                    >
                      <h6>Price</h6>
                      <h4>$800</h4>
                    </div>
                  </div>
                  <div className="guest-range d-flex mb-4">
                    <div className="guest-inner1">
                      <h6>Guests</h6>
                      <h4>
                        <i className="bx bxs-user"></i> ⨯ 1
                      </h4>
                    </div>
                    <div
                      className="guest-inner2"
                      style={{ marginLeft: "120px" }}
                    >
                      <h6>Price</h6>
                      <h4>$600</h4>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="termsAccepted">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        id="termsAccepted"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                      />
                      <a
                        href="##"
                        className="text-dark"
                        style={{ marginLeft: "10px" }}
                      >
                        Accept Terms and Conditions
                      </a>
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
                      <span>
                        <i className="bx bx-check"></i>
                      </span>{" "}
                      Description
                    </div>
                    <div className="step active">
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

export default ListingPrice;
