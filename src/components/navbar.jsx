import  { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/icons/hamburger.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactForm from "./ContactForm";

import { Link } from "react-scroll";

function NavBar() {
  const [showContactForm, setShowContactForm] = useState(false);
  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };
  useEffect(() => {
   
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", addUnderline);
      link.addEventListener("mouseleave", removeUnderline);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", addUnderline);
        link.removeEventListener("mouseleave", removeUnderline);
      });
    };
  }, []);

  const addUnderline = (event) => {
    event.target.classList.add(styles.underline);
  };

  const removeUnderline = (event) => {
    event.target.classList.remove(styles.underline);
  };

  return (
    <div className={`${styles["header"]}`}>
      <nav className="navbar navbar-expand-lg">
        <div className={`${styles["container"]} container-fluid col-sm-10`}>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" >
              <img src={hamburger} alt="hamburger" />
            </span>
          </button>
          <div
            className={`${styles["nav-content-box"]} collapse navbar-collapse`}
            id="navbarNav"
          >
            <ul className={`${styles["nav-content"]} navbar-nav ml-auto`}>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Project
                </Link>
              </li>
              <li className="nav-item" >
                <Link
                  className={`nav-link ${styles["nav-text"]}`}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  Contact
                </Link>
                </li>
                <li className="nav-item">
                  <button
                    className={` ${styles["nav-link-button"]}`}
                    onClick={toggleContactForm}
                  >
                    <img src={hamburger} alt="hamburger" />
                  </button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      {showContactForm && <ContactForm />}
    </div>
  );
}

export default NavBar;
