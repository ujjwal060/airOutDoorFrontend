import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ListingDetails() {
  return (
    <div className="listingdetails">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center listh1">Add New Listing</h1>
              <form action="" class="add_listing">
                <div class="inner_div">
                  <h1>Details</h1>
                  <p class="mb-5">All Items Are Mandatory</p>
                  <div class="field">
                    <label for="propery_name">Property Name</label>
                    <input
                      type="text"
                      name="propery_name"
                      class="form-control"
                      placeholder="Enter Property Name"
                    />
                  </div>
                  <div class="field">
                    <label for="acreage">Acreage</label>
                    <input
                      type="text"
                      name="acreage"
                      class="form-control"
                      placeholder="Enter Acreage"
                    />
                  </div>
                  <div class="field">
                    <label for="acreage">Guided Hunt</label>
                    <input
                      type="text"
                      name="guided_hunt"
                      class="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div class="field">
                    <label for="category">Guest Limit/ Day</label>
                    <select name="category" class="form-control" id="">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="category">Lodging</label>
                    <select name="category" class="form-control" id="">
                      <option value="0">Select Options</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="property_description">
                      Shooting Range
                    </label>
                    <input
                      type="text"
                      name="property_description"
                      class="form-control"
                      placeholder="Enter Shooting Range"
                    />
                  </div>
                  <div class="field">
                    <label for="category">Optional Extended Details</label>
                    <select name="category" class="form-control" id="">
                      <option value="0">Mark Options Below</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="instant_booking">
                      <input type="checkbox" name="instant_booking" id="" style={{marginRight: "6px"}}/>
                      Allow instant booking? If checked, you will not have the
                      option to reject a booking request.
                    </label>
                  </div>
                  <Link to="/listinglocation">
                  <input type="submit" class="submit_btn" value="Save & Next" />
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

export default ListingDetails;
