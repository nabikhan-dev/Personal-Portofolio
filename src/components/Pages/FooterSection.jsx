
import styles from "./footersection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.png'
import Button from "../button";
import { Link } from "react-scroll";
import { FaAngleRight, FaPhoneAlt, FaGithub, FaFacebook, FaLinkedin , FaInstagram, FaBehance  } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer>
      <div className={`${styles.footer} `}>
        <div className="container-fluid col-sm-10">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="d-flex justify-content-md-start mb-4 mb-md-0 ">
                <img src={logo} alt="Logo" className={styles.logo} />
              </div>
            </div>
            <div className="col-sm-5 col-lg-5 col-md-8 ">
              <h5 className="text-white">Quick Links</h5>
              <div className={`${styles.quicklinksbox} col-lg-9 col-sm-5 col-md-11 py-5`}>
                <ul
                  className={`${styles.quickLinks} list-unstyled text-center  d-flex text-white justify-content-between py-4`}
                >
                  <li>
                    <Link to="hero"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>Home</Link>
                    
                  </li>
                  <li>
                    <Link to='about'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>About</Link>
                  </li>
                  <li>
                    <Link to='services'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>Services</Link>
                  </li>
                  <li>
                    <Link to='skills'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>Skills</Link>
                  </li>
                  <li>
                    <Link to='project'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>Project</Link>
                  </li>
                  <li>
                    <Link to='contact'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.addressContainer} col-sm-3 col-md-6 col-lg-3  `}>
              <h5 className="text-white">Address</h5>
              <div className=" py-5">
                <div className=" py-2 d-flex text-white item-algin-center">
                 <MdLocationOn style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '18px' }} /> 
                  <span style={{color: 'white'}}>&#160; &#160; &#160;123 Street Name, City, Country</span>
                </div>
                <div className=" py-2">
                <IoMdMail style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '18px' }}/>
                  <span style={{color: 'white'}}>&#160; &#160; &#160;Email: info@example.com</span>
                </div>
                <div className=" py-2">
                <FaPhoneAlt  style={{ color: 'rgba(201, 243, 29, 1)', fontSize: '18px' }}/>
                  <span  style={{color: 'white'}}> &#160; &#160; &#160;Phone: +1234567890</span>
                </div>
              </div>
            </div>
            <form action="" className={`${styles.formbox} `}>
              <input type="email" placeholder="Email Address" />
              <div className={styles.Button}>
                <Button
                  Name="Sgin"
                  Icon= < FaAngleRight />
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className= {`${styles.footersocial} container-fluid col-sm-10 col-lg-10 col-md-10 py-3 d-flex text-white justify-content-between`}>
      <div>
        <p>Copyright @2024, <span>Noxfolio</span> All Rights Reserved</p>
        </div>
        <div className={`${styles.social} col-lg-2 col-md-4 d-flex  item-algin-center justify-content-between`}>
          <a href=""> <FaGithub style={{  fontSize: '18px' }}/></a>
          <a href=""> <FaFacebook style={{  fontSize: '18px' }}/> </a>
          <a href=""> <FaLinkedin style={{  fontSize: '18px' }}/> </a>
          <a href=""> <FaInstagram style={{  fontSize: '18px' }}/> </a>
          <a href=""> <FaBehance style={{  fontSize: '18px' }}/> </a>
      
        </div>

      </div>

    </footer>
  );
}

export default Footer;
