import React from 'react';
import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import picture1 from '../../Picture1.png';
import picture2 from '../../Picture2.png';
import picture3 from '../../Picture3.png';
import heroBackground from '../../assets/hero-backimg.svg';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      className="home-wrapper"
      style={{
        backgroundImage: `url(${heroBackground}), linear-gradient(to bottom, #151218 35%, #ffffff 73%)`,
      }}
    >
      <div className='home-Container'>
        <div className="home-left">
          <div className="home-title">
            <div className="circle" />
            <h1>One-stop destination <br /> for all student <br /> needs</h1>
          </div>
          <div className="home-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
            <br />
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            <div className='search-left'>
              <HiLocationMarker color='blue' size={25} />
              <input type="text" placeholder='Where do you want your Living space' />
            </div>
            <button className="button">Search</button>
          </div>
          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Happy Customer
              </span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={5} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Premium Services
              </span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Award Winning
              </span>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="image-container">
            <Slider {...settings}>
              <div>
                <img src={picture1} alt="Picture 1" />
              </div>
              <div>
                <img src={picture2} alt="Picture 2" />
              </div>
              <div>
                <img src={picture3} alt="Picture 3" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
