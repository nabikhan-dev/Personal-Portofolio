import styles from "./aboutsection.module.css";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import about from "../../assets/about.jpg";
import AboutDot from "../IconCircleAnimate.jsx";
import { MdDone } from "react-icons/md";

function AboutSection() {
  return (
    <section id="about">

      <div
        className={`${styles["about"]} align-items-center container-fluid col-sm-10 mt-5 col-lg-10`}
      >
        <div className={`${styles["container"]}`}>
          <div className=" row align-items-center">
            <div className={`${styles["about-contianer"]} col-sm-6 col-md-8 col-lg-6 `}>
              <h4 className={styles["title"]}>About Me</h4>
              <h1 className={styles["heading"]}>
                Professional <span style={{ color: "rgba(201, 243, 29, 1)" }}>Problem Solutions</span> <br />
                For Digital Products
              </h1>
              <p className={styles["text"]}>
              I am a dedicated React.js and React Native developer, combining technical skills with a passion for UI/UX design. My goal is to create engaging and user-friendly digital experiences that meet the needs of users and exceed client expectations. I believe in the importance of a seamless user journey and am committed to delivering high-quality applications that are both functional and aesthetically pleasing.
              </p>
              <ul className={`${styles["list"]} list-style-one`}>
                <li>
                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp;&nbsp; Mobile App Design
                </li>
                <li>

                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp;&nbsp; Mobile App Development
                </li>
                <li>
                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp; &nbsp; Web Development
                </li>
                <li>

                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp;&nbsp; Web Design 
                </li>
              </ul>
              <div className={`${styles["contact"]} `}>
                <div className={styles["contact-icon"]}>
                  <img src={mail} alt="logo" />
                  <div className="ml-4 mt-2">
                    <span>Email Us</span>
                    <a href="">
                      <p>nabiwazir29@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className={`${styles["contact-icon"]} `}>
                  <img src={phone} alt="logo" />
                  <div className="ml-4 mt-2" >
                    <span>Make A Call</span>
                    <a href="">
                      <p>+923348885173</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles["about-img"]}  `}>
              <div className="routate-png">
                <AboutDot />
              </div>
              <div className={`${styles["about-image"]}  `}>
                <img src={about} alt=""  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
export default AboutSection;
