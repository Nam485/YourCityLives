import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo192 from '../logo192.png';
import './Header.css';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.dropdown')) {
      setDropdownOpen(false);
    }
  };

  const handleLogin = () => {
    setShowLoginPopup(true);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  // useEffect to handle closing dropdown on outside click
  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src={logo192} alt="Logo" width={120} />
        </div>
        <div className="h-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <div className="dropdown">
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              <a href="/"><span> Services </span></a>{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`arrow-icon ${dropdownOpen ? 'rotate' : ''}`}
              />
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/pg-flats">PG/Flats</Link>
                <Link to="/healthcare">HealthCare</Link>
                <Link to="/laundry">Laundry</Link>
                <Link to="/transport">Transport</Link>
                <Link to="/tiffin-service">Tiffin service</Link>
              </div>
            )}
          </div>
          <Link to="/get-started">Get Started</Link>
          <button className="h-button" onClick={handleContactClick}>Contact</button>
          <div className="login-icon" onClick={handleLogin}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      {showLoginPopup && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
    </section>
  );
};

export default Header;