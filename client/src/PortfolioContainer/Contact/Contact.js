import React, { useState, useEffect, useCallback } from "react";
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
  // FIX 1: Wrap fadeInScreenHandler in useCallback so its reference is stable,
  // which satisfies the react-hooks/exhaustive-deps rule for the useEffect below.
  const fadeInScreenHandler = useCallback(
    (screen) => {
      if (!props || !props.id) return;
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    },
    [props]
  );

  useEffect(() => {
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInScreenHandler]);

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
            />
          </h2>{" "}
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
            {/* FIX 2: Removed "image" from alt text — screen readers already
                announce <img> as an image, so words like "image/photo/picture"
                are redundant and trigger the jsx-a11y/img-redundant-alt rule. */}
            <img src={imgBack} alt="decorative mail envelope" />
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
                    {/* FIX 3: Same redundant-alt fix — replaced "not responding"
                        (which contained no banned word) but the original said
                        "image not responding", which triggers the rule. */}
                    <img src={load1} alt="loading spinner" />
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