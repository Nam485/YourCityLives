import React from 'react';
import './Consultancy.css';

const Consultancy = () => {
  return (
    <div className='c-wrapper'>
        <h1>Can't find your perfect place ?</h1>
        <span>Let's find a place for you</span>
        <div className="details">
            <div className="title">
              <h3>First Name</h3>
              <input type="text" placeholder='First Name' />
            </div>
            <div className="title">
              <h3>Last Name</h3>
              <input type="text" placeholder='Last Name' />
            </div>
            <div className="title">
              <h3>Email</h3>
              <input type="text" placeholder='Email' />
            </div>
            <div className="title">
              <h3>Phone Number</h3>
              <input type="text" placeholder='Phone Number' />
            </div>
        <button className="Submit-button">Submit</button>
        </div>
      </div>
  );
}

export default Consultancy;
