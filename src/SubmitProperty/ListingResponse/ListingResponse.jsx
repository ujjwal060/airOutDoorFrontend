import React from "react";

function ListingResponse() {
  return (
    <div className="listingresponse">
      <section class="pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center listh1">Add New Listing</h1>
              <form action="" class="add_listing">
                <div class="inner_div_resp">
                  <i class="bx bxs-check-circle"></i>
                  <h1>Woo hoo!!</h1>
                  <p>Congrats! we have successfully list your property.</p>
                </div>
                <div class="sidebar">
                  <div class="steps">
                    <div class="line"></div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Description
                    </div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Price
                    </div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Images
                    </div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Details
                    </div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Location
                    </div>
                    <div class="step active">
                      <span>
                        <i class="bx bx-check"></i>
                      </span>{" "}
                      Calender
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingResponse;
