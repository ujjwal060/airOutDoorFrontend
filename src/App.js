import React from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Login from './login/login';
import Signup from './signup/signup';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import OTP from './Auth/OTP/OTP';
import ResetPassword from './Auth/ResetPassword/ResetPassword';
import PropertyDetail from './PropertyDetail/PropertyDetail';
import Verification from './Auth/Verification/Verification';
import Search from './Search/Search';
import ContactUs from './ContactUs/ContactUs';
import Blog from './Blog/Blog';
import FAQ from './FAQ/FAQ';
import LandownerBenefits from './LandownerBenefits/LandownerBenefits';
import ListingCalendar from './SubmitProperty/ListingCalendar/ListingCalendar';
import ListingDescription from './SubmitProperty/ListingDescription/ListingDescription';
import ListingDetails from './SubmitProperty/ListingDetails/ListingDetails';
import ListingImage from './SubmitProperty/ListingImage/ListingImage';
import ListingLocation from './SubmitProperty/ListingLocation/ListingLocation';
import ListingPrice from './SubmitProperty/ListingPrice/ListingPrice';
import ListingResponse from './SubmitProperty/ListingResponse/ListingResponse';
import Account from "./SideOptions/Account/Account";
import Booking from './SideOptions/Booking/Booking';
import Favorites from "./SideOptions/Favorites/Favorites";
import Message from './SideOptions/Message/Message';
import Notification from './SideOptions/Notification/Notification';
import Chats from './Chats/Chats';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './Protected'; 

function App() {
  const location = useLocation();
  const noFooterPaths = ["/login", "/signup", "/passwordrecovery", "/otp", "/passwordreset","/chats"];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/propertydetail" element={<PropertyDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/landownerbenefits" element={<LandownerBenefits />} />
        <Route path="/listingcalendar" element={<ListingCalendar/>}/>
        <Route path="/listingdescription" element={<ListingDescription/>}/>
        <Route path="/listingdetails" element={<ListingDetails />} />
        <Route path="/listingimage" element={<ListingImage />} />
        <Route path="/listinglocation" element={<ListingLocation />} />
        <Route path="/listingprice" element={<ListingPrice />} />
        <Route path="/listingresponse" element={<ListingResponse />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
        <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
        <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
        <Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default AppWrapper;
