import React, { useState } from "react";
import styles from "./Alumni.module.css";
import AlumniCard from "./AlumniCard";
import profile from "./alumniImages";

function AlumniPage() {
  const [alumniData] = useState([
     // --- New Alumni (from uploaded folder) ---
  {
    dp: profile.aabharnagupta,
    name: "Aabharan Gupta",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.aakasharora,
    name: "Aakash Arora",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.abhinavjain,
    name: "Abhinav Jain",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.abhyuday,
    name: "Abhyuday Venkatesh",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.akshara,
    name: "Akshara Manocha",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.anushka,
    name: "Anushka Sharma",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.jahnvi,
    name: "Jahnvi Ranjan",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.jini,
    name: "Jini Manchanda",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.khushi,
    name: "Khushi",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.khushpreet,
    name: "Khushpreet Singh",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.manya,
    name: "Manya Bansal",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.naman,
    name: "Naman Kumar",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.nutan,
    name: "Nutan",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.prarthana,
    name: "Prarthana Aggarwal",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.rohitarora,
    name: "Rohit Arora",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.rohitdeep,
    name: "Rohit Deepchandani",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.sarthak,
    name: "Sarthak Srivastava",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.shreyansh,
    name: "Shreyansh Srivastava",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.shreyasaini,
    name: "Shreya Saini",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.shreyasingh,
    name: "Shreya Singh",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.vivek,
    name: "Vivek Arora",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
  {
    dp: profile.yash,
    name: "Yash Bhargava",
    position: "Member",
    year: "2023-2024",
    company: "",
  },
    {
      dp: profile.kinshuk,
      name: "Kinshuk Kathpal",
      position: "General Secretary",
      year: "2023-2024",
      company: "Web Cue",
    },
    {
      dp: profile.vedant,
      name: "Vedant Gadodia",
      position: "General Secretary",
      year: "2023-2024",
      company: "Optum, Axxela",
    },
    {
      dp: profile.pranav,
      name: "Pranav Modgil",
      position: "Finance Secretary",
      year: "2023-2024",
      company: "IBM",
    },
    {
      dp: profile.awantika,
      name: "Awantika Awasthi",
      position: "Joint Secretary",
      year: "2023-2024",
      company: "Apple, Optum",
    },
    {
      dp: profile.bhoomika,
      name: "Bhoomika Vrati",
      position: "Joint Secretary",
      year: "2023-2024",
      company: "Fastenal, Optum",
    },
    {
      dp: profile.jigya,
      name: "Jigya Munjal",
      position: "Joint Secretary",
      year: "2023-2024",
      company: "Wayfair, Optum",
    },

    {
      dp: profile.naman,
      name: "Naman Soni",
      position: "Joint Secretary",
      year: "2023-2024",
      company: "BlackRock",
    },
    {
      dp: profile.tanmay,
      name: "Tanmay Deshkar",
      position: "Joint Secretary",
      year: "2023-2024",
      company: "NuvertOS",
    },
    {
      dp: profile.avirat,
      name: "Avirat Sharma",
      position: "Technical Secretary",
      year: "2023-2024",
      company: "ION group",
    },
    
    

    {
      dp: profile.vishnu,
      name: "Vishnu Batra",
      position: "Logistics Convener",
      year: "2023-2024",
      company: "Oracle",
    },

    {
      dp: profile.nehchal,
      name: "Nehchal Kaur",
      position: "Content Convener",
      year: "2023-2024",
      company: "Blackrock",
    },
    
    {
      dp: profile.aadil,
      name: "Aadil Garg",
      position: "Media Convenor",
      year: "2023-2024",
      company: "Findr",
    },
    {
      dp: profile.anushka,
      name: "Anushka Dewangan",
      position: "Finance Secretary",
      year: "2022-2023",
      company: "NVIDIA",
    },  

    {
      dp: profile.gurmehar,
      name: "Gurmehar Kaur Sibal",
      position: "Public Relations Executive",
      year: "2022-2023",
      company: "ZS ASSOCIATES",
    },    
  ]);

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.title}>OUR ALUMNI</div>
      </div>
      <div className={styles.alumniContainer}>
        {alumniData.map((alumni, index) => (
          <AlumniCard key={index} alumni={alumni} />
        ))}
      </div>
    </div>
  );
}
export default AlumniPage;
