import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondNav from "../SecondNav/SecondNav";
import "./Message.css"; // Make sure to import your CSS file

function Message() {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  const openChat = (vendor) => {
    navigate("/chats", {
      state: {
        id: vendor._id,
        vendorId: vendor.vendorId,
        name: vendor.name,
        profileImage: vendor.profileImage,
      },
    });
  };

  const fetchVendors = async () => {
    try {
      const response = await fetch("http://localhost:8000/vendor/getAll");
      const data = await response.json();
      setVendors(data.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="message">
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
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {vendors.map((vendor) => (
                <div
                  className="message_box"
                  key={vendor._id}
                  onClick={() => openChat(vendor)}
                >
                  <img src={vendor.profileImage} alt={vendor.name} />
                  <div className="content">
                    <h4>{vendor.name}</h4>
                    <p>Hey! whatsapp? how can I help you?</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Message;
