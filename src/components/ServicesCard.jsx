import 'bootstrap/dist/css/bootstrap.min.css';
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from './Servicecard.module.css';

const ServicesCard = ({ number, title, description }) => {
    return (
        <div className={`${styles.card} ` } >
            <div className={styles.number}>
                {number}
            </div>
            <div>
                <div className={styles.title}>{title}
                    <p className={styles.description}>
                        {description}</p>
                </div>
            </div>
            <div className={`${styles.circle}`}>
            < PiArrowUpRightBold />
            </div>

        </div>
    );
};

export default ServicesCard;
