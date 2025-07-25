import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import styles from "./OurProject.module.css";

const OurProject = () => {
  return (
    <div className={styles.cardContainer}>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
         images={project.images}
          name={project.name}
          desc={project.desc}
          link={project.link}
          Moredesc={project.Moredesc}
          // Moredesc={More.desc}
        />
      ))}
    </div>
  );
};

export default OurProject;
