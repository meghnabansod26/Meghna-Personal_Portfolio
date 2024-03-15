import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { FaDev, FaDatabase, FaAngular, FaNodeJs } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  //const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
    "I'm a dedicated full-stack developer skilled in MEAN and MERN stacks, with a proven track record in crafting dynamic projects. I have a solid understanding of Core Java, C, and C++, using these languages as part of my versatile toolkit to tackle challenges. As an enthusiastic learner, I stay updated on industry trends to ensure my skills are innovative, delivering impactful solutions in the ever-evolving tech landscape.",
    highlights: {
      bullets: [
        "Full Stack Web Development.",
        "Crafting Interactive Front-Ends with a keen eye for design.",
        "Familiar with Angular and Node.js.",
        "Aspiring in React.js with hands-on experience in Next.js projects.",
        "Building RESTful APIs.",
        "Database Management.",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        < div className="container about-me-card">
  <div className="row">
    <div className="col-md-6">
    <div className="about__content__servicesWrapper pt-5 ">
            <Animate
              play
              duration={1}
              delay={0}
              start={{ transform: "translateX(500px)" }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <div className="about__content__servicesWrapper__innerContent">
                <div>
                  <FaDatabase size={60} color="var(--white)" />
                </div>
                <div>
                  <FaAngular size={60} color="var(--white)" />
                </div>

                <div>
                  <FaNodeJs size={60} color="var(--white)" />
                </div>

                <div>
                  <FaDev size={60} color="var(--white)" />
                </div>
              </div>
            </Animate>
          </div>
    </div>

    <div className="col-md-6">
    <div className="about-me-details ">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights pb-4">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>

</div>
  </div>
</div>

        
      </div>
    </div>
  );
}



