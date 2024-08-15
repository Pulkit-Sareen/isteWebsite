import React from "react";
import styles from "./Homepage1.module.css";
import Cards from "./Cards";

function Homepage1() {
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.intro}>
          <h3>Introducing</h3>
          <h1>ISTE</h1>
          <h2>Indian Society For</h2>
          <span>
            <h2>Technical Education</h2>
          </span>
        </div>
        <div className={styles.subsection}>
          {/* <h3>ISTE</h3> */}
          <h1>A place to learn, to thrive, to grow</h1>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Homepage1;
