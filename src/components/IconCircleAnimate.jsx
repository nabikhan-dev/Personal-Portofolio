import React from 'react';
import dot from "../assets/aboutdot.png"
import styles from "./IconCircleAnimate.module.css"
const AboutDot = () => {
  return (
    <div >
      <img src={dot} alt="Rotating Image" className={styles.rotatingImage} />
    </div>
  );
};

export default AboutDot;
