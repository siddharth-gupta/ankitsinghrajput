import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+919718218808">+91 9718218808</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:ankit.rajput786@gmail.com">ankit.rajput786@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 