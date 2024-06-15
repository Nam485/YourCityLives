import React from 'react';
import './CityCard.css';

const CityCard = () => {
  const cities = [
    { name: 'bangalore', hoverImage: 'Bangalore.png' },
    { name: 'chennai', hoverImage: 'Chennai.png' },
    { name: 'coimbatore', hoverImage: 'Coimbatore.png' },
    { name: 'delhi', hoverImage: 'Delhi.png' },
    { name: 'gurugram', hoverImage: 'Gurugram.png' },
    { name: 'hyderabad', hoverImage: 'Hyderabad.png' },
    { name: 'mumbai', hoverImage: 'Mumbai.png' },
    { name: 'noida', hoverImage: 'Noida.png' },
    { name: 'pune', hoverImage: 'Pune.png' },
  ];

  return (
    <div className='cc-wrapper'> 
      {cities.map((city, index) => (
        <a href="#" key={index}>
          <div className={`cc-container`} style={{ '--hover-image': `url(${require(`../../CityCard_img/${city.hoverImage}`)})` }}>
            <img src={require(`../../CityCard_img/${city.name}.svg`)} alt={city.name} />
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
