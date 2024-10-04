import React, { useState } from "react";
import nom1 from "../images/owner.png";
import nom2 from "../images/phone-black.svg";
import nom3 from "../images/chat.svg";
import nom4 from "../images/testimonials_image.png";
import nom5 from "../images/animal.svg";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "../Calendar/Calendar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PropertyDetail() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const location = useLocation();
  const { property } = location.state || {};
  const { bookingData } = location.state || {};
  const [currentMonth, setCurrentMonth] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [camper, setCamper] = useState(false);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  const validProperty = property && Object.keys(property).length > 0;
  const validBookingData = bookingData && bookingData.propertyDetails;

  const checkInDate = bookingData?.checkInDate || null;
  const checkOutDate = bookingData?.checkOutDate || null;

  const handleBookingSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const bookingData = {
      propertyId: property._id,
      vendorId:property.vendorId,
      userId,
      checkIn,
      checkOut,
      guests,
      camper,
      totalAmount: property.pricing,
    };
    try {
      const response = await axios.post(
        "http://44.196.192.232:8000/booking/book",
        bookingData
      );

      if (response.status === 200) {
        toast.success(response?.data?.message);
        setCheckIn("");
        setCheckOut("");
        setGuests("");
        setCamper(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth + 1);
  };

  return (
    <div className="propertydetail">
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div className="property_detail">
                {validProperty || validBookingData ? (
                  <>
                    <div className="property_header">
                      <div className="content">
                        <h4>
                          {validProperty
                            ? property.name
                            : bookingData.propertyDetails.name}
                        </h4>
                        <span>
                          {validProperty
                            ? property.amenities
                            : bookingData.propertyDetails.amenities}
                        </span>
                      </div>
                      <div className="rating">
                        <ul className="stars">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-regular fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="links">
                        <p className="btn btn-dark">
                          $
                          {validProperty
                            ? property.pricing
                            : bookingData.propertyDetails.pricing}
                          /Night
                        </p>
                      </div>
                    </div>
                    <div className="property_images">
                      <img
                        src={
                          validProperty
                            ? property.imageUrl[0]
                            : bookingData.propertyDetails.imageUrl[0]
                        }
                        alt="gallery-item"
                      />
                      <div className="d-flex flex-column gap-1">
                        <img
                          src={
                            validProperty
                              ? property.imageUrl[0]
                              : bookingData.propertyDetails.imageUrl[0]
                          }
                          alt="gallery-item"
                        />
                        <img
                          src={
                            validProperty
                              ? property.imageUrl[0]
                              : bookingData.propertyDetails.imageUrl[0]
                          }
                          alt="gallery-item"
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <img
                          src={
                            validProperty
                              ? property.imageUrl[0]
                              : bookingData.propertyDetails.imageUrl[0]
                          }
                          alt="gallery-item"
                        />
                        <img
                          src={
                            validProperty
                              ? property.imageUrl[0]
                              : bookingData.propertyDetails.imageUrl[0]
                          }
                          alt="gallery-item"
                        />
                      </div>
                    </div>
                    <div className="gallery_content">
                      <span>
                        Waterfowl <img src={nom5} alt="" />
                      </span>
                      <span>
                        Check Availability{" "}
                        <i
                          className="fa fa-long-arrow-down"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <div className="description">
                      <h4>Listing Description</h4>
                      <p>
                        {validProperty
                          ? property.description
                          : bookingData.propertyDetails.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div>No property or booking details available.</div>
                )}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="property_booking">
                <h2 class="text-center mb-4">Book Now</h2>
                <form onSubmit={handleBookingSubmit}>
                  <input
                    type="date"
                    id="check-in"
                    class="form-control mb-4"
                    name="check-in"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    id="check-out"
                    class="form-control mb-4"
                    name="check-in"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                  <select
                    id="guests"
                    class="form-control mb-4"
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                  >
                    <option value="">Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <div class="compare">
                    <label>
                      <input
                        type="checkbox"
                        name="compare"
                        checked={camper}
                        onChange={(e) => setCamper(e.target.checked)}
                      />{" "}
                      Camper
                    </label>
                    <div className="divider"></div>
                    <span className="btn btn-light">
                      {validProperty
                        ? property.pricing
                        : bookingData.propertyDetails.pricing}{" "}
                      /Night
                    </span>
                  </div>
                  <input
                    type="submit"
                    class="submit_btn"
                    value={loading ? "Submitting..." : "Submit"}
                    disabled={loading}
                  />
                  <hr />
                  <div class="d-flex justify-content-around">
                    <button class="btn btn-outline">Add to Favourites</button>
                    <button class="btn btn-light">Contact Owner</button>
                  </div>
                  <div class="social_share">
                    <span>Share on</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in text-white"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook-messenger text-white"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter text-white"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-infinity text-white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Details{" "}
                      <i class="fa fa-angle-down" aria-hidden="true"></i>{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      This property is small but lines up with a pretty big
                      water stream. It has several ponds that has plenty of
                      ducks flying in and they don’t get pressured much. Come
                      have fun.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="booking_calander_wrapper">
                <div class="booking_calander mb-4">
                  <div className="row mb-4">
                    {/* Calendar Navigation */}
                    <div className="col-md-6 position-relative">
                      <button
                        className="calendar-arrow prev-arrow"
                        onClick={handlePrevMonth}
                      >
                        &lt;
                      </button>
                      <Calendar
                        monthOffset={currentMonth}
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                      />
                    </div>
                    <div className="col-md-6 position-relative">
                      <button
                        className="calendar-arrow next-arrow"
                        onClick={handleNextMonth}
                      >
                        &gt;
                      </button>
                      <Calendar
                        monthOffset={currentMonth + 1}
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                      />
                    </div>
                  </div>
                </div>
                <div class="label">
                  <span class="past"></span> Past
                </div>
                <div class="label">
                  <span class="today"></span> Today
                </div>
                <div class="label">
                  <span class="booked"></span> Booked
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact_onwer">
                <img src={nom1} alt="" width="117" />
                <h2>Aaron</h2>
                <p>
                  <i class="fa-regular fa-eye"></i> <span>See Airhost</span>
                </p>
                <div class="d-flex align-items-center justify-content-center gap-1 mt-5">
                  <a class="btn btn-dark">
                    <img src={nom2} alt="" width="22" />{" "}
                    <span className="text-dark">Contact Owner</span>
                  </a>
                  <a class="btn btn-rounnd">
                    <img src={nom3} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="testimonial_slider_wrapper">
                <Slider {...settings} className="testimonials_slider">
                  <div class="testimonial">
                    <img src={nom4} alt="" width="200" />
                    <h2>Leticia Kutch</h2>
                    <p>
                      Sapiente occaecati exercitationem quasi eum corporis sit.
                      Aut consectetur maxime debitis quam voluptatem aut
                      consequatur voluptatum.
                    </p>
                    <div class="rating">
                      <ul class="stars">
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-regular fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="testimonial">
                    <img src={nom4} alt="" width="200" />
                    <h2>Leticia Kutch</h2>
                    <p>
                      Sapiente occaecati exercitationem quasi eum corporis sit.
                      Aut consectetur maxime debitis quam voluptatem aut
                      consequatur voluptatum.
                    </p>
                    <div class="rating">
                      <ul class="stars">
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-regular fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="testimonial">
                    <img src={nom4} alt="" width="200" />
                    <h2>Leticia Kutch</h2>
                    <p>
                      Sapiente occaecati exercitationem quasi eum corporis sit.
                      Aut consectetur maxime debitis quam voluptatem aut
                      consequatur voluptatum.
                    </p>
                    <div class="rating">
                      <ul class="stars">
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-regular fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.065138765954!2d-87.60868392480825!3d33.26478695890013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88861c9128aaaddb%3A0x86dc7c4543f62e8c!2sHwy%20171%20Cutoff%20Rd%2C%20Alabama%2035473%2C%20USA!5e0!3m2!1sen!2sin!4v1725186665986!5m2!1sen!2sin"
          style={{ width: "100%", height: "500px", border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
      <ToastContainer />
    </div>
  );
}

export default PropertyDetail;
