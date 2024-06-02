import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="c-container">
      <div className="c-content">
        <div className="c-left-side">
          <div className="address c-details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone c-details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email c-details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">codinglab@gmail.com</div>
            <div className="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div className="c-right-side">
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Your message..."></textarea>
            </div>
            <div className="c-button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
