import styles from "./herosection.module.css";
import heroimg from "../../assets/section.png";
import NumberAnimator from "../card";
import Button from '../button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight } from "react-icons/fa";

const Hero_section = () => {
    const openGoogleDriveLink = () => {
      window.open('https://drive.google.com/file/d/1dGlEt2ScVDEOKNaLKeKmIZ6HLyQeTcmc/view?usp=sharing', '_blank', 'noopener,noreferrer');
    };
 const openWhatsapp = () => {
      window.open('https://api.whatsapp.com/send/?phone=9203348885173&text&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer');
    };


  
    return (

        <section id="hero" className={styles["hero"]}>
            <div style={{paddingTop: '140px'}} className="container-fluid  col-sm-10 col-md-10 col-lg-10">
                <div className=" row ">
                    <div className={`${styles["title-section"]} col-lg-4 col-md-5 col-sm-4 `}>
                        <h3 className={styles["title"]}>Hello, i’m</h3>
                        <h1 style={{ color: '#ffffff' ,fontSize: '63px' ,fontWeight: 'normal'}}><span style={{color: 'rgba(201, 243, 29, 1)', fontWeight: 'bold', fontSize:'60px' }}>Muhammad Nabi</span> <br />
                        React Develper <br /> <span style={{color: "#fff", fontSize: '30px'}}>& </span><span style={{color: 'rgba(201, 243, 29, 1)', fontWeight: 'bold', fontSize:'60px' }}>UI/UX Desiger</span></h1>
                        <p style={{ color: '#ffffff', fontSize: '16px' , opacity: '0.6'}}>I design and build websites, mobile apps, and user experiences using React, React Native, and UI/UX principles to bring ideas to life.
                        </p>
                        <div className={`${styles.button} `}>
                        <Button Name="Hire Me"
                        onClick={openWhatsapp}
                        Icon= <FaAngleRight />  
                            />
                        <button className={`${styles["button-2"]}`} onClick={openGoogleDriveLink}>
                            <u>Download Resume</u> <FaAngleRight />
                        </button>
                        </div>
                    </div>
                    <div className={`${styles["hero-img"]}  col-lg-5 col-sm-5 col-md-5  `}>
                        <img src={heroimg} alt="" />
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3">
                        <div className={`${styles["card"]}`}>

                                <NumberAnimator />                       

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default Hero_section;
