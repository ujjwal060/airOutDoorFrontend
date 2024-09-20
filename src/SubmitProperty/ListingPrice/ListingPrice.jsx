import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ListingPrice() {
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(500);

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

  return (
    <div className="listingprice">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center listh1">Add New Listing</h1>
              <form action="" class="add_listing">
                <div class="inner_div">
                  <h1>Pricing</h1>
                  <h4>How many do you want to charge per night?</h4>
                  <h6 className="mt-4">
                    Price Range from ${minRange} to ${maxRange}
                  </h6>
                  <div class="range-slider mb-4">
                    <div class="values">
                      Price range from $<span id="minValue">20</span> to $
                      <span id="maxValue">80</span>
                    </div>
                    <div class="range">
                      <input
                        type="range"
                        id="minRange"
                        name="minRange"
                        min="0"
                        max="500"
                        value={minRange}
                        onChange={handleMinChange}
                      />
                      <input
                        type="range"
                        id="maxRange"
                        name="maxRange"
                        min="0"
                        max="500"
                        value={maxRange}
                        onChange={handleMaxChange}
                      />
                    </div>
                  </div>
                  <p style={{ marginTop: "50px" }}>
                    To attract wider range we suggest you to setting up multiple
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
                        <i class="bx bxs-user"></i> ⨯ 3
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
                        <i class="bx bxs-user"></i> ⨯ 2
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
                        <i class="bx bxs-user"></i> ⨯ 1
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
                  <div class="field">
                    <label for="instant_booking">
                      <input type="checkbox" name="instant_booking" id="" />
                      <a
                        href="##"
                        class="text-dark"
                        style={{ marginLeft: "10px" }}
                      >
                        Cancellation Policy
                      </a>
                    </label>
                  </div>
                  <Link to="/listingimage">
                    <input
                      type="submit"
                      class="submit_btn"
                      value="Save & Next"
                    />
                  </Link>
                </div>
                <div class="sidebar">
                  <div class="steps">
                    <div class="line"></div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Description
                    </div>
                    <div class="step active">
                      <span>2</span> Price
                    </div>
                    <div class="step">
                      <span>3</span> Images
                    </div>
                    <div class="step">
                      <span>4</span> Details
                    </div>
                    <div class="step">
                      <span>5</span> Location
                    </div>
                    <div class="step">
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

export default ListingPrice;
