import React, { useEffect } from "react";
import "./index.css";
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
		info: "Dr. Rajesh Khanna, our president, has been a Professor of Electronics and Communication Engineering at Thapar Institute of Engineering and Technology since 1999. As the President of ISTE Thapar Chapter, his commitment has been pivotal in the society's success. His constant mentorship and guidance have significantly impacted students' professional and personal development. His unending dedication and commitment to the society and its members are truly inspiring to all its members. We are incredibly fortunate to have him as our President.",
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
	{
		dp: profile.aarushi,
		name: "Aarushi Rawal",
		title: "Core Member",
		info: "Aarushi, a true content mogul has an undying enthusiastic spirit, a zeal for exemplary innovation and embodies the connotation of teamwork like no other.",
		email: "iste@thapar.edu",
		linkdin:
			"https://www.linkedin.com/in/aarushi-rawal-028659283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.abhivinesh,
		name: "Abhinivesh Sharma",
		title: "Core Member",
		info: "Abhinivesh is an innovative content and technical team member known for his creative approach and work ethic.",
		email: "iste@thapar.edu",
		linkdin: "",
	},
	{
		dp: profile.ajinkya,
		name: "Ajinkya Hon",
		title: "Core Member",
		info: "Ajinkya shines in the media team, embodying creativity, resourcefulness, and innovation in all endeavors.",
		linkdin: "https://www.linkedin.com/in/ajinkya-hon-032253280/",
	},
	{
		dp: profile.ansh,
		name: "Ansh Bajaj",
		title: "Core Member",
		info: "Ansh is a vital member of the marketing team, recognized for his creative campaigns and strategic thinking.",
		linkdin: "https://www.linkedin.com/in/anshbajaj2611/",
	},
	{
		dp: profile.arsh,
		name: "Arsh Chatrath",
		title: "Core Member",
		info: "A crucial member, Arsh is incredibly dependable and exceptionally insightful. His proactive nature and diligent approach are pivotal to our team's achievements.",
		linkdin: "https://www.linkedin.com/in/arshchatrath/",
	},
	{
		dp: profile.ayush,
		name: "Ayush Garg",
		title: "Core Member",
		info: "Ayush is a standout in our design team, renowned for his visionary ideas, meticulous attention to detail, and exceptional artistic talent",
		linkdin: "https://www.linkedin.com/in/ayush-garg-0987ba286/",
	},
	{
		dp: profile.ayushm,
		name: "Ayush Mishra",
		title: "Core Member",
		info: "Ayush is a diligent and creatively resourceful team member. His energetic and dedicated approach greatly elevates our team’s performance.",
		linkdin:
			"https://www.linkedin.com/in/ayush-mishra-624520297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.bhavik,
		name: "Bhavik Jain",
		title: "Core Member",
		info: "Bhavik is an essential technical team member, admired for his inventive strategies and cooperative nature.",
		linkdin: "",
	},
	{
		dp: profile.bhavya,
		name: "Bhavya",
		title: "Core Member",
		info: "Bhavya is a champ in the technical and media team, demonstrating resourcefulness, innovation, and attention to detail in all tasks.",
		linkdin:
			"https://www.linkedin.com/in/bhavya-agarwal-3a2a14289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.hariyank,
		name: "Haryiank Kumra",
		title: "Core Member",
		info: "Haryiank, a key member of our technical team, is known for his sharp problem-solving skills, innovative ideas, and collaborative spirit.",
		linkdin: "https://in.linkedin.com/in/haryiank-kumra-09374b202",
	},
	{
		dp: profile.himanish,
		name: "Himanish Puri",
		title: "Core Member",
		info: "Himanish, a tech genius in our crew, is renowned for his cutting-edge concepts, groundbreaking ideas, and team-oriented approach.",
		linkdin: "https://www.linkedin.com/in/himanish-puri-b47468321/",
	},
	{
		dp: profile.ishaan,
		name: "Ishaan Sharma",
		title: "Core Member",
		info: "Ishaan is a vibrant and resourceful member of our marketing team. His innovative and adaptable nature fuels our success",
		linkdin:
			"https://www.linkedin.com/in/ishaan-sharma-6062bb291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.ishita,
		name: "Ishita Singh Oberoi",
		title: "Core Member",
		info: "Ishita, a powerhouse in our content and technical team, is revered for her inventive strategies, visionary thinking, and cooperative spirit in elevating our projects.",
		linkdin: "https://www.linkedin.com/in/ishita-singh-oberoi-5a2493291",
	},
	{
		dp: profile.kaushik,
		name: "Kaushik Arora",
		title: "Core Member",
		info: "Kaushik, a creative mind in the media department, is the epitome of diligence, inquisitivity and ingenuity and is an integral member of the ISTE family.",
		linkdin: "http://linkedin.com/in/kaushik-arora-0b9148291",
	},
	{
		dp: profile.lakshita,
		name: "Lakshita Gupta",
		title: "Core Member",
		info: "Lakshita, a true Tech Wizard, who never backs out from a challenge and always takes initiative also keeps the fire of teamwork well lit.",
		linkdin: "https://www.linkedin.com/in/lakshita-gupta-75844b2b4",
	},
	{
		dp: profile.meenal,
		name: "Meenal",
		title: "Core Member",
		info: "Meenal an integral pillar in the marketing and tech department who’s commendable innovation and enthusiastic zeal know no bounds.",
		linkdin:
			"https://www.linkedin.com/in/meenal-chhabra-744464291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.pranav,
		name: "Pranav Vaish",
		title: "Core Member",
		info: "Pranav is a dedicated and enthusiastic member of the ISTE family. His passion and commitment plays a vital role in driving the society's initiatives and activities.",
		linkdin: "https://www.linkedin.com/in/pranavvaish20",
	},
	{
		dp: profile.saarthi,
		name: "Saarthi Arora",
		title: "Core Member",
		info: "Sarthi a truly essential member of the content department is known for his undying creativity and innovative approach is an intrinsic member of the society. ",
		linkdin:
			"https://www.linkedin.com/in/saarthi-arora-849656243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.sakshat,
		name: "Sakshat Jain",
		title: "Core Member",
		info: "A meticulous fellow, sakshat, has never failed to put forth his many qualities like attention to detail, inclusive collaboration and fastidious dedication into any project he undertakes.",
		linkdin: "https://www.linkedin.com/in/sakshatjain/",
	},
	{
		dp: profile.srijapi,
		name: "Sri Japji Kuar Dardi",
		title: "Core Member",
		info: "Japji, A truly integral pillar of the ISTE family who has reflected unwavering enthusiasm, amazing coherence and unique insight in any project she has been a part of.",
		linkdin: "https://www.linkedin.com/in/sri-japji-kaur-dardi-288357291",
	},
	{
		dp: profile.tanishq,
		name: "Tanishq Soni",
		title: "Core Member",
		info: "An essential member of the tech department Tanishq never fails to display his pioneering mindset and is an astute and diligent member of this club. ",
		linkdin: "https://www.linkedin.com/in/tanishq-soni-35a60a28a/",
	},
	{
		dp: profile.udita,
		name: "Udita Chutani",
		title: "Core Member",
		info: "An essential and discerning member of the club, Udita is a versatile and dedicated member of the society who continually chimes in with her insightful opinion.",
		linkdin: "https://www.linkedin.com/in/udita-chutani-875985298/",
	},
	{
		dp: profile.vinayak,
		name: "Vinayak Jain",
		title: "Core Member",
		info: "A true tech enthusiast Vinayak is a harmonious and fastidious member of the club who never fails to present a pragmatic approach to any project he undertakes.",
		linkdin:
			"https://www.linkedin.com/in/vinayak-jain-21b493298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
	{
		dp: profile.yash,
		name: "Yash Agarwal",
		title: "Core Member",
		info: "The embodiment of coherence and confidence Yash is a requisite member of the society who never backs out from a challenge, and whose industriousness is an honor to witness.",
		linkdin: "",
	},
	{
		dp: profile.yashita,
		name: "Yashita Gupta",
		title: "Core Member",
		info: "Yashita, a vital part of the technical department embodies unwavering relentlessness and industrious creativity.",
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
		<div className="w-screen">
			<DetailsProvider value={details}>
				{/* <div id="teamPage"> */}
				{/* <Navbar /> */}
				<TeamFrontPage />
				<PresidentFaculty />
				<ExecutiveBoard />
				<ExecutiveCommitee />
				<CorePage />
				{/* </div> */}
			</DetailsProvider>
		</div>
	);
}

export default TeamsPage;
