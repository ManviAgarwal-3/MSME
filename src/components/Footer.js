// src/Footer.js
import React from 'react';
import './Footer.css'; // Import the updated CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h1 className="footer-logo">TravelWise</h1>
          <p>Your go-to destination for safe and enjoyable travels.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-emergency">
          <h4>Emergency Services</h4>
          <p><a href="#emergency">Call Emergency Services</a></p>
          <p><a href="#local">Local Contacts</a></p>
        </div>

        <div className="footer-subscribe">
          <h4>Subscribe for Updates</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">🌐</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#linkedin" aria-label="LinkedIn">🔗</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TravelWise. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
