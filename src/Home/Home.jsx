import React, { useState } from "react";
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
import firstImg1 from "../images/5.png";
import secondImg1 from "../images/6.png";
import thirdImg1 from "../images/7.png";
import fourthImg1 from "../images/8.png";
import fifthImg1 from "../images/driver.png";
import sixthImg1 from "../images/booking.png";
import seventhImg1 from "../images/terms.png";
import eightImg1 from "../images/team1.png";
import ninthImg1 from "../images/team2.png";
import tenthImg1 from "../images/team3.png";
import firstImg2 from "../images/kids-outdoor.png";
import bannerImg from "../images/banner.jpg";
import bannerImg1 from "../images/kids-outdoor-bg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import { Link } from "react-router-dom";
import secondImg2 from "../images/deer-black.svg";
import secondImg3 from "../images/eik.svg";
import secondImg4 from "../images/hog.svg";
import secondImg5 from '../images/menu-black.svg';
import secondImg6 from "../images/turkey.svg";
import secondImg7 from "../images/pigeon-black.svg";

function Home() {
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

  // const[activeTab, setActiveTab] = useState(false);

  // const toggleTab = () => {
  //   setIsActive(!isActive);
  // }

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
          <ul class="nav nav-pills mt-4" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-terrestrial-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-terrestrial"
                type="button"
                role="tab"
                aria-controls="pills-terrestrial"
                aria-selected="true"
              >
                Terrestrial Animals <img src={firstImg} alt="" />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-aquatic-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-aquatic"
                type="button"
                role="tab"
                aria-controls="pills-aquatic"
                aria-selected="false"
              >
                Aquatic Animals <img src={secondImg} alt="" />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-aerial-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-aerial"
                type="button"
                role="tab"
                aria-controls="pills-aerial"
                aria-selected="false"
              >
                Aerial Animals <img src={thirdImg} alt="" />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-adventure-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-adventure"
                type="button"
                role="tab"
                aria-controls="pills-adventure"
                aria-selected="false"
              >
                Adventure Activities <img src={fourthImg} alt="" />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-special-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-special"
                type="button"
                role="tab"
                aria-controls="pills-special"
                aria-selected="false"
              >
                Special Events <img src={fifthImg} alt="" />
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-other-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-other"
                type="button"
                role="tab"
                aria-controls="pills-other"
                aria-selected="false"
              >
                Other Activities <img src={sixthImg} alt="" />
              </button>
            </li>
          </ul>
          <div class="tab-content position-relative" id="pills-tabContent">
            <div
              class="tab-pane fade"
              id="pills-terrestrial"
              role="tabpanel"
              aria-labelledby="pills-terrestrial-tab">
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg2} alt="" />
                  <p>Deer</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg3} alt="" />
                  <p>Eik</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg4} alt="" />
                  <p>Hog</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg5} alt="" />
                  <p>Other Hunting</p>
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-aquatic"
              role="tabpanel"
              aria-labelledby="pills-aquatic-tab"
            >
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg2} alt="" />
                  <p>Deer</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg3} alt="" />
                  <p>Eik</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg4} alt="" />
                  <p>Hog</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg5} alt="" />
                  <p>Other Hunting</p>
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-aerial"
              role="tabpanel"
              aria-labelledby="pills-aerial-tab"
            >
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg6} alt="" />
                  <p>Turkey</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg7} alt="" />
                  <p>Dove</p>
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-adventure"
              role="tabpanel"
              aria-labelledby="pills-adventure-tab"
            >
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg6} alt="" />
                  <p>Turkey</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg7} alt="" />
                  <p>Dove</p>
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-special"
              role="tabpanel"
              aria-labelledby="pills-special-tab"
            >
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg6} alt="" />
                  <p>Turkey</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg7} alt="" />
                  <p>Dove</p>
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-other"
              role="tabpanel"
              aria-labelledby="pills-other-tab"
            >
              <div class="links_wrap">
                <a href="deer.html" class="active">
                  <img src={secondImg6} alt="" />
                  <p>Turkey</p>
                </a>
                <a href="deer.html" class>
                  <img src={secondImg7} alt="" />
                  <p>Dove</p>
                </a>
              </div>
            </div>
          </div>

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
      
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="heading">Recent Booked</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Waterfowl</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <span className="watched">Booked 10 Hours Ago</span>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Central Whitetail Hunts</h4>
                    <span>Texas</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 4 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <span className="watched">Booked 10 Hours Ago</span>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <span className="watched">Booked 10 Hours Ago</span>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="properties">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="heading">Featured Properties</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Waterfowl</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist added">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                  <img src={seventhImg} alt="gallery-item" />
                  <img src={tenthImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={tenthImg} alt="gallery-item" />
                  <img src={ninthImg} alt="gallery-item" />
                  <img src={secondImg} alt="gallery-item" />
                  <img src={eightImg} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist added">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={firstImg1} alt="gallery-item" />
                  <img src={secondImg1} alt="gallery-item" />
                  <img src={thirdImg1} alt="gallery-item" />
                  <img src={fourthImg1} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={secondImg1} alt="gallery-item" />
                  <img src={thirdImg1} alt="gallery-item" />
                  <img src={fourthImg1} alt="gallery-item" />
                  <img src={firstImg1} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={thirdImg1} alt="gallery-item" />
                  <img src={fourthImg1} alt="gallery-item" />
                  <img src={firstImg1} alt="gallery-item" />
                  <img src={secondImg1} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist added">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="property">
                <Slider {...settings} className="gallery">
                  <img src={fourthImg1} alt="gallery-item" />
                  <img src={firstImg1} alt="gallery-item" />
                  <img src={secondImg1} alt="gallery-item" />
                  <img src={thirdImg1} alt="gallery-item" />
                </Slider>
                <div className="gallery_content">
                  <div className="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span className="guests">
                      <i className="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div className="links">
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
                    <Link to="/propertydetail" className="btn btn-dark">
                      $300/Night
                    </Link>
                  </div>
                </div>
                <button className="add_to_wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
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
    </div>
  );
}

export default Home;
