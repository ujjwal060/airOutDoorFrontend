import React from 'react';
import firstImg from "../images/deer.svg";

function Home() {
  return (
    <div className='home'>
    <section class="banner">
        <div class="container">
            <h1>Gear Up. Track Down</h1> 
            <h1>Conquer the Wild.</h1>
            <ul class="nav nav-pills my-4" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-terrestrial-tab" data-bs-toggle="pill" data-bs-target="#pills-terrestrial" type="button" role="tab" aria-controls="pills-terrestrial" aria-selected="true">Terrestrial Animals <img src="##" alt="" /></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-aquatic-tab" data-bs-toggle="pill" data-bs-target="#pills-aquatic" type="button" role="tab" aria-controls="pills-aquatic" aria-selected="false">Aquatic Animals <img src="images/fish.svg" alt=""/></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-aerial-tab" data-bs-toggle="pill" data-bs-target="#pills-aerial" type="button" role="tab" aria-controls="pills-aerial" aria-selected="false">Aerial Animals <img src="images/pigeon.svg" alt="" /></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-adventure-tab" data-bs-toggle="pill" data-bs-target="#pills-adventure" type="button" role="tab" aria-controls="pills-adventure" aria-selected="false">Adventure Activities <img src="images/hiking.svg" alt="" /></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-special-tab" data-bs-toggle="pill" data-bs-target="#pills-special" type="button" role="tab" aria-controls="pills-special" aria-selected="false">Special Events <img src="images/calender.svg" alt="" /></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-other-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">Other Activities <img src="images/menu.svg" alt="" /></button>
                </li>                
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-terrestrial" role="tabpanel" aria-labelledby="pills-terrestrial-tab">Terrestrial</div>
                <div class="tab-pane fade" id="pills-aquatic" role="tabpanel" aria-labelledby="pills-aquatic-tab">Aquatic</div>
                <div class="tab-pane fade" id="pills-aerial" role="tabpanel" aria-labelledby="pills-aerial-tab">Aerial</div>
                <div class="tab-pane fade" id="pills-adventure" role="tabpanel" aria-labelledby="pills-adventure-tab">Advanture</div>
                <div class="tab-pane fade" id="pills-special" role="tabpanel" aria-labelledby="pills-special-tab">Special</div>
                <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">other</div>
            </div>
            
            
            <div class="searchbar">
                <div class="search_box">
                    <form method="POST" action="">
                        <input type="search" name="search" value="" placeholder="Where to?" />
                        <button class="search_btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    
                    <a href="#" class="btn btn-secondary">Map <i class="fa-regular fa-map"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="heading">Recent Booked</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Waterfowl</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <span class="watched">Booked 10 Hours Ago</span>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                    
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Central Whitetail Hunts</h4>
                                <span>Texas</span>
                                <span><i class="fa-regular fa-user"></i> 4 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <span class="watched">Booked 10 Hours Ago</span>
                        <button class="add_to_wishlist added"><i class="fa fa-heart" aria-hidden="true"></i></button>                      
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <span class="watched">Booked 10 Hours Ago</span>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="properties">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="heading">Featured Properties</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Waterfowl</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist added"><i class="fa fa-heart" aria-hidden="true"></i></button>                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                      
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/2.png" alt="gallery-item" />
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/4.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/4.png" alt="gallery-item" />
                            <img src="images/3.png" alt="gallery-item" />
                            <img src="images/1.png" alt="gallery-item" />
                            <img src="images/2.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist added"><i class="fa fa-heart" aria-hidden="true"></i></button>                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/5.png" alt="gallery-item" />
                            <img src="images/6.png" alt="gallery-item" />
                            <img src="images/7.png" alt="gallery-item" />
                            <img src="images/8.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/6.png" alt="gallery-item" />
                            <img src="images/7.png" alt="gallery-item" />
                            <img src="images/8.png" alt="gallery-item" />
                            <img src="images/5.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                      
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/7.png" alt="gallery-item" />
                            <img src="images/8.png" alt="gallery-item" />
                            <img src="images/5.png" alt="gallery-item" />
                            <img src="images/6.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist added"><i class="fa fa-heart" aria-hidden="true"></i></button>                      
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="property">
                        <div class="gallery">
                            <img src="images/8.png" alt="gallery-item" />
                            <img src="images/5.png" alt="gallery-item" />
                            <img src="images/6.png" alt="gallery-item" />
                            <img src="images/7.png" alt="gallery-item" />
                        </div>
                        <div class="gallery_content">
                            <div class="content">
                                <h4>Honey Hole</h4>
                                <span>Turkey</span>
                                <span class="guests"><i class="fa-regular fa-user"></i> 5 Guests</span>
                            </div>
                            <div class="links">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-regular fa-star"></i></li>
                                </ul>                               
                                <a href="#" class="btn btn-primary">$300/Night</a>
                            </div>
                        </div>
                        <button class="add_to_wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row mb-3">
                <div class="col-sm-12 text-center">
                    <h2 class="sec_heading">Why Choose AirOutdoors?</h2>
                    <p>Appeal to Property Owners 1 million dollar insurance Protection</p>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-sm-4">
                    <div class="box">
                        <img src="images/driver.png" alt="" />
                        <h5>Attract Diverse Outdoor Enthusiasts</h5>
                    </div>
                    <p>AirOutdoors helps landowners unlock the full earning potential of their property by connecting them with outdoor enthusiasts eager for unique experiences. Skip the hassle and start generating income from your land.</p>
                </div>
                <div class="col-sm-4">
                    <div class="box">
                        <img src="images/booking.png" alt="" />
                        <h5>Hassle-Free Booking & Management</h5>
                    </div>
                    <p>Leave the complexities to us. From seamless online bookings to payment handling, AirOutdoors makes managing your property effortless, ensuring you maximize your returns with minimal effort.</p>
                </div>
                <div class="col-sm-4">
                    <div class="box">
                        <img src="images/terms.png" alt="" />
                        <h5>Clear and Consistent Terms</h5>
                    </div>
                    <p>Establish clear expectations with standardized agreements. Your land’s terms, including access, rules, and pricing, are communicated transparently, ensuring a smooth experience for both you and your guests.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <a href="#" class="btn btn-primary big">About Landowners <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="sec_heading mb-5">Meet Our Hosts</h2>
                    <div class="team">
                        <div class="team_single">
                            <img src="images/team3.png" />
                            <h2>Paul Heyman</h2>
                        </div>
                        <div class="team_single active">
                            <img src="images/team1.png" />
                            <h2>Paul Heyman</h2>
                        </div>
                        <div class="team_single">
                            <img src="images/team2.png" />
                            <h2>Paul Heyman</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="kids_outdoor" style="background: url(images/kids-outdoor-bg.jpg)">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <img src="images/kids-outdoor.png" alt="" class="img-fluid"/>
                </div>
                <div class="col-sm-6">
                    <h2 class="text-white">We are a proud supporter of Kidz Outdoors</h2>
                    <p class="text-white">We are proud supporters of Kidz Outdoors.  This wonderful organizations  mission is, “Forming bonds by linking family and friends to pass on our passion for the outdoors to a new generation. Raising funds for hospitals and research centers in hope to find cures for cancer and other childhood diseases.</p>
                    <a href="#" class="btn btn-secondary">Visit Kidz Outdoors <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home;