import React from 'react';
import './CityCard.css';

const CityCard = () => {
  const cities = [
    { name: 'bangalore', hoverImage: '/CityCard_img/Bangalore.png' },
    { name: 'chennai', hoverImage: '/CityCard_img/Chennai.png' },
    { name: 'coimbatore', hoverImage: '/CityCard_img/Coimbatore.png' },
    { name: 'delhi', hoverImage: '/CityCard_img/Delhi.png' },
    { name: 'gurugram', hoverImage: '/CityCard_img/Gurugram.png' },
    { name: 'hyderabad', hoverImage: '/CityCard_img/Hyderabad.png' },
    { name: 'mumbai', hoverImage: '/CityCard_img/Mumbai.png' },
    { name: 'noida', hoverImage: '/CityCard_img/Noida.png' },
    { name: 'pune', hoverImage: '/CityCard_img/Pune.png' },
  ];

  return (
    <div className='cc-wrapper'> 
      {cities.map((city, index) => (
        <a href="#" key={index}>
          <div className={`cc-container`} style={{ '--hover-image': `url(${city.hoverImage})` }}>
            <img src={`/CityCard_img/${city.name}.svg`} alt={city.name} />
            <div className='textComponent'>
              {city.name.charAt(0).toUpperCase() + city.name.slice(1).replace('_', ' ')}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CityCard;
