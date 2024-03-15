import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJs,
  FaDatabase, // Placeholder for MongoDB
  FaNode, // Placeholder for Express.js
  FaBootstrap,
  FaGithub 
} from "react-icons/fa";
import { portfolioData } from "./utils";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Projects.css";

const Projects = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="container col-md-10 fade-in" id={props.id || ""}>
  <section id="portfolio" className="portfolio">
    <ScreenHeading
      title={"My Portfolio"}
      subHeading={"Unveiling My Project Gallery!"}
    />

    <div className="portfolio__content ">
      <div className="portfolio__content__cards">
        {portfolioData.map((item, key) => (
          <div
            onMouseEnter={() => setHoveredIndex(key)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={key}
            className="portfolio__content__cards__item"
          >
            <div className="portfolio__content__cards__item__img-wrapper">
              <a>
                <img src={item.image} alt="project " />
              </a>
            </div>
            <div className="overlay">
              {hoveredIndex === key && (
                <div>
                  <p>{item.projectName}</p>
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="">Visit</button>
                  </a>{" "}
                  {/* Display technology icons below the Visit button */}
                  <div className="technologies">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="technology-icon">
                        {getTechnologyIcon(tech)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


  );
};

// ... (rest of the code remains unchanged)



const getTechnologyDocumentationLink = (technology) => {
  switch (technology) {
    case "React":
      return "https://reactjs.org/docs/getting-started.html";
    case "Angular":
      return "https://angular.io/docs";
    case "Node.js":
      return "https://nodejs.org/en/docs/";
    case "HTML5":
      return "https://html.spec.whatwg.org/";
    case "CSS3":
      return "https://www.w3.org/TR/css-2022/";
    case "Next.js":
      return "https://nextjs.org/docs";
    case "TypeScript":
      return "https://www.typescriptlang.org/docs/";
    case "JavaScript":
      return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide";
    case "MongoDB":
      return "https://docs.mongodb.com/";
    case "JSON":
      return "https://www.json.org/";
    case "Express.js":
      return "https://expressjs.com/";
    case "Socket.io":
      return "https://socket.io/docs/v4/";
    case "Bootstrap":
      return "https://getbootstrap.com/docs/5.3/getting-started/introduction/";
      case "Github":
      return "https://docs.github.com/";


    default:
      return null;
  }
};


const getTechnologyIcon = (technology) => {
  const iconSize = 30; // Set the desired icon size
  const documentationLink = getTechnologyDocumentationLink(technology);

  const commonProps = {
    style: { width: iconSize, height: iconSize },
  };

  return (
    <a
      href={documentationLink}
      target="_blank"
      rel="noopener noreferrer"
      title={`${technology}`}
    >
      {(() => {
        switch (technology) {
          case "React":
            return <FaReact style={{ color: "#61DAFB", fontSize: iconSize }} />;
          case "Angular":
            return (
              <FaAngular style={{ color: "#DD0031", fontSize: iconSize }} />
            );
          case "Node.js":
            return (
              <FaNodeJs style={{ color: "#8CC84B", fontSize: iconSize }} />
            );
          case "HTML5":
            return <FaHtml5 style={{ color: "#E44D26", fontSize: iconSize }} />;
          case "CSS3":
            return <FaCss3 style={{ color: "#264DE4", fontSize: iconSize }} />;
          case "Next.js":
            return <img src="/next-js.svg" alt="Next Js" {...commonProps} />;
          case "TypeScript":
            return (
              <img src="/typescript-original.svg" alt="TypeScript" {...commonProps} />
            );
          case "JavaScript":
            return <FaJs style={{ color: "#F7DF1E", fontSize: iconSize }} />;
          case "MongoDB":
            return <img src="/mongodb-plain-wordmark.svg" alt="MongoDB" {...commonProps} />;
          case "JSON":
            return <img src="/json.svg" alt="JSON" {...commonProps} />;
          case "Express.js":
            return (
              <img
                src="/icons8-express-js.svg"
                alt="Express JS"
                {...commonProps}
              />
            );
          case "Socket.io":
            return (
              <img src="/socket-io.svg" alt="Socket io" {...commonProps} />
            );
          case "Bootstrap":
            return (
              <FaBootstrap style={{ color: "#563D7C", fontSize: iconSize }} />
            );
            case "Github":
              return (
                <FaGithub style={{ color: "#ffffff", fontSize: iconSize }} />
              );
          default:
            return null;
        }
      })()}
    </a>
  );
};

export default Projects;
