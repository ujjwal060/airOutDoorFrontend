import React from "react";
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
      <section class="pt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="property">
                <Slider {...settings} className="gallery">
                  <img src={Img2} alt="gallery-item" />
                  <img src={Img1} alt="gallery-item" />
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
                    <a href="#" class="btn btn-dark">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="comment_div">
                  <img src="images/typing.svg" alt="" /> Share Your Experience
                </span>
                <button class="booked_div">
                  <i class="fa-solid fa-arrows-rotate"></i> Rebook
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
                    <a href="#" class="btn btn-dark">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="comment_div">
                  <img src={Img5} alt="" /> Share Your Experience
                </span>
                <button class="booked_div">
                  <i class="fa-solid fa-arrows-rotate"></i> Rebook
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
                    <a href="#" class="btn btn-dark">
                      $300/Night
                    </a>
                  </div>
                </div>
                <span class="comment_div">
                  <img src={Img5} alt="" /> Share Your Experience
                </span>
                <button class="booked_div">
                  <i class="fa-solid fa-arrows-rotate"></i> Rebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
