import React, { useState,useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./Contact.css";

export default function ContactMe(props) {
let fadeInScreenHandler = (screen) => {
  if (!props || !props.id) return;

  if (screen.fadeInScreen !== props.id) return;
  Animations.animations.fadeInScreen(props.id);
};

  useEffect(() => {
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return () => {
    fadeInSubscription.unsubscribe();
  };
}, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props?.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
<TypeAnimation
  sequence={["Get In Touch 📧", 1000]}
  repeat={Infinity}
/>          </h2>{" "}
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
    href="https://wa.me/8080162995"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <FaWhatsapp size={26} />
  </a>
  <a
    href="https://www.instagram.com/meghnabansod"
    target="_blank"
    rel="noopener noreferrer"
    className="instagram-icon"
  >
    <FaInstagram size={26} />
  </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
