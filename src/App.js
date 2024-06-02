import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPopup from './components/LoginPopup'; // Ensure correct path
import AboutPage from './components/pages/About/AboutPage';
import ContactPage from './components/pages/Contact/ContactPage';
import HomePage from './components/pages/Home/HomePage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setShowLogin={setShowLogin} />
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/get-started" element={<GetStartedPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;