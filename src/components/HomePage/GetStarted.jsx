import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className='get-started'>
      <div className="g-container">
        <div className="inner-container">
          <span className='secondaryText1'>Get Started with YourCityLives</span>
          <span className='primaryText'>
            "Subscribe and receive super attractive price quotes from us."
            <br />
            "Find your place soon."
          </span>
          <button onClick={() => window.location.href = 'mailto:namitgoyal485@gmail.com'}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
