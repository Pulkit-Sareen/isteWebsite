import React from "react";
import styles from "./Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import about from "../../assets/images/team.jpg";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <div className={styles.events} id="card">
          <div className={styles.eventstext}>
            <h3>ISTE</h3>
            <h2>Events</h2>
            <p>
              Delve into this section to relive our past events, such as
              hackathons, coding challenges, and guest lectures. Explore the
              highlights of these occasions to gain valuable insights and see
              how our community has evolved over time.
            </p>
            <div className={styles.buttoncontainer2}>
              <Link to="/events">
                <button
                  id={styles.new1}
                  // style={{padding: "0 0.75rem"}}
                >
                  {" "}
                  View More
                  <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.eventsimg}></div>
        </div>

        <div className={styles.bottomcards}>
          <div className={styles.team} id="card">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCube} />
            </div>
            <h1>TEAM</h1>
            <p>
              &quot;The strength of the team is each individual member. The
              strength of each member is the team.&quot; Our dedicated team of
              enthusiastic learners is committed to advancing our society’s
              goals. Each member brings unique skills and expertise, working
              together to positively impact the tech community.
            </p>
            <div className={styles.buttoncontainer}>
              <Link to="/team">
                <button style={{ padding: "0 0.75rem" }}>
                  {" "}
                  View More
                  <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
                </button>
              </Link>
            </div>
          </div>

          <div className={`${styles.alumni} `} id="card">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCube} />
            </div>
            <h1>Alumni</h1>
            <p>
              Our alumni are the trailblazers who have shaped the legacy of our
              society. Their contributions and success stories continuously
              motivate us to pursue excellence
            </p>
            <div className={styles.buttoncontainer}>
              <Link to="/alumni">
                <button style={{ padding: "0 0.75rem" }}>
                  {" "}
                  View More
                  <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.about} id="card">
          <div className={styles.image}>
            <img src={about} />
          </div>
          <div className={styles.textcontainer}>
            <h3>ISTE</h3>
            <h2>About Us</h2>
            <p>
              ISTE is home to a dedicated and enthusiastic tech community that
              envisions real solutions to complex problems , looking to educate
              , innovate and create a better world with the boundless potential
              of Technology.
            </p>
            <div className={styles.buttoncontainer2}>
              <Link to="/team">
                <button
                  id={styles.new2}
                  // style={{padding: "0 0.75rem"}}
                >
                  {" "}
                  View More
                  <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.pastprojects} id="card">
          <div className={styles.pastprojectstext}>
            <h3>ISTE</h3>
            <h2>Past Projects</h2>
            <p>
              We, as a technical community aim to innovate and solve problems
              faced by people. Our passionate team of tech enthusiasts come up
              with innovative real life solutions to tackle such problems.
            </p>
            <div className={styles.buttoncontainer}>
              <Link to="/projects"></Link>
              <button style={{ padding: "0 0.75rem" }}>
                {" "}
                View More
                <FontAwesomeIcon icon={faChevronRight} id={styles.right} />
              </button>
            </div>
          </div>
          <div className={styles.pastprojectsimg}></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
