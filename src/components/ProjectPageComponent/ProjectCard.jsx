import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import LearnMoreBox from './LearnMoreBox';

function ProjectCard({ name, desc, images, link, Moredesc }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && timerActive && !showLearnMore) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1100);
    }
    return () => clearInterval(interval);
  }, [isHovered, timerActive, showLearnMore, images]);

  const handleMouseEnter = () => {
    if (!showLearnMore) {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      setIsHovered(true);
      setTimerActive(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimerActive(false);
  };

  const handleCloseLearnMore = () => {
    setShowLearnMore(false);
    // Reset animation state when modal closes
    setIsHovered(false);
    setTimerActive(false);
  };

  return (
    <div
      className='card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fade-carousel">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={name}
            className={`fade-image ${i === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <h3>{name}</h3>
      <p>{desc}</p>
      <button onClick={() => setShowLearnMore(true)}>Read more</button>

      {showLearnMore && (
        <LearnMoreBox
          name={name}
          link={link}
          images={images}
          Moredesc={Moredesc}
          onClose={handleCloseLearnMore}
        />
      )}
    </div>
  );
}

export default ProjectCard;









