import React, { useState, useEffect } from 'react';
import styles from './mouse.module.css'; 

const MouseTracker = () => {
  // Mouse Tracker Funtions
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={styles.cursor}
          style={{
            left: Math.min(window.innerWidth - 50, position.x + 10),
            top: Math.min(window.innerHeight - 50, position.y + 10),
          }}
        ></div>
      )}
    </>
  );
};

export default MouseTracker;
