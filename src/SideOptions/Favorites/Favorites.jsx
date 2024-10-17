import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondNav from "../SecondNav/SecondNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../../Arrow/NextArrow";
import PrevArrow from "../../Arrow/PrevArrow";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Favorites() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`http://localhot:8000/fav/getFav/${userId}`);
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
      fetchFavorites();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleProperty = (property) => {
    navigate("/propertydetail", { state: { property } });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

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

      <div className="container" style={{ margin: "-50px auto 50px auto" }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="searchbar">
              <div className="search_box w-75 rounded-3">
                <form method="POST" action="">
                  <input
                    className="p-3 rounded-3 bg-none"
                    type="search"
                    name="search"
                    value=""
                    placeholder="Search by host name"
                  />
                  <button className="search_btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="properties">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="heading">Favorites</h3>
            </div>
          </div>
          <div className="row">
            {favorites.length > 0 ? (
              favorites.map((favorite) => (
                <div key={favorite.propertyId} className="col-lg-3 col-md-6">
                  <div className="property">
                    {favorite.imageUrl.length > 1 ? (
                      <Slider {...settings} className="gallery">
                        {favorite.imageUrl.map((image, index) => (
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
                    ) : favorite.imageUrl.length === 1 ? (
                      <img
                        src={favorite.imageUrl[0]}
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
                        <h4>{favorite.name}</h4>
                        <span>{favorite.type}</span>
                        <span className="guests">
                          <i className="fa-regular fa-user"></i> {favorite.guests} Guests
                        </span>
                      </div>
                      <div className="links">
                        <ul className="stars">
                          {[...Array(favorite.rating)].map((_, index) => (
                            <li key={index}>
                              <i className="fa-solid fa-star"></i>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => handleProperty(favorite)}
                          className="btn btn-dark"
                        >
                          {favorite.pricing}/Night
                        </button>
                      </div>
                    </div>
                    <button
                      className="add_to_wishlist added"
                      onClick={() => removeFromFavorites(favorite._id)}
                    >
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-sm-12">
                <p>No favorites available. Start adding properties to your favorites list!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorites;
