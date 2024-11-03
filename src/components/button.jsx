import styles from './button.module.css';

const Button = ({ Name, Icon, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {Name}
            <span className={styles.icon}>{Icon}</span>
        </button>
    );
}

export default Button;
