import React from "react";
import img6 from "../../images/user1.png";
import Img2 from "../../images/user2.png";
import Img3 from "../../images/user3.png";
import Img4 from "../../images/user4.png";
import SecondNav from "../SecondNav/SecondNav";

function Message() {
  return (
    <div className="message">
      <SecondNav />
      <div class="container" style={{margin: "-50px auto 50px auto"}}>
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
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="message_box">
                <img src={img6} alt="" />
                <div class="content">
                  <h4>Owner 1</h4>
                  <p>Hey! whatsapp? how can i help you?</p>
                </div>
              </div>
              <div class="message_box">
                <img src={Img2} alt="" />
                <div class="content">
                  <h4>Owner 2</h4>
                  <p>Hey! whatsapp? how can i help you?</p>
                </div>
              </div>
              <div class="message_box">
                <img src={Img3} alt="" />
                <div class="content">
                  <h4>Owner 3</h4>
                  <p>Hey! whatsapp? how can i help you?</p>
                </div>
              </div>
              <div class="message_box">
                <img src={Img4} alt="" />
                <div class="content">
                  <h4>Owner 4</h4>
                  <p>Hey! whatsapp? how can i help you?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Message;
