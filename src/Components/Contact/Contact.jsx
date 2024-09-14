
import React from "react";
import "./Contact.css"; 

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Customer Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
          </div>

          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>

      {/* Right side: Company Contact Details */}
      <div className="company-details">
        <h2>Company Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Email:</strong> contact@company.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
