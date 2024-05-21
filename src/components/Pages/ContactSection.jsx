import styles from "./contactsection.module.css";
import Button from "../button.jsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaAngleRight, FaPhone, FaEnvelope, FaUser, } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";


const ContactSection = () => {
  return (
    <section id="contact">
      <div
        className={`${styles["contact"]} align-items-center container-fluid col-sm-10 col-lg-10 col-md-10 mt-5 `}
      >
        <div className={`${styles["container"]} `}>
          <div className="row align-items-center ">
            <div
              className={`${styles["contact-contianer"]} col-sm-4 col-lg-4 col-md-4`}
            >
              <h4 className={styles["title"]}>Get In Touch</h4>
              <h1 style={{ fontSize: '43px', color: '#ffffff', marginLeft: '20px' }}>
                Let’s Talk For your <span style={{ color: "rgba(201, 243, 29, 1)" }}>Next Projects </span>
              </h1>
              <p className={styles["text"]}>
                {" "}
                At vero eos et accusamus etodio dignissimos ducimus praesentium
                voluptatum corrupti quos dolores quas molestias excepturi sint
                occaecati cupiditate provident qui officia deserunt mollitia
                animi, id est laborum et dolorum
              </p>
              <ul className={`${styles["list"]} `}>
                <li>
                  <BsFillCheckCircleFill style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} /> &nbsp;&nbsp;Branding &amp;
                  Design
                </li>
                <li>
                  {" "}
                  <BsFillCheckCircleFill style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp;&nbsp; Digital Marketing
                </li>
                <li>
                  <BsFillCheckCircleFill style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} /> &nbsp;&nbsp;Web Development
                </li>
                <li>
                  {" "}
                  <BsFillCheckCircleFill style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '28px' }} />
                  &nbsp;&nbsp; Product Design
                </li>
              </ul>
            </div>

            <div
              className={`${styles["form-sec"]} col-sm-7 col-md-4 col-lg-7 d-flex flex-wrap text-white `}
            >
              <form className="needs-validation " noValidate >
                <div className="form-row">
                  <div className=" col-lg-6 mb-3">
                    <h5 htmlFor="validationCustom01">First name</h5>
                    <input
                      type="text"
                      id="validationCustom01"
                      placeholder="First name"
                      className={`${styles.input}`}
                      required
                    />

                    <FaUser style={{ fontSize: '14px', marginLeft: "-30px" }} />

                  </div>

                  <div className="col-lg-6 ">
                    <h5 htmlFor="validationCustom01">Email</h5>
                    <input
                      type="email"
                      id="validationCustom01"
                      placeholder="Email"
                      className={`${styles.input} `}
                      required
                    />

                   <FaEnvelope style={{ fontSize: '14px', marginLeft: "-30px" }} />


                  </div>
                </div>
                <div className="form-row mt-4 ">
                  <div className="col-lg-6 mb-3">
                    <h5 htmlFor="validationCustom01">Phone</h5>
                    <input
                      type="text"
                      id="validationCustom01"
                      placeholder="Phone"
                      className={`${styles.input} `}
                      required
                    />
                   <FaPhone style={{ fontSize: '14px', marginLeft: "-30px" }} />


                  </div>

                  <div className="col-lg-6 mb-3">
                    <h5 htmlFor="validationCustom01" >Subject</h5>
                    <input
                      type="text"
                      id="validationCustom01"
                      placeholder="Subject"
                      className={`${styles.input} `}
                      required
                    />
                     <MdOutlineTextFields style={{ fontSize: '14px', marginLeft: "-30px" }} />

                  </div>
                  <div className="col-lg-6 mb-3">
                    <h5 htmlFor="validationCustom01">Message</h5>
                    <br />
                    <textarea
                      id="validationCustom01"
                      placeholder="Message"
                      className={`${styles.input} `}
                      required
                    />
                  </div>
                </div>

                <Button Name={"Send Us Message "} Icon=<FaAngleRight /> />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
