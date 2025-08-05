// import React from "react";
// import CoreCard from "./Card/CoreCard";
// import useDetails from "./context/Context";

// function CorePage() {
//   const details = useDetails();

//   return (
//     <div id="corePage" className="president_eb_ec font-['Roboto'] ">
//       <div className="eb flex flex-col items-center justify-center gap-y-6 w-full max-w-[48rem] align_items-center">
//         <div className="text-[#6C90C2] text-3xl sm:text-4xl md:text-5xl font-bold ">
//           CORE
//         </div>
//       </div>

//       <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24 mt-12 sm:mt-16 md:mt-24">
//         <div
//           data-aos="fade-up"
//           data-aos-once="true"
//           className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
//           onContextMenu={(e) => e.preventDefault()}
//         >
//           {details
//             .filter((_, i) => i >= 24)
//             .map((val, i) => (
//               <div
//                 key={i + 24}
//                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 align_items_center"
//               >
//                 <CoreCard details={val} />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CorePage;
















import React from 'react';
import profile from './indexImages';
const CoreMembers = () => {
  const title = 'CORE MEMBERS';
  const description =
    'The innovators and creators who transform ideas into reality through code and collaboration.';

  const names = [
    'Anshika Rathore', 'Saanvi', 'Rudraksh Chugh', 'Aryan Sharma', 'Prisha Acharya',
    'Divyam Mittal', 'Devyansh Arya', 'Mehar Ahuja', 'Marushika', 'Aryan Pal', 'Arshia', 'Arpit',
    'Manya', 'Geetika Parakh', 'Pulkit', 'Navjot', 'Arjites', 'Shaina Gera', 'Nishika', 'Molika',
    'Aditya', 'Deepak Kumar', 'Ashit', 'Udhey', 'Yuvraj',
  ];

  const members = names.map(name => ({
    name,
    image: `/images/${name.toLowerCase().replace(/ /g, '_')}.jpg`,
  }));

  return (
    <section id="core-members">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {members.map((member, idx) => (
          <div key={idx}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreMembers;
