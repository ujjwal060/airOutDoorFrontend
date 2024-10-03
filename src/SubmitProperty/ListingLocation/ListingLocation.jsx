import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ListingLocation() {
  return (
    <div className="listinglocation">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center listh1">Add New Listing</h1>
              <form action="" class="add_listing">
                <div class="inner_div_location">
                  <h1>Location</h1>
                  <h2 class="text-center">Select Location</h2>
                  <p class="text-center">Pin on location to select</p>
                  <p class="mb-5">All Items Are Mandatory</p>

                  <div class="list-location">
                    <div class="field">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.065138765954!2d-87.60868392480825!3d33.26478695890013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88861c9128aaaddb%3A0x86dc7c4543f62e8c!2sHwy%20171%20Cutoff%20Rd%2C%20Alabama%2035473%2C%20USA!5e0!3m2!1sen!2sin!4v1725186665986!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                      <p class="text-center">Or Enter Manually</p>
                    </div>
                    <div class="field">
                      <label for="address">Address(Not Mandatory)</label>
                      <input
                        type="text"
                        name="address"
                        class="form-control"
                        placeholder="Enter Your Address"
                      />
                    </div>
                    <div class="field">
                      <label for="city">City(Not Mandatory)</label>
                      <input
                        type="text"
                        name="city"
                        class="form-control"
                        placeholder="Enter City Name"
                      />
                    </div>
                    <div class="field">
                      <label for="zip_code">Zip Code(Not Mandatory)</label>
                      <input
                        type="text"
                        name="zip_code"
                        class="form-control"
                        placeholder="Enter Zip Code"
                      />
                    </div>
                    <div class="field">
                      <label for="state">State(Mandatory)</label>
                      <input
                        type="text"
                        name="state"
                        class="form-control"
                        placeholder="Enter Zip Code"
                      />
                    </div>
                    <div class="field">
                      <label for="zip_code">Country(Mandatory)</label>
                      <input
                        type="text"
                        name="country"
                        class="form-control"
                        placeholder="Enter Zip Code"
                      />
                    </div>
                    <div class="field">
                      <label for="instant_booking">
                        Physical Address Location will not be visible to users
                        on the AirOutdoors site. Once Airoutdoors and the Vendor
                        have approved a booking request, the approved user will
                        receive the listed property location.
                      </label>
                    </div>
                  </div>
                  <Link to="/listingcalendar">
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
                      <span><i class='bx bx-check'></i></span> Description
                    </div>
                    <div class="step active">
                      <span><i class='bx bx-check'></i></span> Price
                    </div>
                    <div class="step active">
                      <span><i class='bx bx-check'></i></span> Images
                    </div>
                    <div class="step active">
                      <span><i class='bx bx-check'></i></span> Details
                    </div>
                    <div class="step active">
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

export default ListingLocation;
