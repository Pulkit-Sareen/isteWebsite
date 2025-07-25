import React, { useEffect } from "react";
import { DetailsProvider } from "./teamPageComponents/context/Context";
import ExecutiveCommitee from "./teamPageComponents/ExcecutiveCommitee";
import ExecutiveBoard from "./teamPageComponents/ExecutiveBoard";
import PresidentFaculty from "./teamPageComponents/PresidentFaculty";
import TeamFrontPage from "./teamPageComponents/TeamFrontPage";
import CorePage from "./teamPageComponents/CorePage";
import profile from "./teamPageComponents/indexImages";

const details = [
  {
    dp: profile.rajesh,
    name: "Dr. Rajesh Khanna",
    title: "President",
    info: "Dr. Rajesh Khanna, our president, has been a Professor of Electronics and Communication Engineering at Thapar Institute of Engineering and Technology since 1999. As the President of ISTE Thapar Chapter, his commitment has been pivotal in the society's success. His constant mentorship and guidance have significantly impacted students' professional and personal development. His dedication and commitment to the society and its members are truly inspiring. We are incredibly fortunate to have him as our President.",
    email: "rkhanna@thapar.edu",
  },
  {
    dp: profile.suman,
    name: "Ms. Suman Bhullar",
    title: "Vice President",
    info: "Ms. Suman Bhullar, our Vice President, has been working as an Assistant Professor in the Electrical and Instrumentation Engineering Department at Thapar Institute of Engineering & Technology since 2013. Being a proactive problem solver with an undying zeal for excellence, she inspires everyone working with her. As the Vice President of ISTE Thapar Chapter, her dedication to supporting and fostering students' various interests and ideas makes her an invaluable addition. We are extremely privileged to have her as our Vice President.",
    email: "suman.bhullar@thapar.edu",
  },
  {
    dp: profile.sarthak,
    name: "Sarthak Srivastava",
    title: "General Secretary",
    email: "ssrivastava3_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/sarthaksri017/",
  },
  {
    dp: profile.jahnvi,
    name: "Jahnvi Ranjan",
    title: "General Secretary",
    email: "jranjan_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/jahnvi-ranjan-5b864822b",
  },
  {
    dp: profile.yashb,
    name: "Yash Bhargava",
    title: "Finance Secretary",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/yashbhargavaa/",
  },
  {
    dp: profile.naman,
    name: "Naman Kumar",
    title: "Joint Secretary",
    email: "nkumar_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/namankumar2308/",
  },
  {
    dp: profile.aakash,
    name: "Aakash Arora",
    title: "Joint Secretary",
    email: "aarora8_be22@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/aakash-arora-798610249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.khushi,
    name: "Khushi",
    title: "Joint Secretary",
    email: "kkhushi1_be22@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/khushi-garg-1ab2b7258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.manya,
    name: "Manya Bansal",
    title: "Joint Secretary",
    email: "mbansal3_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/manya-bansal2026",
  },
  {
    dp: profile.anushka,
    name: "Anushka Sharma",
    title: "Convener",
    email: "asharma11_be22@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/anushka-sharma-868325255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.aabharan,
    name: "Aabharan Gupta",
    title: "Technical Secretary",
    email: "agupta1_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/aabharan-gupta-85a679256/",
  },
  {
    dp: profile.shreyansh,
    name: "Shreyansh Srivastava",
    title: "Media Secretary",
    email: "ssrivastava_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/shreyansh-srivastava-945034257/",
  },
  {
    dp: profile.nutan,
    name: "Nutan",
    title: "External Secretary",
    email: "nnutan_be22@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/nutan-jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.khushpreet,
    name: "Khushpreet Singh",
    title: "Content Executive",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/khushpreet-singh-mattneja/",
  },
  {
    dp: profile.shreyaS,
    name: "Shreya Saini",
    title: "Creativity Executive",
    email: "ssaini1_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/shreya-saini-327261258/",
  },
  {
    dp: profile.abhinav,
    name: "Abhinav Jain",
    title: "Design Executive",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/abhinavjain30/",
  },
  {
    dp: profile.shreyaSi,
    name: "Shreya Singh",
    title: "Documentation Executive",
    email: "ssingh5_be22@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/shreya-singh-81619a258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.abhyuday,
    name: "Abhyuday Venkatesh",
    title: "Event Management Executive",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/abhyuday-venkatesh-874aa71b6/",
  },
  {
    dp: profile.jini,
    name: "Jini Manchanda",
    title: "Logistics Executive",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/jini-manchanda-65b90b255/",
  },
  {
    dp: profile.akshara,
    name: "Akshara Manocha",
    title: "Marketing Executive",
    email: "amanocha_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/akshara-manocha-ab5101247/",
  },
  {
    dp: profile.rohit,
    name: "Rohit Arora",
    title: "Media Executive",
    email: "rarora2_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/rohit-arora-93415024a/",
  },
  {
    dp: profile.prarthana,
    name: "Prarthana Aggarwal",
    title: "Public Relations Executive",
    email: "paggarwal2_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/prarthana-agg/",
  },
  {
    dp: profile.vivek,
    name: "Vivek Arora",
    title: "Technical Executive",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/vivek-arora-b21a29257/",
  },
  {
    dp: profile.rohitd,
    name: "Rohit Deepchandani",
    title: "UI/UX Executive",
    email: "rdeepchandani_be22@thapar.edu",
    linkdin: "https://www.linkedin.com/in/rohit-deepchandani-134766264/",
  },
  //core members
  {
    dp: profile.abhivinesh,
    name: "Abhinivesh Sharma",
    title: "Core Member",
    info: "Abhinivesh is an innovative content and technical team member known for his creative approach and work ethic.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/company/iste-thapar/",
  },
  {
    dp: profile.ayush,
    name: "Ayush Garg",
    title: "Core Member",
    info: "Ayush is a standout in our design team, renowned for his visionary ideas, meticulous attention to detail, and exceptional artistic talent",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/ayush-garg-0987ba286/",
  },
  {
    dp: profile.bhavika,
    name: "Bhavika",
    title: "Core Member",
    info: "Bhavika's cheerful personality brings liveliness to the media department, while her creativity and visual skills make her exceptional at creating captivating pieces that elevate our image.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/company/iste-thapar/",
  },
  {
    dp: profile.bhavya,
    name: "Bhavya",
    title: "Core Member",
    info: "Bhavya is a champ in the technical and media team, demonstrating resourcefulness, innovation, and attention to detail in all tasks.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/bhavya-agarwal-3a2a14289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.diya,
    name: "Diya",
    title: "Core Member",
    info: "Diya is the creative spark of our society, known for her fresh ideas and unique approach to everything she works on. Her contributions to content always bring something exciting and new.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/company/iste-thapar/",
  },
  {
    dp: profile.garv,
    name: "Garv Chopra",
    title: "Core Member",
    info: "Garv is the cornerstone of ISTE's tech department. Whether leading workshops or mentoring peers, his work is the perfect blend of knowledge and enthusiasm and he inspires those around him.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/garv-chopra-5673a7302",
  },
  {
    dp: profile.hariyank,
    name: "Haryiank Kumra",
    title: "Core Member",
    info: "Haryiank, a key member of our technical team, is known for his sharp problem-solving skills, innovative ideas, and collaborative spirit.",
    email: "iste@thapar.edu",
    linkdin: "https://in.linkedin.com/in/haryiank-kumra-09374b202",
  },
  {
    dp: profile.himanish,
    name: "Himanish Puri",
    title: "Core Member",
    info: "Himanish, a tech genius in our crew, is renowned for his cutting-edge concepts, groundbreaking ideas, and team-oriented approach.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/himanish-puri-b47468321/",
  },
  
  {
    dp: profile.ishaan,
    name: "Ishaan Sharma",
    title: "Core Member",
    info: "Ishaan is a vibrant and resourceful member of our marketing team. His innovative and adaptable nature fuels our success",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/ishaan-sharma-6062bb291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.ishaanP,
    name: "Ishan Pathak",
    title: "Core Member",
    info: "With a knack for problem-solving, Ishaan consistently delivers innovative solutions that elevate our technical projects to new heights. His passion for technology and dedication make him an invaluable asset to our team.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/ishan-pathak-022604291/",
  },
  {
    dp: profile.ishita,
    name: "Ishita Singh Oberoi",
    title: "Core Member",
    info: "Ishita, a powerhouse in our content and technical team, is revered for her inventive strategies, visionary thinking, and cooperative spirit in elevating our projects.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/ishita-singh-oberoi-5a2493291",
  },
  {
    dp: profile.janya,
    name: "Janya",
    title: "Core Member",
    info: "Janya is a true social butterfly who effortlessly connects with everyone.Her infectious smile and keen mind make her an invaluable member of our marketing department.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/janya-makhija-114377245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    dp: profile.kashvi,
    name: "Kashvi Sharma",
    title: "Core Member",
    info: "Driven by a remarkable work ethic, Kashvi is like a breath of fresh air. Her relentless efforts and vibrant demeanor, make her a crucial member of the content department.",
    email: "iste@thapar.edu",
    linkdin: "http://linkedin.com/company/iste-thapar/",
  },
  {
    dp: profile.kaushik,
    name: "Kaushik Arora",
    title: "Core Member",
    info: "Kaushik, a creative mind in the media department, is the epitome of diligence, inquisitivity and ingenuity and is an integral member of the ISTE family.",
    email: "iste@thapar.edu",
    linkdin: "http://linkedin.com/in/kaushik-arora-0b9148291",
  },
  {
    dp: profile.lakshita,
    name: "Lakshita Gupta",
    title: "Core Member",
    info: "Lakshita, a true Tech Wizard, who never backs out from a challenge and always takes initiative also keeps the fire of teamwork well lit.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/lakshita-gupta-75844b2b4",
  },
  {
    dp: profile.meenal,
    name: "Meenal",
    title: "Core Member",
    info: "Meenal an integral pillar in the marketing and tech department who’s commendable innovation and enthusiastic zeal know no bounds.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/meenal-chhabra-744464291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.paras,
    name: "Paras Dhawan",
    title: "Core Member",
    info: "Paras is the pivotal force behind our media department. His deep understanding of visual media ensures that our stories are not just heard but felt and his zeal shines through all his work.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/paras-dhawan-7a6312304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    dp: profile.rishabh,
    name: "Rishabh Garg",
    title: "Core Member",
    info: "With a keen eye for detail and exceptional video editing skills, Rishabh brings stories to life through captivating visuals. His fun-loving spirit creates a collaborative atmosphere in the society.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/rishabh-garg-9b3901288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    dp: profile.ritigya,
    name: "Ritigya Singh",
    title: "Core Member",
    info: "Ritigya is a vital member of the design team known for her elegant and breathtaking visual arts. Her contemporary and vibrant aesthetics breath lives in our designs.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/ritigya-singh-1a7946275",
  },
  {
    dp: profile.saarthi,
    name: "Saarthi Arora",
    title: "Core Member",
    info: "Saarthi a truly essential member of the content department is known for his undying creativity and innovative approach is an intrinsic member of the society. ",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/saarthi-arora-849656243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    dp: profile.sakshat,
    name: "Sakshat Jain",
    title: "Core Member",
    info: "A meticulous fellow, Sakshat, has never failed to put forth his many qualities like attention to detail, inclusive collaboration and fastidious dedication into any project he undertakes.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/sakshatjain/",
  },
  {
    dp: profile.sneha,
    name: "Sneha",
    title: "Core Member",
    info: "With a natural aptitude for technology, Sneha excels at tackling complex challenges behind the scenes, making her an indispensable member of the society.",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/sneha-mittal-7354502a2",
  },
  {
    dp: profile.tanishq,
    name: "Tanishq Soni",
    title: "Core Member",
    info: "An essential member of the tech department Tanishq never fails to display his pioneering mindset and is an astute and diligent member of this club. ",
    email: "iste@thapar.edu",
    linkdin: "https://www.linkedin.com/in/tanishq-soni-35a60a28a/",
  },
  {
    dp: profile.vaaris,
    name: "Vaaris Sidhu",
    title: "Core Member",
    info: "Vaaris, a sharp minded and amicable member of ISTE's content department is always ready to lend a hand and to help promote our mission through his brilliant ideas.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/vaaris-sidhu-b84722321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  
  {
    dp: profile.yashita,
    name: "Yashita Gupta",
    title: "Core Member",
    info: "Yashita, a vital part of the technical department embodies unwavering relentlessness and industrious creativity.",
    email: "iste@thapar.edu",
    linkdin:
      "https://www.linkedin.com/in/yashita-gupta-495387291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

function TeamsPage() {
  useEffect(() => {
    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add(entry.target.dataset.animationClass);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const titleElements = document.getElementsByClassName("title");
    Array.from(titleElements).forEach((title) => {
      title.dataset.animationClass = "fadeInAnimation";
      observer.observe(title);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main no_scroll">
      <DetailsProvider value={details}>
        <TeamFrontPage />
        <PresidentFaculty />
        <ExecutiveBoard />
        <ExecutiveCommitee />
        <CorePage />
      </DetailsProvider>
    </div>
  );
}

export default TeamsPage;
