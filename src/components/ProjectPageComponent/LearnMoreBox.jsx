// import React, { useState, useEffect } from 'react';
// import './LearnMoreBox.css';
// import githubIcon from '../assets/github.png';
// import "./LearnMoreBox.css";

// function LearnMoreBox({ name, Moredesc, images, link, onClose }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [timerActive, setTimerActive] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isHovered && timerActive) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 1100);
//     }
//     return () => clearInterval(interval);
//   }, [isHovered, images, timerActive]);

//   const handleMouseEnter = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//     setIsHovered(true);
//     setTimerActive(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setTimerActive(false);
//   };

//   return (
//     <div className="learnmore">
//       <div className="box">
//         <button className="button" onClick={onClose}>X</button>
//           <div className='firstrow'>   
//         <div
//           className="learnmore-carousel"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {images.map((image, i) => (
//             <img
//               key={i}
//               src={image}
//               alt={name}
//               className={`image ${i === currentIndex ? 'active' : ''}`}
//             />
//           ))}
//         </div>

//          <p1>{Moredesc}</p1> </div>
//         <h2>{name}</h2>




//         <a href={link} target='_blank' rel='noopener noreferrer'>
//           <img src={githubIcon} alt="GitHub" className='icon' />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default LearnMoreBox;

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './LearnMoreBox.css';
// import githubIcon from '../../assets/images/github.png';

// function LearnMoreBox({ name, Moredesc, images, link, onClose }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <div className="learnmore">
//       <div className="box">
//         <button className="button" onClick={onClose}>X</button>

//         <div className='firstrow'>   
//           <div className="learnmore-carousel">
//             {images.map((image, i) => (
//               <img
//                 key={i}
//                 src={image}
//                 alt={name}
//                 className={`image ${i === currentIndex ? 'active' : ''}`}
//               />
//             ))}
//           </div>
//           <p>{Moredesc}</p> 
//         </div>

//         <h2>{name}</h2>
//         <a href={link} target='_blank' rel='noopener noreferrer'>
//           <img src={githubIcon} alt="GitHub" className='icon' />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default LearnMoreBox;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './LearnMoreBox.css';
import githubIcon from '../../assets/images/github.png';

function LearnMoreBox({ name, Moredesc, images, link, onClose }) {
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

        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}

export default LearnMoreBox;
