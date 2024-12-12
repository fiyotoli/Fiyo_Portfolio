import React from "react";
import { FaLinkedinIn, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import './footer.css'; // Import the external CSS for footer styling

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-5">
      <div className="container">
        {/* Text Logo */}
        <h3 className="text-success mb-3">MyPortfolio</h3>

        {/* Description Paragraph */}
        <p className="text-muted">
          A showcase of my creative work and projects. Connect with me on social media or explore my portfolio.
        </p>

        {/* Social Media Icons */}
        <div className="social-icons d-flex justify-content-center mb-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/tasfaynesh-tolasa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaLinkedinIn size={24} />
            </div>
          </a>

          {/* Telegram Icon */}
          <a
            href="https://t.me/sabelatt"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Telegram"
          >
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaTelegramPlane size={24} />
            </div>
          </a>

          {/* Email Icon */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=tasfayneshtolasa35@gmail.com"
  className="social-icon"
  aria-label="Email"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
    <FaEnvelope size={24} />
  </div>
</a>

        </div>

        {/* Copyright */}
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
