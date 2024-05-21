import ProjectCard from "../projectcard";
import styles from './projectsection.module.css';
import project from '../../assets/project.png';
import ProjectCardleft from "../projectcardleft";
import Button from "../button";
import { FaAngleRight } from "react-icons/fa";

function ProjectSection() {
    return (
        <section id="project" className={styles.projectSection}>
            <div className='container-fluid col-sm-10 col-lg-10 col-md-10 item-align-center '>
                <div className={`${styles.projectSectionContainer}`}>

                    <div className={`${styles["pro-container"]} item-align-center`}>
                        <h4>Latest Works</h4>
                        <h1 className="col-sm-11 col-md-11 col-lg-11 text-center item-align-center">Explore My Popular <span>Projects</span></h1>
                    </div>
                </div>
                <div >
                    <ProjectCard
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} />
                </div>
                <div >
                    <ProjectCardleft
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} />
                </div>
                <div >
                    <ProjectCard
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} />
                </div>
                <div >
                    <ProjectCardleft
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} />
                </div>

            </div>
            <div className={styles.pro_button}>
                <Button
                    Name={"View More Project"}
                    Icon={<FaAngleRight />} />
            </div>
        </section>
    );
}

export default ProjectSection;
