import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Calendar1 from './Calendar1/Calendar1';

function ListingCalendar() {
  return (
    <div className="listingcalendar">
      <section className="pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center listh1">Add New Listing</h1>
              <form action="" className="add_listing" onSubmit={(e) => e.preventDefault()}>
                <div className="inner_div">
                  <h1>Calendar</h1>
                  <p className="mb-4">• All Items Are Mandatory</p>
                  <h2 className="mb-5">Pick The Dates For Check-in & Check-Out</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field">
                        <Calendar1 monthOffset={0} />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="field">
                        <Calendar1 monthOffset={1} />
                      </div>
                    </div> */}
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
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="instant_booking">
                      <input
                        type="checkbox"
                        name="instant_booking"
                        id=""
                        style={{ marginRight: "6px" }}
                      />
                      Do You Want To Allow 30+ Night Stand.
                    </label>
                  </div>
                  <Link to="/listingresponse">
                    <input
                      type="submit"
                      className="submit_btn"
                      value="Save & Next"
                    />
                  </Link>
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
                      <span><i className='bx bx-check'></i></span> Location
                    </div>
                    <div className="step active">
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

export default ListingCalendar;
