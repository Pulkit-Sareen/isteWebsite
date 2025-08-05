// import PresidentCard from "./Card/PresidentCard";
// import useDetails from "./context/Context";

// function PresidentFaculty() {
//   const details = useDetails();

//   return (
//     <div
//       id="president"
//       className="align-container-center president_eb_ec px-4 sm:px-8 "
//     >
//       <div className="eb flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem]">
//         <div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-align-center">
//           FACULTY
//         </div>
//       </div>
//       <div
//         data-aos="fade-up"
//         data-aos-once="true"
//         className="flex flex-row lg_flexrow gap-6 sm:gap-6 md:gap-8 justify-start items-start w-full"
//         onContextMenu={(e) => e.preventDefault()}
//       >
//         <PresidentCard
//           details={details[0]}
//           className="fac w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//         />
//         <PresidentCard
//           details={details[1]}
//           className="fac w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//         />
//       </div>
//     </div>
//   );
// }

// export default PresidentFaculty;
















import React from "react";
import styles from "./TeamPage.module.css";
import profile from "./indexImages"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const facultyMembers = [
  {
    name: 'Dr. Rajesh Khanna',
    role: 'President',
    description:
      "Dr. Rajesh Khanna, Professor at Thapar since 1999, has been a guiding force behind ISTE’s success. His mentorship and dedication continue to inspire and shape our journey.",
    image: profile.rajesh,
  },
  {
    name: 'Ms. Suman Bhullar',
    role: 'Vice-President',
    description:
      "Ms. Suman Bhullar, Assistant Professor at Thapar since 2013, brings passion and problem-solving excellence to ISTE as our Vice President. Her support for students’ ideas and growth makes her an invaluable asset to the chapter.",
    image: profile.suman,
  },
];

const FacultySection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>FACULTY MEMBERS</h2>
      <p className={styles.sectionDescription}>
        Experienced professors and industry experts guiding our technical journey and research initiatives.
      </p>
      <div className={styles.facultyGrid}>
        {facultyMembers.map((member, index) => (
          <div key={index} className={styles.facultyCard}>
            <img src={member.image} alt={member.name} className={styles.facultyImage} />
            <h3 className={styles.facultyName}>{member.name}</h3>
            <h4 className={styles.facultyRole}>{member.role}</h4>
            <p className={styles.facultyDescription}>{member.description}</p>
            
            <div className={styles.socials}>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
