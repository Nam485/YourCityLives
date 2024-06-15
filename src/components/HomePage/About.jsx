import React, { useEffect, useRef } from 'react';
import about1 from '../../assets/about-1.jpg';
import about2 from '../../assets/about-2.jpg';
import about3 from '../../assets/about-3.jpg';
import about4 from '../../assets/about-4.jpg';
import about5 from '../../assets/about-5.jpg';
import about6 from '../../assets/about-6.jpg';
import about7 from '../../assets/about-7.jpg';
import about8 from '../../assets/about-8.jpg';
import about9 from '../../assets/about-9.jpg';
import './About.css';

const About = () => {
  const containersRef = useRef([]);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const containers = containersRef.current.filter((ref) => ref !== null && ref !== undefined);

      containers.forEach((container) => {
        const isVisible = isElementPartiallyInViewport(container);
        if (isVisible) {
          container.classList.add('animate');
        }
      });
    };

    const isElementPartiallyInViewport = (el) => {
      if (!el) return false;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      return (
        rect.top < windowHeight && rect.bottom >= 0
      );
    };

    // Initial call to handle scroll animations
    handleScrollAnimations();

    // Event listener for scroll events
    window.addEventListener('scroll', handleScrollAnimations);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  return (
    <div className='a-wrapper'>
      <div className="headings">
        <div className="heading">
          <h1><span>Not just</span> four walls and a roof</h1>
          <p>Come over and experience how a place to stay can be so much more</p>
        </div>
      </div>

      {/* Container 1 */}
      <div ref={(ref) => containersRef.current.push(ref)} className="container1">
        <div className="detail">
          <div className="detail-left">
            <div className="detail-left-l">
              <img src={about1} alt="About 1" />
            </div>
            <div className="detail-left-r">
              <img src={about2} alt="About 2" />
              <img src={about3} alt="About 3" />
            </div>
          </div>
          <div className="detail-right">
            <h3>Start living your best life <br />from <span>day one</span></h3>
            <div className="data">Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</div>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div ref={(ref) => containersRef.current.push(ref)} className="container">
        <div className="detail">
          <div className="detail-right">
            <h3>Start living your best life <br />from <span>day one</span></h3>
            <div className="data">Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</div>
            <button className="explore-button">Explore More</button>
          </div>
          <div className="detail-left">
            <div className="detail-left-r">
              <img src={about5} alt="About 5" />
              <img src={about6} alt="About 6" />
            </div>
            <div className="detail-left-l">
              <img src={about4} alt="About 4" />
            </div>
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div ref={(ref) => containersRef.current.push(ref)} className="container1">
        <div className="detail">
          <div className="detail-left">
            <div className="detail-left-l">
              <img src={about7} alt="About 7" />
            </div>
            <div className="detail-left-r">
              <img src={about8} alt="About 8" />
              <img src={about9} alt="About 9" />
            </div>
          </div>
          <div className="detail-right">
            <h3>Start living your best life <br />from <span>day one</span></h3>
            <div className="data">Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</div>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
