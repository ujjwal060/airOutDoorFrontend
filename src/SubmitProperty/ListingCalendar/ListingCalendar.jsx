import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Calendar1 from './Calendar1/Calendar1';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
function ListingCalendar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  console.log(formData);
  
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

    const combinedData = {
      ...formData,
      ...selectedDates,
      property_description: e.target.property_description.value,
      instant_booking: e.target.instant_booking.checked,
    };

    try {
      await axios.post('http://localhot:8000/host/add', combinedData);

      toast.success('Listing saved successfully!');

      setTimeout(() => {
        navigate('/');
      }, 2000); 

    } catch (error) {
      toast.error('Failed to save the listing.');
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
                  <h2 className="mb-5">Pick The Dates For Check-in & Check-Out</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field">
                        <Calendar1 monthOffset={0} onDateChange={(checkIn, checkOut) => handleDateChange(checkIn, checkOut)} />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="field">
                        <Calendar1 monthOffset={1} onDateChange={(checkIn, checkOut) => handleDateChange(checkIn, checkOut)} />
                      </div>
                    </div> */}
                  </div>
                  <div className="field">
                    <label htmlFor="property_description">Property Description</label>
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
                        id=""
                        style={{ marginRight: "6px" }}
                        defaultChecked={formData.instant_booking || false}
                      />
                      Do You Want To Allow 30+ Night Stand.
                    </label>
                  </div>
                  <input type="submit" className="submit_btn" value="Save & Next" />
                </div>
                <div className="sidebar">
                  <div className="steps">
                    <div className="line"></div>
                    <div className="step active"><span><i className='bx bx-check'></i></span> Description</div>
                    <div className="step active"><span><i className='bx bx-check'></i></span> Price</div>
                    <div className="step active"><span><i className='bx bx-check'></i></span> Images</div>
                    <div className="step active"><span><i className='bx bx-check'></i></span> Details</div>
                    <div className="step active"><span><i className='bx bx-check'></i></span> Location</div>
                    <div className="step active"><span>6</span> Calendar</div>
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
