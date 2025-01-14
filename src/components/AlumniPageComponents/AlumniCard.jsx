import React from "react";
import styles from "./AlumniCard.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const AlumniCard = ({ alumni }) => {
  return (
    <div className={styles.alumniCard}>
      <div className={styles.alumniImage}>
        <img src={alumni.dp} alt={`${alumni.name}'s profile`} />
      </div>
      <h3 className={styles.alumniName}>{alumni.name}</h3>
      <p className={styles.alumniPosition}>{`( ${alumni.position} )`}</p>
      <p className={styles.alumniYear}>{alumni.year}</p>
      <p className={styles.alumniCompany}>{alumni.company}</p>
    </div>
  );
};

export default AlumniCard;
