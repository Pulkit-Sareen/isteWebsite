import React, { useRef, useState, useEffect } from "react";
import styles from "./SponsorPage.module.css";
import sponsor1 from "../../assets/Sponsor Images/surrey.png";
import sponsor2 from "../../assets/Sponsor Images/plasmid.png";
import sponsor3 from "../../assets/Sponsor Images/bakingo.png";
import sponsor4 from "../../assets/Sponsor Images/oatley.jpg";
import sponsor5 from "../../assets/Sponsor Images/hoverrobotix.png";
import sponsor6 from "../../assets/Sponsor Images/mentorx.jpeg";
import sponsor7 from "../../assets/Sponsor Images/xyz.jpg";
import sponsor8 from "../../assets/Sponsor Images/interview.jpg";
import sponsor9 from "../../assets/Sponsor Images/echoes.jpg";
import sponsor10 from "../../assets/Sponsor Images/stockedge.jpg";


const sponsorData = [
    {
        img: sponsor1,
        subheading: "Surrey Immigration Consultancy",
        span: "Title Sponsor",
        desc: "Surrey Immigration Consultancy leads as our Title Sponsor, supporting our initiatives and helping participants navigate opportunities abroad.",
    },
    {
        img: sponsor2,
        subheading: "PLASMID",
        span: "Mentorship and Training Partner",
        desc: "PLASMID provides expert mentorship and training, guiding participants to develop skills and achieve their career goals.",
    },
    {
        img: sponsor3,
        subheading: "Bakingo",
        span: "Cake Partner",
        desc: "Bakingo sweetens our events as the Cake Partner, adding a delicious touch to celebrations and milestones.",
    },
    {
        img: sponsor4,
        subheading: "Oatey",
        span: "Health and Sustainability Partner",
        desc: "Oatey supports health and sustainability efforts, ensuring our events promote well-being and eco-conscious practices.",
    },
    {
        img: sponsor5,
        subheading: "HoverRobotix",
        span: "AI Partner",
        desc: "HoverRobotix drives innovation as our AI Partner, bringing cutting-edge robotics and automation expertise.",
    },
    {
        img: sponsor6,
        subheading: "MentorX",
        span: "Our Mentoring Partner",
        desc: "MentorX empowers participants through dedicated mentoring, fostering personal growth and career advancement.",
    },
    {
        img: sponsor7,
        subheading: "XYZ",
        span: "Domain Sponsor",
        desc: ".XYZ fuels the digital presence of our participants, providing domains to launch their online projects and portfolios.",
    },
    {
        img: sponsor8,
        subheading: "InterviewBit",
        span: "Interview Sponsor",
        desc: "InterviewBit equips participants with interview preparation tools and resources, boosting their career readiness.",
    },
    {
        img: sponsor9,
        subheading: "Echoes",
        span: "Event Partner",
        desc: "Our Event Partner ensures seamless execution of programs, managing logistics and experiences with precision.",
    },
    {
        img: sponsor10,
        subheading: "StockEdge",
        span: "Stock Learning Partner",
        desc: "StockEdge educates participants on financial markets, empowering them with investment knowledge and skills.",
    },

];

const SponsorPage = () => {
    const headingRef = useRef(null);
    const [headingVisible, setHeadingVisible] = useState(false);
    const [cardVisibles, setCardVisibles] = useState(
        Array(sponsorData.length).fill(false)
    );
    const [subheadingVisibles, setSubheadingVisibles] = useState(
        Array(sponsorData.length).fill(false)
    );

    // Heading underline animation
    useEffect(() => {
        const handleScroll = () => {
            const triggerPoint = window.innerHeight * 0.8;
            if (headingRef.current && !headingVisible) {
                const top = headingRef.current.getBoundingClientRect().top;
                if (top <= triggerPoint) setHeadingVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headingVisible]);

    // Card fade up animation on scroll (50vh)
    useEffect(() => {
        const handleScroll = () => {
            const triggerPoint = window.innerHeight * 0.7;
            sponsorData.forEach((_, idx) => {
                const card = document.getElementById(`sponsor-card-${idx}`);
                if (card) {
                    const top = card.getBoundingClientRect().top;
                    if (top <= triggerPoint && !cardVisibles[idx]) {
                        setCardVisibles((prev) => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        setTimeout(() => {
                            setSubheadingVisibles((prev) => {
                                const updated = [...prev];
                                updated[idx] = true;
                                return updated;
                            });
                        }, 300);
                    }
                    // Fade out when card is below 80vh
                    if (top > window.innerHeight * 0.8 && cardVisibles[idx]) {
                        setCardVisibles((prev) => {
                            const updated = [...prev];
                            updated[idx] = false;
                            return updated;
                        });
                        setSubheadingVisibles((prev) => {
                            const updated = [...prev];
                            updated[idx] = false;
                            return updated;
                        });
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line
    }, [cardVisibles, subheadingVisibles]);

    return (
        <section className={styles.sponsorSection}>
            <h1
                ref={headingRef}
                className={`${styles.heading} ${headingVisible ? styles.underlineAnimate : ""
                    }`}
            >
                Our Elite Sponsors
            </h1>
            <p className={styles.description}>
                We’re proud to be backed by sponsors who
                share our passion for
                technology,
                innovation,
                and student empowerment. Their support fuels our events, projects, and
                initiatives—enabling us to turn ideas into impact and create
                opportunities for the next generation of tech leaders.
            </p>


            <div className={styles.sponsorCardsGrid}>
                {sponsorData.map((s, idx) => (
                    <div
                        key={idx}
                        id={`sponsor-card-${idx}`}
                        className={`${styles.sponsorCard} ${cardVisibles[idx] ? styles.visible : styles.hide}`}
                        style={{
                            transitionDelay: cardVisibles[idx] ? `${idx * 0.18}s` : "0s",
                        }}
                    >
                        <div className={styles.sponsorCardInner}>
                            <div className={styles.sponsorCardContent}>
                                <img
                                    src={s.img}
                                    alt={s.subheading}
                                    className={styles.sponsorCardImg}
                                />
                                <div className={styles.sponsorCardText}>
                                    <div
                                        className={`${styles.sponsorCardSubheading} ${subheadingVisibles[idx] ? styles.underlineAnimate : ""}`}
                                    >
                                        {s.subheading}
                                    </div>
                                    <span className={styles.sponsorCardSpan}>{s.span}</span>
                                    <div className={styles.sponsorCardDesc}>{s.desc}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SponsorPage;