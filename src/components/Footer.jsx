import React from 'react';
import logo192 from '../logo192.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className="f-container">
        <div className="f-left">
          <div className="logo">
            <img src={logo192} alt="Logo" />
          </div>
          <div className="detail">
            <p>Your Local Advisor</p>
          </div>
        </div>
        <div className="f-right">
          <div className="contact">
            <div className="coloum">
              <h1>Contact</h1>
              <a href="#" className="address"><i className="fas fa-map-marker-alt"></i> Address</a>
              <a href="#" className="phone"><i className="fas fa-phone"></i> Phone Number</a>
              <a href="mailto:yourcompany@example.com" className="email"><i className="fas fa-envelope"></i> Email</a>
              <div className="icon">
                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="company">
            <div className="coloum">
              <h1>Company</h1>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">List Your Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="services">
            <div className="coloum">
              <h1>Services</h1>
              <a href="#">PG/Flats</a>
              <a href="#">Health Care</a>
              <a href="#">Laundry</a>
              <a href="#">Transport</a>
              <a href="#">Tiffin Services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
