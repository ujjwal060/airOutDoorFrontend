import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import firstImg from "../images/deer.svg";
import secondImg from "../images/fish.svg";
import thirdImg from "../images/pigeon.svg";
import fourthImg from "../images/hiking.svg";
import fifthImg from "../images/calender.svg";
import sixthImg from "../images/menu.svg";
import seventhImg from "../images/2.png";
import eightImg from "../images/1.png";
import ninthImg from "../images/3.png";
import tenthImg from "../images/4.png";
import fifthImg1 from "../images/driver.png";
import sixthImg1 from "../images/booking.png";
import seventhImg1 from "../images/terms.png";
import eightImg1 from "../images/team1.png";
import ninthImg1 from "../images/team2.png";
import tenthImg1 from "../images/team3.png";
import firstImg2 from "../images/kids-outdoor.png";
import firstImg3 from "../images/deer-black.svg";
import firstImg4 from "../images/eik.svg";
import firstImg5 from "../images/hog.svg";
import firstImg6 from "../images/menu-black.svg";
import firstImg7 from "../images/turkey.svg";
import firstImg8 from "../images/pigeon-black.svg";
import bannerImg from "../images/banner.jpg";
import bannerImg1 from "../images/kids-outdoor-bg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../AuthContext";

function Home() {
  const { isLoggedIn } = useAuth();
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

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState();
  const [animalData, setAnimalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [booking, setBooking] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchSubCatogry = async (category) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhot:8000/catogries/subCatogry",
        { activeTab }
      );
      setAnimalData(response.data.result);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhot:8000/booking/book/${userId}`
      );
      setBooking(response.data);
    } catch (error) {
      // toast.error(error.response?.data?.message);
    }
  };

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const bookingTime = new Date(createdAt);
    const diffInMs = now - bookingTime;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    return `${diffInDays} days ago`;
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        "http://localhot:8000/property/featured"
      );
      setProperties(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleTabClick = (tabName) => {
    if (activeTab !== tabName) {
      setActiveTab(tabName);
      fetchSubCatogry(tabName);
    } else {
      setActiveTab(null);
    }
  };

  const handlePropertyClick = (property) => {
    navigate("/propertydetail", { state: { property } });
  };

  const handleBooking = (bookingData) => {
    navigate("/propertydetail", { state: { bookingData } });
  };

  const addToFavorites = async (propertyId) => {
    try {
      await axios.post("http://localhot:8000/fav/addFav", {
        userId,
        propertyId,
      });
      fetchFavorites();
      toast.success("Added to favorites!");
    } catch (error) {
      toast.error("Failed to add to favorites.");
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        `http://localhot:8000/fav/getFav/${userId}`
      );
      setFavorites(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const removeFromFavorites = async (propertyId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhot:8000/fav/deleteFav", {
        data: { userId, propertyId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBooking();
      fetchFavorites();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchBooking();
    fetchFavorites();
    if (activeTab) {
      fetchSubCatogry(activeTab);
    }
  }, [activeTab]);

  return (
    <div className="home">
      <section
        class="banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <h1>
            Gear Up. Track Down.
            <br />
            Conquer the Wild.
          </h1>
          <ul className="nav nav-pills mt-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "terrestrial" ? "active" : ""
                }`}
                onClick={() => handleTabClick("terrestrial")}
              >
                Terrestrial Animals <img src={firstImg} alt="" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "aquatic" ? "active" : ""
                }`}
                onClick={() => handleTabClick("aquatic")}
              >
                Aquatic Animals <img src={secondImg} alt="" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "aerial" ? "active" : ""}`}
                onClick={() => handleTabClick("aerial")}
              >
                Aerial Animals <img src={thirdImg} alt="" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "adventure" ? "active" : ""
                }`}
                onClick={() => handleTabClick("adventure")}
              >
                Adventure Activities <img src={fourthImg} alt="" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "special" ? "active" : ""
                }`}
                onClick={() => handleTabClick("special")}
              >
                Special Events <img src={fifthImg} alt="" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "other" ? "active" : ""}`}
                onClick={() => handleTabClick("other")}
              >
                Other Activities <img src={sixthImg} alt="" />
              </button>
            </li>
          </ul>

          <div className="tab-content position-relative" id="pills-tabContent">
            {/* Terrestrial Animals Content */}
            {activeTab === "terrestrial" && (
              <div
                className="tab-pane fade show active"
                id="pills-terrestrial"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="deer.html" className="active">
                    <img src={firstImg3} alt="" />
                    <p>Deer</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg4} alt="" />
                    <p>Eik</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg5} alt="" />
                    <p>Hog</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg6} alt="" />
                    <p>Other Hunting</p>
                  </a>
                </div>
              </div>
            )}

            {/* Aquatic Animals Content */}
            {activeTab === "aquatic" && (
              <div
                className="tab-pane fade show active"
                id="pills-aquatic"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="deer.html" className="active">
                    <img src={firstImg3} alt="" />
                    <p>Deer</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg4} alt="" />
                    <p>Eik</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg5} alt="" />
                    <p>Hog</p>
                  </a>
                  <a href="deer.html">
                    <img src={firstImg6} alt="" />
                    <p>Other Hunting</p>
                  </a>
                </div>
              </div>
            )}

            {/* Aerial Animals Content */}
            {activeTab === "aerial" && (
              <div
                className="tab-pane fade show active"
                id="pills-aerial"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="bird.html" className="active">
                    <img src={firstImg7} alt="" />
                    <p>Turkey</p>
                  </a>
                  <a href="dove.html">
                    <img src={firstImg8} alt="" />
                    <p>Dove</p>
                  </a>
                </div>
              </div>
            )}

            {/* Adventure Activities Content */}
            {activeTab === "adventure" && (
              <div
                className="tab-pane fade show active"
                id="pills-adventure"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="bird.html" className="active">
                    <img src={firstImg7} alt="" />
                    <p>Turkey</p>
                  </a>
                  <a href="dove.html">
                    <img src={firstImg8} alt="" />
                    <p>Dove</p>
                  </a>
                </div>
              </div>
            )}

            {/* Special Events Content */}
            {activeTab === "special" && (
              <div
                className="tab-pane fade show active"
                id="pills-special"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="bird.html" className="active">
                    <img src={firstImg7} alt="" />
                    <p>Turkey</p>
                  </a>
                  <a href="dove.html">
                    <img src={firstImg8} alt="" />
                    <p>Dove</p>
                  </a>
                </div>
              </div>
            )}

            {/* Other Activities Content */}
            {activeTab === "other" && (
              <div
                className="tab-pane fade show active"
                id="pills-other"
                role="tabpanel"
              >
                <div className="links_wrap">
                  <a href="bird.html" className="active">
                    <img src={firstImg7} alt="" />
                    <p>Turkey</p>
                  </a>
                  <a href="dove.html">
                    <img src={firstImg8} alt="" />
                    <p>Dove</p>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* <div className="tab-content position-relative" id="pills-tabContent">
            {loading ? (
              <p>Loading data...</p>
            ) : (
              <div
                className={`tab-pane fade ${activeTab ? "show active" : ""}`}
              >
                <div className="links_wrap">
                  {animalData.length === 0 ? (
                    <p>No Data Available</p>
                  ) : (
                    animalData.map((animal, index) => (
                      <a
                        href={`/${animal.slug}`}
                        key={index}
                        className="active"
                      >
                        <img src={animal.image} alt={animal.name} />
                        <p>{animal.name}</p>
                      </a>
                    ))
                  )}
                </div>
              </div>
            )}
          </div> */}
          <div class="searchbar">
            <div class="search_box">
              <form method="POST" action="">
                <input
                  type="search"
                  name="search"
                  value=""
                  placeholder="Where to?"
                />
                <button class="search_btn">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>

              <a href="#" class="btn btn-secondary">
                Map <i class="fa-regular fa-map"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {isLoggedIn && (
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="heading">Recent Booked</h3>
              </div>
            </div>
            <div className="row">
              {booking.map((item) => (
                <div className="col-lg-3 col-md-6" key={item._id}>
                  <div className="property">
                    {item.propertyDetails.imageUrl.length > 1 ? (
                      <Slider {...settings} className="gallery">
                        {item.propertyDetails.imageUrl.map((image, index) => (
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
                    ) : item.propertyDetails.imageUrl.length === 1 ? (
                      <img
                        src={item.propertyDetails.imageUrl[0]}
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
                        <h4>{item.propertyDetails.name}</h4>
                        <span>{item.propertyDetails.category}</span>
                        <span className="guests">
                          <i className="fa-regular fa-user"></i> {item.guests}{" "}
                          Guests
                        </span>
                      </div>
                      <div className="links">
                        <ul className="stars">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <li key={index}>
                              <i
                                className={`fa-solid fa-star ${
                                  index < 4 ? "" : "fa-regular"
                                }`}
                              ></i>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => handleBooking(item)}
                          className="btn btn-dark"
                        >
                          {item.totalAmount}/Night
                        </button>
                      </div>
                    </div>
                    <span className="watched">
                      Booked {getTimeAgo(item.createdAt)}
                    </span>
                    {/* <button className="add_to_wishlist">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </button> */}
                    <button
                      className="add_to_wishlist"
                      onClick={() => {
                        if (
                          favorites.some(
                            (fav) => fav._id === item.propertyDetails._id
                          )
                        ) {
                          removeFromFavorites(item.propertyDetails._id);
                        } else {
                          addToFavorites(item.propertyDetails._id);
                        }
                      }}
                      style={{
                        color: favorites.some(
                          (fav) => fav._id === item.propertyDetails._id
                        )
                          ? "red"
                          : "white",
                      }}
                    >
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="properties">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="heading">Featured Properties</h3>
            </div>
          </div>
          <div className="row">
            {properties.map((property) => (
              <div className="col-lg-3 col-md-6" key={property.id}>
                <div className="property">
                  {property.imageUrl.length > 1 ? (
                    <Slider {...settings} className="gallery">
                      {property.imageUrl.map((image, index) => (
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
                  ) : property.imageUrl.length === 1 ? (
                    <img
                      src={property.imageUrl[0]}
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
                      <h4>{property.name}</h4>
                      <span>{property.amenities}</span>
                      <span className="guests">
                        <i className="fa-regular fa-user"></i> {property.guests}{" "}
                        Guests
                      </span>
                    </div>
                    <div className="links">
                      <ul className="stars">
                        {Array.from({ length: 5 }, (_, index) => (
                          <li key={index}>
                            <i
                              className={`fa-solid fa-star ${
                                index < property.rating ? "" : "fa-regular"
                              }`}
                            ></i>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handlePropertyClick(property)}
                        className="btn btn-dark"
                      >
                        {property.pricing}/Night
                      </button>
                    </div>
                  </div>
                  <button className="add_to_wishlist">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-sm-12 text-center">
              <h2 className="sec_heading">Why Choose AirOutdoors?</h2>
              <p>
                Appeal to Property Owners 1 million dollar insurance Protection
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-sm-4">
              <div className="box">
                <img src={fifthImg1} alt="" />
                <h5 class="text-light">Attract Diverse Outdoor Enthusiasts</h5>
              </div>
              <p>
                AirOutdoors helps landowners unlock the full earning potential
                of their property by connecting them with outdoor enthusiasts
                eager for unique experiences. Skip the hassle and start
                generating income from your land.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <img src={sixthImg1} alt="" />
                <h5 class="text-light">Hassle-Free Booking & Management</h5>
              </div>
              <p>
                Leave the complexities to us. From seamless online bookings to
                payment handling, AirOutdoors makes managing your property
                effortless, ensuring you maximize your returns with minimal
                effort.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <img src={seventhImg1} alt="" />
                <h5 class="text-light">Clear and Consistent Terms</h5>
              </div>
              <p>
                Establish clear expectations with standardized agreements. Your
                land’s terms, including access, rules, and pricing, are
                communicated transparently, ensuring a smooth experience for
                both you and your guests.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <a href="#" className="btn btn-dark big">
                About Landowners <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="sec_heading mb-5">Meet Our Hosts</h2>
              <div className="team">
                <div className="team_single">
                  <img src={eightImg1} />
                  <h2>Paul Heyman</h2>
                </div>
                <div className="team_single active">
                  <img src={ninthImg1} />
                  <h2>Paul Heyman</h2>
                </div>
                <div className="team_single">
                  <img src={tenthImg1} />
                  <h2>Paul Heyman</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="kids_outdoor"
        style={{
          backgroundImage: `url(${bannerImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img src={firstImg2} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <h2 className="text-white">
                We are a proud supporter of Kidz Outdoors
              </h2>
              <p className="text-white">
                We are proud supporters of Kidz Outdoors.  This wonderful
                organizations  mission is, “Forming bonds by linking family and
                friends to pass on our passion for the outdoors to a new
                generation. Raising funds for hospitals and research centers in
                hope to find cures for cancer and other childhood diseases.
              </p>
              <a href="#" className="btn btn-light">
                Visit Kidz Outdoors <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Home;
