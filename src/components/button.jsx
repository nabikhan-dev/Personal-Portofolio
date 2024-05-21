import React from 'react';
import styles from './button.module.css';

function Button({ Name, Icon }) {
    return (
        <button className={styles.button}>
            {Name}
            <span className={styles.icon}>{Icon}</span>
        </button>
    )
}

export default Button;
