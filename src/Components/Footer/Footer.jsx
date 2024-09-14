import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        {/* Replace with your company logo */}
        <img src="/path/to/your/logo.png" alt="Company Logo" className="company-logo" />
        <p className="company-words">Your Company Tagline or Motto</p>
      </div>

      <div className="footer-section footer-contact">
        <p><strong>Company Name</strong></p>
        <p>1234 Street Name, City, State, Zip Code</p>
        <p>Email: contact@company.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div className="footer-section footer-subscribe">
        <p>Stay connected with us for future updates:</p>
        <form>
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
