import React, { useState, useEffect } from "react";
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";
import Img4 from "../../images/4.png";
import Img5 from "../../images/typing.svg";
import SecondNav from "../SecondNav/SecondNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../Arrow/NextArrow";
import PrevArrow from "../../Arrow/PrevArrow";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Booking() {
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

  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();


  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://44.196.192.232:8000/booking/book/${userId}`
      );
      setBookings(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleBooking = (bookingData) => {
    navigate("/propertydetail", { state: { bookingData } });
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <div className="booking">
      <SecondNav />

      <div class="container" style={{ margin: "-50px auto 50px auto" }}>
        <div class="row">
          <div class="col-sm-12">
            <div class="searchbar">
              <div class="search_box w-75 rounded-3">
                <form method="POST" action="">
                  <input
                    class="p-3 rounded-3 bg-none"
                    type="search"
                    name="search"
                    value=""
                    placeholder="Search by host name"
                  />
                  <button class="search_btn">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            {bookings.map((booking) => (
              <div className="col-lg-3 col-md-6" key={booking._id}>
                <div className="property">
                  {booking.propertyDetails.imageUrl.length > 1 ? (
                    <Slider {...settings} className="gallery">
                      {booking.propertyDetails.imageUrl.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`gallery-item-${index}`}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : booking.propertyDetails.imageUrl.length === 1 ? (
                    <img
                      src={booking.propertyDetails.imageUrl[0]}
                      alt="single-image"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <p>No images available</p>
                  )}
                  <div className="gallery_content">
                    <div className="content">
                      <h4>{booking.propertyDetails.name}</h4>
                      <span>{booking.propertyDetails.category}</span>
                      <span className="guests">
                        <i className="fa-regular fa-user"></i> {booking.guests}{" "}
                        Guest{booking.guests > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="links">
                      <ul className="stars">
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <i
                              className={
                                index < 4
                                  ? "fa-solid fa-star"
                                  : "fa-regular fa-star"
                              }
                            ></i>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleBooking(booking)}
                        className="btn btn-dark"
                      >
                        {booking.totalAmount}/Night
                      </button>
                    </div>
                  </div>
                  <span className="comment_div">
                    <img src={Img5} alt="" /> Share Your Experience
                  </span>
                  <button className="booked_div">
                    <i className="fa-solid fa-arrows-rotate"></i> Rebook
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default Booking;
