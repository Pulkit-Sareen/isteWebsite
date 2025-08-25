import React, {useEffect,useRef,useState} from 'react'
import styles from "./Heading.module.css";
import { Link } from 'react-router-dom';
import OurProject from './OurProject';

function Heading() {
  const projectHeading = useRef(null);
  const [headingVisible, setEventVisible]=useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      const triggerPoint = window.innerHeight*0.7;
      if (projectHeading.current && !headingVisible) {
        const top = projectHeading.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setEventVisible(true);
      }

    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingVisible]);
  return (
    <>
      <div className={styles.header}>
        <h1 ref={projectHeading} className={`${styles.heading} ${headingVisible ? styles.underlineAnimate : ""
          }`}>Our Projects</h1>
        <p className={styles.content}>We as a technical community aim to innovate and solve problems faced by people . Our passionate team of tech enthusiasts come up with innovative real life solutions to tackle such problems</p>
      </div>
      <OurProject />
    </>
      )
}


export default Heading
