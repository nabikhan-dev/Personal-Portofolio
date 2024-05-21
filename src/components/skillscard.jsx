import React, { useState } from 'react';
import styles from './skillscard.module.css';

function SkillsCard({ src, Name, progress, alt }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles.container}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`${styles.img}`}>
                <img src={src} alt={alt} />
            </div>
            <div className={`${styles.text}`}>
                {Name}
            </div>
            <div className={`${styles.statusBarContainer}`}>
                <div className={`${styles.statusBar}`} style={{ width: `${isHovered ? progress : 0}`, backgroundColor: `${isHovered ? 'rgba(201, 243, 29, 1)' : 'rgba(19, 19, 19, 1)'}`, color: `${isHovered ? '#131313' : 'rgba(255, 255, 255, 0.35)'}` }}>
                    {isHovered && `${progress}`}
                    
                </div>
            </div>
        </div>
    )
}

export default SkillsCard;
