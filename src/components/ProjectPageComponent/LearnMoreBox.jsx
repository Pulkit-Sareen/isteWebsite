import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './LearnMoreBox.css';
import { FaGithub, FaGoogle } from "react-icons/fa";

function LearnMoreBox({ name, Moredesc, images, gitLink, googleLink, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  const modalContent = (
    <div className="learnmore">
      <div className="box">
        <button className="button" onClick={onClose}>X</button>

        <div className="learnmore-carousel">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={name}
              className={`image ${i === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="learnmore-content">
          <h2>{name}</h2>
          <p>{Moredesc}</p>

          <div className="icons">
            {gitLink && (
              <a href={gitLink} target="_blank" rel="noopener noreferrer" className="icon">
                <FaGithub />
              </a>
            )}
            {googleLink && (
              <a href={googleLink} target="_blank" rel="noopener noreferrer" className="icon">
                <FaGoogle />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}

export default LearnMoreBox;
