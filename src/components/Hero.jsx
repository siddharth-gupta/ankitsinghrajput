import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="name">Ankit</h1>
          <h1 className="surname">Singh</h1>
          <p className="location">(Based in India)</p>
        </div>
        <div className="hero-subtitle">
          <h2>Senior Category Manager driving growth and innovation in e-commerce.</h2>
        </div>
        <div className="expertise">
          <div className="expertise-item">
            <span className="label">Category</span>
            <span className="value">Management</span>
          </div>
          <div className="expertise-item">
            <span className="label">Program</span>
            <span className="value">Excellence</span>
          </div>
          <div className="expertise-item">
            <span className="label">Revenue</span>
            <span className="value">Strategy</span>
          </div>
        </div>
        <div className="contact-brief">
          <a href="tel:+919718218808">+91 9718218808</a>
          <span className="separator">|</span>
          <a href="mailto:ankit.rajput786@gmail.com">ankit.rajput786@gmail.com</a>
          <span className="separator">|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>(Scroll Down)</span>
        <i className="fas fa-arrow-down"></i>
      </div>
    </section>
  );
};

export default Hero; 