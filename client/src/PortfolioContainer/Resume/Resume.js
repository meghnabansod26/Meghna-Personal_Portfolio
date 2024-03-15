import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
          {/* {props.cgpa ? <div>CGPA: {props.cgpa}</div> : null}
        {props.percentage ? <div>Percentage: {props.percentage}%</div> : null} */}
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Certifications", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C++", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 80 },

    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },

    { skill: "Angular", ratingPercentage: 70 },
    { skill: "Next JS", ratingPercentage: 70 },

    { skill: "React JS", ratingPercentage: 65 },
    { skill: "JavaScript", ratingPercentage: 65 },

    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 65 },
  ];

  const achievementsDetails = [
    {
      title: "Udemy",
      duration: { fromDate: "Feb-24 ", toDate: "Feb-24" },

      subHeading: "React Node - MERN Stack from Scratch By Ryan Dhungel",
    },
    {
      title: "Udemy",
      duration: { fromDate: "Nov-23", toDate: "Dec-23" },

      subHeading:
        "Angular & NodeJS - The MEAN Stack Guide By Maximilian Schwarzmuller",
    },
    {
      title: "HackerRank ",
      duration: { fromDate: "Oct-22", toDate: "Oct-23" },

      subHeading: "Certificate of SQL(Basic) and SQL(Intermediate)",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"SGGSIE&T, Nanded"}
        subHeading={"B.Tech in Information Technology"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"R. K. Junior College, Pulgaon"}
        subHeading={"Higher Secondary Certificate [HSC]"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"R. K. High School, Pulgaon"}
        subHeading={"Senior Secondary Certificate [SSC]"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Angular Developer Intern"}
          subHeading={"Anka Technology Solutions Pvt. Ltd."}
          fromDate={"Jan-23"}
          toDate={"Jun-23"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
           I am currently immersed in MERN stack projects as part of my journey towards becoming a Full Stack Development expert.
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            - Wove the magic in front-end development, designing, optimizing,
            and maintaining the Angular-based web application.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            {" "}
            - Successfully tackled Angular assignments, adding a touch of
            expertise to every task.
          </span>
          <br />
          <span className="resume-description-text">
            - Contributed significantly to the live project Referedge, adding
            life to its functionalities.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Extensively experienced in working within an Agile environment{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Achievements*/
    <div className="resume-screen-container" key="achievements">
      {achievementsDetails.map((achievementsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={achievementsDetails.title}
          subHeading={achievementsDetails.subHeading}
          fromDate={achievementsDetails.duration.fromDate}
          toDate={achievementsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Enthusiastically exploring diverse music genres and discovering new artists is not just a hobby but a source of constant inspiration."
      />
      <ResumeHeading
        heading="Travel"
        description="Being an avid traveler isn't just about visiting new places; it's a continual pursuit of fresh perspectives, cultural immersion, and unforgettable experiences."
      />
      <ResumeHeading
        heading="Drawing"
        description="Capturing life through pencil and paper,
        I find joy in the simplicity of drawing."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
