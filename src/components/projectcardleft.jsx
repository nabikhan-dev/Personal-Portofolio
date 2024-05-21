import styles from './projectcardleft.module.css'
import { PiArrowUpRightBold } from "react-icons/pi";
function ProjectCard({ title, description, src, name }) {
    return (
        <>
            <div className={`${styles.container} container-fluid col-sm-10 col-md-10 item-align-center  `}>
                <div className='row justify-content-between col-lg-10 '>
                   
                    <div className={`${styles.title} col-sm-4 col-md-4 `}>
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
                    <div className="col-md-5 col-sm-4">
                        <img src={src} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProjectCard;