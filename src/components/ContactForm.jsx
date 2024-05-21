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
  return (
    <section id="Contact" className={`${styles.container} container-fluid`}>
      <form className={`${styles.form_content} container col-sm-3 mr-5`}>
        <div class="form-group">
          <h3 className="text-white mb-4  ">Get Touch Us</h3>

          <input type="text" placeholder="Name" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email " />
        </div>
        <div class="form-group">
          <textarea type="text" placeholder="Message" />
        </div>

        <Button Name={"Send Me Message"} Icon=<FaAngleRight /> />
        <div className={`${styles.sidebarsocial} mt-4 justify-content-center `}>
          <div className={`${styles.sidsocial} `} >
            <a href="" >
              <FaGithub className="mb-1"
              />
            </a>
            <a href="">
              <FaFacebook className="mb-1"
              />
            </a>
            <a href="">
              <FaLinkedin className="mb-1"
              />
            </a>
            <a href="">
              <FaInstagram className="mb-1"
              />
            </a>
            <a href="">
              <FaBehance className="mb-1"
              />
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
