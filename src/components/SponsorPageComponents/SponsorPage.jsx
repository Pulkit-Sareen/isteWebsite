import React, { useRef, useState, useEffect } from "react";
import styles from "./SponsorPage.module.css";
import sponsor1 from "../../assets/images/Collage_Image_1.png";
import sponsor2 from "../../assets/images/Collage_Image_1.png";
import sponsor3 from "../../assets/images/Collage_Image_1.png";
import sponsor4 from "../../assets/images/Collage_Image_1.png";
import sponsor5 from "../../assets/images/Collage_Image_1.png";
import sponsor6 from "../../assets/images/Collage_Image_1.png";

const sponsorData = [
    {
        img: sponsor1,
        subheading: "TechNova Inc.",
        span: "Innovation Partner",
        desc: "TechNova empowers our hackathons and workshops, providing resources and mentorship to foster creativity and technical growth.",
    },
    {
        img: sponsor2,
        subheading: "BrightFuture Foundation",
        span: "Education Sponsor",
        desc: "BrightFuture supports our outreach programs, helping us bring technology education to underserved communities.",
    },
    {
        img: sponsor3,
        subheading: "CodeCraft",
        span: "Coding Partner",
        desc: "CodeCraft provides tools and platforms for our coding events, enabling students to build and deploy real-world projects.",
    },
    {
        img: sponsor4,
        subheading: "InnoSoft",
        span: "Software Sponsor",
        desc: "InnoSoft offers premium software licenses and technical support for our student projects and competitions.",
    },
    {
        img: sponsor5,
        subheading: "NextGen Hardware",
        span: "Hardware Partner",
        desc: "NextGen supplies the latest hardware kits for our robotics and IoT workshops, fueling hands-on learning.",
    },
    {
        img: sponsor6,
        subheading: "Visionary Ventures",
        span: "Startup Supporter",
        desc: "Visionary Ventures mentors our student startups, providing guidance and funding opportunities for budding entrepreneurs.",
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