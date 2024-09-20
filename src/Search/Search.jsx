import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';
import bannerImg from "../images/banner.jpg";
import Slider from "react-slick"; 
import Img1 from "../images/1.png";
import Img2 from "../images/2.png";
import Img3 from "../images/3.png";
import Img4 from "../images/4.png";

function Search() {
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
  return (
    <div className="search">
      <section
        class="banner py-5"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="search_form">
            <form action="" method="post">
              <div class="row">
                <div class="col-sm-8">
                  <input
                    type="search"
                    id="search"
                    name="search"
                    value=""
                    placeholder="United States"
                  />
                </div>
                <div class="col-sm-4">
                  <select name="guests" id="guest">
                    <option value="">Add Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    type="date"
                    name="checkin"
                    id=""
                    placeholder="Check-In"
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    type="date"
                    name="chekout"
                    id=""
                    placeholder="Check-Out"
                  />
                </div>
                <div class="col-sm-4">
                  <div class="range-slider">
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
                        value="0"
                      />
                      <input
                        type="range"
                        id="maxRange"
                        name="maxRange"
                        min="0"
                        max="500"
                        value="500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="searchform_btn">
                Search Property <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section class="pt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="heading">3 Results Found!</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="property">
               <Slider {...settings} className="gallery">
                  <img src={Img1} alt="gallery-item" />
                  <img src={Img2} alt="gallery-item" />
                  <img src={Img3} alt="gallery-item" />
                  <img src={Img4} alt="gallery-item" />
                </Slider>
                <div class="gallery_content">
                  <div class="content">
                    <h4>Honey Hole</h4>
                    <span>Waterfowl</span>
                    <span class="guests">
                      <i class="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div class="links">
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
                    <a href="#" class="btn btn-primary">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="watched">Booked 10 Hours Ago</span>
                <button class="add_to_wishlist">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="property">
                <Slider {...settings} className="gallery">
                  <img src={Img1} alt="gallery-item" />
                  <img src={Img2} alt="gallery-item" />
                  <img src={Img3} alt="gallery-item" />
                  <img src={Img4} alt="gallery-item" />
                </Slider>
                <div class="gallery_content">
                  <div class="content">
                    <h4>Central Whitetail Hunts</h4>
                    <span>Texas</span>
                    <span>
                      <i class="fa-regular fa-user"></i> 4 Guests
                    </span>
                  </div>
                  <div class="links">
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
                    <a href="#" class="btn btn-primary">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="watched">Booked 10 Hours Ago</span>
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="property">
                <Slider {...settings} className="gallery">
                  <img src={Img3} alt="gallery-item" />
                  <img src={Img2} alt="gallery-item" />
                  <img src={Img1} alt="gallery-item" />
                  <img src={Img4} alt="gallery-item" />
                </Slider>
                <div class="gallery_content">
                  <div class="content">
                    <h4>Honey Hole</h4>
                    <span>Turkey</span>
                    <span class="guests">
                      <i class="fa-regular fa-user"></i> 5 Guests
                    </span>
                  </div>
                  <div class="links">
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
                    <a href="#" class="btn btn-primary">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="watched">Booked 10 Hours Ago</span>
                <button class="add_to_wishlist">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.065138765954!2d-87.60868392480825!3d33.26478695890013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88861c9128aaaddb%3A0x86dc7c4543f62e8c!2sHwy%20171%20Cutoff%20Rd%2C%20Alabama%2035473%2C%20USA!5e0!3m2!1sen!2sin!4v1725186665986!5m2!1sen!2sin"
                style={{ width: "100%", height: "500px", border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
