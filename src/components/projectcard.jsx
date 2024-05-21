import styles from './projectcardleft.module.css'
import { PiArrowUpRightBold } from "react-icons/pi";
function ProjectCard({ title, description, src, name }) {
    return (
        <>
            <div className={`${styles.container} container-fluid col-sm-11 col-md-11 col-lg-11 item-align-center  `}>
                <div className='row justify-content-between col-lg-10 '>
                <div className="col-md-5 col-sm-5 col-lg-5">
                        <img src={src} alt="" />
                    </div>
                    <div className={`${styles.title} col-sm-4 col-md-4 col-lg-2`}>
                        <h6>
                            {title}
                        </h6>
                        <h1>
                            {name}
                        </h1>
                        <p>
                            {description}
                        </p>
                        <div className={`${styles.circle}`}>
                       < PiArrowUpRightBold/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProjectCard;