import  { useState, useEffect } from 'react';
import styles from "./card.module.css";

const NumberAnimator = ({ value, showPercent, showPlus }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const animationDuration = 1000; // in milliseconds
    const framesPerSecond = 60;
    const totalFrames = animationDuration / (1000 / framesPerSecond);
    const increment = value / totalFrames;
    let currentFrame = 0;

    const animationInterval = setInterval(() => {
      currentFrame++;
      if (currentFrame >= totalFrames) {
        clearInterval(animationInterval);
      } else {
        setAnimatedValue((prevValue) => prevValue + increment);
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(animationInterval);
  }, [value]);

  return (
    <span className={`${styles["card"]}`}>
      {Math.round(animatedValue)}
      {showPercent && "%"}
      {showPlus && "+"}
    </span>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <NumberAnimator value={13} showPlus />
        <p className={styles["text"]}>Years Of Experience</p>
      </div>
         <hr className={styles["hr"]} />

      <div>
        <NumberAnimator value={81} showPlus />
        <p className={styles["text"]}>Project Complete</p>
      </div>
         <hr className={styles["hr"]} />
      <div>
        <NumberAnimator value={101} showPercent showPlus />
        <p className={styles["text"]}>Client Satisfactions</p>
      </div>
    </div>
  );
};

export default App;
