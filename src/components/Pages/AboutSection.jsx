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
            <div class=" row align-items-center">
              <div class={`${styles["about-contianer"]} col-sm-6 col-md-8 col-lg-6 `}>
                <h4 className={styles["title"]}>About Me</h4>
                <h1 className={styles["heading"]}>
                  Professional <span style={{   color: "rgba(201, 243, 29, 1)"}}>Problem Solutions</span> <br />
                  For Digital Products
                </h1>
                <p className={styles["text"]}>
                  At vero eos et accusamus etodio dignissimos ducimus
                  praesentium voluptatum corrupti quos dolores quas molestias
                  excepturi sint occaecati cupiditate provident qui officia
                  deserunt mollitia animi, id est laborum et dolorum
                </p>
                <ul class={`${styles["list"]} list-style-one `}>
                  <li>
                    <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }}/>
                    &nbsp;&nbsp; Branding &amp; Design
                  </li>
                  <li>
                   
                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }}/>
                    &nbsp;&nbsp; Digital Marketing
                  </li>
                  <li>
                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }}/>
                    &nbsp; &nbsp; Web Development
                  </li>
                  <li>
                   
                  <MdDone style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }}/>
                    &nbsp;&nbsp; Product Design
                  </li>
                </ul>
                <div className={`${styles["contact"]} `}>
                  <div className={styles["contact-icon"]}>
                    <img src={mail} alt="logo" />
                    <div className="ml-4 mt-2">
                      <span>Email Us</span>
                      <a href="">
                        <p>nabiwadaan@gmail.com</p>
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
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
}
export default AboutSection;
