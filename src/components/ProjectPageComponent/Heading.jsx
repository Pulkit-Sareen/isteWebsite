import React from 'react'
import styles from "./Heading.module.css";
import { Link } from 'react-router-dom';
import OurProject from './OurProject';

function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Our Projects</h1>
        <p className={styles.content}>We as a technical community aim to innovate and solve problems faced by people . Our passionate team of tech enthusiasts come up with innovative real life solutions to tackle such problems</p>
      </div>
      <OurProject />
    </>
      )
}


export default Heading
