import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ListingDescription() {
  return (
    <div className="listingdescription">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center listh1">Add New Listing</h1>
              <form action="" class="add_listing">
                <div class="inner_div">
                  <h1>Description</h1>
                  <p class="mb-5">All Items Are Mandatory</p>
                  <div class="field">
                    <label for="propery_nickname">Property Nickname</label>
                    <input
                      type="text"
                      name="propery_nickname"
                      class="form-control"
                      placeholder="Enter Property Nickname"
                    />
                  </div>
                  <div class="field">
                    <label for="category">Category</label>
                    <select name="category" class="form-control" id="">
                      <option value="0">Flats</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4">4 BHK</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="property_description">
                      Property Description
                    </label>
                    <input
                      type="text"
                      name="property_description"
                      class="form-control"
                      placeholder="Describe Your Listing"
                    />
                  </div>
                  <div class="field">
                    <label for="instant_booking">
                      <input type="checkbox" name="instant_booking" id="" />
                      Allow instant booking? If checked, you will not have the
                      option to reject a booking request.
                    </label>
                  </div>
                  <Link to="/listingprice">
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
                      <span>1</span> Description
                    </div>
                    <div class="step">
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

export default ListingDescription;
