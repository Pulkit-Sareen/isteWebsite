import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { whiteLogo } from '../../assets/images';
const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-logo">
              <img src={whiteLogo} alt="ISTE Logo" />
            </div>
            <center className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/team">Team</Link>
              <Link to="/events">Event</Link>
              <Link to="/contact">Contact us</Link>
              {/* <Link href="/link5">Link Five</Link> */}
            </center>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/ISTE.Thapar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/iste_tiet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/iste-thapar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              {/* <Link
                href="https://twitter.com/iste_thapar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </Link> */}
            </div>
          </div>
          <hr className="footer-divider" />
          {/* <center className="footer-policy">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookies Settings</Link>
          </center> */}
          <p>© 2024 ISTE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
