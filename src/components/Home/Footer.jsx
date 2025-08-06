import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/images";
import {FaEnvelope, FaArrowRight } from "react-icons/fa";
import { MdPhone} from "react-icons/md";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <footer className="footer">
        <div className="footer-container">
          <div className="footerLogo">
            <div className="logo-text">
              <img src={whiteLogo} alt="ISTE Logo" />
              <p>
                Empowering students through technology, innovation, and
                community. Join us in building the future and making a lasting
                impact in the tech world.
              </p>
            </div>
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
            </div>
          </div>

          <center className="footer-links">
            <h2>Quick Links</h2>
            <div className="footerLinks">
              <Link to="/"><FaArrowRight />Home</Link>
              <Link to="/team"><FaArrowRight />Team</Link>
              <Link to="/events"><FaArrowRight />Event</Link>
              <Link to="/alumni"><FaArrowRight />Alumni</Link>
              <Link to="/contact"><FaArrowRight />Contact us</Link>
            </div>
          </center>

          <div className="footerContact">
            <h2>Contact</h2>
            <div className="contacts">
              <p><FaEnvelope />iste.thapar@gmail.com</p>
              <p><MdPhone />(123)-456-789</p>
            </div>
          </div>
        </div>

        <p className="footerEnd">© 2025 ISTE. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;