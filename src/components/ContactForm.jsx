import  { useState } from "react";
import styles from "./contactform.module.css";
import Button from "./button.jsx";
import {
  FaAngleRight,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMessage = () => {
    const { name, email, message } = formData;
    const whatsappNumber = "+923348885173"; // Replace with your WhatsApp number (e.g., "+1234567890")
    const textMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(textMessage)}`;

    window.open(whatsappURL, "_blank");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="Contact" className={`${styles.container} container-fluid`}>
      <form className={`${styles.form_content} container col-sm-3 mr-5`} onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <h3 className="text-white mb-4">Get in Touch with Us</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Update Button to trigger sendMessage function */}
        <Button Name="Send Me a Message" Icon={<FaAngleRight />} onClick={sendMessage} />

        <div className={`${styles.sidebarsocial} mt-4 justify-content-center`}>
          <div className={styles.sidsocial}>
            <a href="https://github.com/nabikhan-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mb-1" aria-label="GitHub" />
            </a>
            <a href="https://www.facebook.com/share/18fTAVHqVj/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="mb-1" aria-label="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-nabi-061546298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mb-1" aria-label="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="mb-1" aria-label="Instagram" />
            </a>
            <a href="https://www.behance.net/nabiwadaant" target="_blank" rel="noopener noreferrer">
              <FaBehance className="mb-1" aria-label="Behance" />
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
