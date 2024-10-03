import React from "react";
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";
import Img4 from "../../images/4.png";
import Img5 from "../../images/5.png";
import Img6 from "../../images/6.png";
import Img7 from "../../images/7.png";
import Img8 from "../../images/8.png";
import SecondNav from "../SecondNav/SecondNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../Arrow/NextArrow";
import PrevArrow from "../../Arrow/PrevArrow";
import "bootstrap/dist/css/bootstrap.min.css";

function Favorites() {
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
    <div className="favorites">
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
      <section class="properties">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="heading">Favourites</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="property">
              <Slider {...settings} className="gallery">
                  <img src={Img4} alt="gallery-item" />
                  <img src={Img3} alt="gallery-item" />
                  <img src={Img1} alt="gallery-item" />
                  <img src={Img2} alt="gallery-item" />
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="property">
              <Slider {...settings} className="gallery">
                  <img src={Img5} alt="gallery-item" />
                  <img src={Img6} alt="gallery-item" />
                  <img src={Img7} alt="gallery-item" />
                  <img src={Img8} alt="gallery-item" />
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="property">
              <Slider {...settings} className="gallery">
                  <img src={Img6} alt="gallery-item" />
                  <img src={Img7} alt="gallery-item" />
                  <img src={Img8} alt="gallery-item" />
                  <img src={Img5} alt="gallery-item" />
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="property">
              <Slider {...settings} className="gallery">
                  <img src={Img7} alt="gallery-item" />
                  <img src={Img8} alt="gallery-item" />
                  <img src={Img5} alt="gallery-item" />
                  <img src={Img6} alt="gallery-item" />
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="property">
              <Slider {...settings} className="gallery">
                  <img src={Img8} alt="gallery-item" />
                  <img src={Img5} alt="gallery-item" />
                  <img src={Img6} alt="gallery-item" />
                  <img src={Img7} alt="gallery-item" />
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
                <button class="add_to_wishlist added">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorites;
