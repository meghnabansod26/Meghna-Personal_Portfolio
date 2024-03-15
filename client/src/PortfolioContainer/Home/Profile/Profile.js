import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {


  const openOrDownloadResume = () => {
    const resumeLink = "Meghna_Bansod_CV.pdf";
    const anchor = document.createElement('a');
    
    anchor.href = resumeLink;
    anchor.download = "Meghna_Bansod_CV.pdf";

    // Try to open the file in a new tab
    window.open(resumeLink, '_blank');

    // Trigger the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <div className="colz-icon">
                <a
                  href="http://www.linkedin.com/in/meghnabansod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin size={26} />
                </a>
                <a
                  href="https://github.com/meghnabansod26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="https://wa.me/918080162995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-icon"
                >
                  <FaWhatsapp size={26} />
                </a>
                <a
                  href="https://www.instagram.com/meghna_bansod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-icon"
                >
                  <FaInstagram size={26} />
                </a>
              </div>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text ">
              {" "}
              Hello, I'M <span className="highlighted-text">Meghna</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Developer 📱",
                    1000,
                    "Angular Developer 🔴",
                    1000,
                    "Next JS Developer 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Mastering the art of harmonious front and back-end application
              creation.{" "}
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn highlighted-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            {/* <a href="Meghna_Bansod_CV.pdf" download="Meghna_Bansod_CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a> */}
            <button className="btn highlighted-btn" onClick={openOrDownloadResume}>
          Get Resume
        </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
