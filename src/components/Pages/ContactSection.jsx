import styles from "./contactsection.module.css";
import Button from "../button.jsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaAngleRight, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhatsAppMessage = (e) => {
    e.preventDefault();

    const { firstName, email, phone, subject, message } = formData;

    const whatsappMessage = `Hello, my name is ${firstName}.
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

    window.open(
      `https://wa.me/+923348885173?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    // Reset form fields
    setFormData({ firstName: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact">
      <div className={`${styles["contact"]} align-items-center container-fluid col-sm-10 col-lg-10 col-md-10 mt-5`}>
        <div className={`${styles["container"]}`}>
          <div className="row align-items-center">
            <div className={`${styles["contact-container"]} col-sm-4 col-lg-4 col-md-4`}>
              <h4 className={styles["title"]}>Get In Touch</h4>
              <h1 style={{ fontSize: "43px", color: "#ffffff", marginLeft: "20px" }}>
                Let’s Talk For your <span style={{ color: "rgba(201, 243, 29, 1)" }}>Next Projects</span>
              </h1>
              <p className={styles["text"]}>
              Have an idea for a new project? Let’s chat! Whether you’re starting from scratch or need a fresh perspective, I’m here to help bring your vision to life. Reach out, and let’s create something amazing together!
              </p>
              <ul className={`${styles["list"]}`}>
                <li>
                  <BsFillCheckCircleFill style={{ color: "rgba(201, 243, 29, 1)", fontSize: "28px" }} />
                  &nbsp;&nbsp; JavaScript (ES6+)
                </li>
                <li>
                  <BsFillCheckCircleFill style={{ color: "rgba(201, 243, 29, 1)", fontSize: "28px" }} />
                  &nbsp;&nbsp; Expo & React Native CLI
                </li>
                <li>
                  <BsFillCheckCircleFill style={{ color: "rgba(201, 243, 29, 1)", fontSize: "28px" }} />
                  &nbsp;&nbsp; State Management
                </li>
                <li>
                  <BsFillCheckCircleFill style={{ color: "rgba(201, 243, 29, 1)", fontSize: "28px" }} />
                  &nbsp;&nbsp; React.js Development
                </li>
              </ul>
            </div>

            <div className={`${styles["form-sec"]} col-sm-7 col-md-4 col-lg-7 d-flex flex-wrap text-white `}>
              <form className="needs-validation" onSubmit={handleWhatsAppMessage} noValidate>
                <div className="form-row">
                  <div className="col-lg-6 mb-3">
                    <h5>First name</h5>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className={`${styles.input}`}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <FaUser style={{ fontSize: "14px", marginLeft: "-30px" }} />
                  </div>

                  <div className="col-lg-6">
                    <h5>Email</h5>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`${styles.input}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <FaEnvelope style={{ fontSize: "14px", marginLeft: "-30px" }} />
                  </div>
                </div>
                <div className="form-row mt-4">
                  <div className="col-lg-6 mb-3">
                    <h5>Phone</h5>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className={`${styles.input}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <FaPhone style={{ fontSize: "14px", marginLeft: "-30px" }} />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <h5>Subject</h5>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`${styles.input}`}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                    <MdOutlineTextFields style={{ fontSize: "14px", marginLeft: "-30px" }} />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <h5>Message</h5>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className={`${styles.input}`}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button Name="Send Us Message" Icon={<FaAngleRight />} style={{marginBottom: "30px"}}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
