// import React from "react";
// import Card from "./Card/Card";
// import useDetails from "./context/Context";

// function ExecutiveCommitee() {
//   const details = useDetails();

//   return (
//     <>
//       <div className="president_eb_ec core__page font-['Roboto']">
//         <div className="eb flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem]">
//           <div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold">
//             EXECUTIVE COMMITTEE
//           </div>
//         </div>

//         <div className="flex flex-col gap-y-8 items-center justify-center mt-12 sm:mt-16 md:mt-24">
//           <div
//             data-aos="fade-up"
//             data-aos-once="true"
//             className="gap-4 sm:gap-6 md:gap-8 justify-center flex-wrap flex"
//             onContextMenu={(e) => e.preventDefault()}
//           >
//             {details
//               .filter((_, i) => i >= 13 && i <= 23)
//               .map((val, i) => (
//                 <div key={i + 13} className="align_items_center">
//                   <Card details={val} />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ExecutiveCommitee;













import React from 'react';
import profile from './indexImages';
import styles from "./TeamPage.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ExecutiveCommittee = () => {
  const title = 'EXECUTIVE COMMITTEE';
  const description =
    'Dedicated organizers creating engaging events, workshops, and community building activities.';

  const members = [
    { name: 'Saarthi Arora', role: 'Content Executive', image: profile.saarthi },
    { name: 'Ayush Garg', role: 'Design Executive', image: profile.ayush },
    { name: 'Tanishq Soni', role: 'Software Executive', image: profile.tanishq },
    { name: 'Dixant', role: 'External Secretary', image: profile.dixant },
    { name: 'Rishabh Garg', role: 'Media Executive', image: profile.rishabh },
    { name: 'Garv Chopra', role: 'Technical Executive', image: profile.garv },
  ];

  return (
    <section id="executive-committee" className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionDescription}>{description}</p>
      <div className={styles.ecGrid}>
        {members.map((member, idx) => (
          <div key={idx} className={styles.ecCard}>
            <img src={member.image} alt={member.name} className={styles.ecImage}/>
            <h4 className={styles.ecName}>{member.name}</h4>
            <p className={styles.ecRole}>{member.role}</p>
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

export default ExecutiveCommittee;
