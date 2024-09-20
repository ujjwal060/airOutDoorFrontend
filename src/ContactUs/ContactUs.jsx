import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  return (
    <div className="contactus">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center">Contact Us</h1>
              <p class="text-center">
                Any question or remarks? Just write us a message!
              </p>
              <div class="contact-box mt-5">
                <div class="contact_info">
                  <div class="inner_div">
                    <div class="contact_header">
                      <h3>Contact Information</h3>
                      <p style={{color: '#C9C9C9'}}>
                        Say something to start a live chat!
                      </p>
                    </div>
                    <div class="content">
                      <div class="icon-box">
                        <img src="images/phone.svg" alt="" />
                        <span>+1012 3456 789</span>
                      </div>
                      <div class="icon-box">
                        <img src="images/envelope.svg" alt="" />
                        <span>demo@gmail.com</span>
                      </div>
                      <div class="icon-box">
                        <img src="images/location.svg" alt="" />
                        <span>
                          5810 HWY 171, Cutoff Road Northport, AL. 35473
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact_form">
                  <form action="">
                    <div class="field">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value=""
                        placeholder="Enter full name"
                      />
                    </div>
                    <div class="field">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value=""
                        placeholder="Enter email address"
                      />
                    </div>
                    <div class="field">
                      <label for="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        cols=""
                        rows="4"
                        placeholder="Enter detailed message here"
                      ></textarea>
                    </div>
                    <div class="text-right">
                      <input type="submit" value="Send Message" />
                      <br />
                      <img
                        src="images/message.png"
                        alt=""
                        class="letter_icon"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.065138765954!2d-87.60868392480825!3d33.26478695890013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88861c9128aaaddb%3A0x86dc7c4543f62e8c!2sHwy%20171%20Cutoff%20Rd%2C%20Alabama%2035473%2C%20USA!5e0!3m2!1sen!2sin!4v1725186665986!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
