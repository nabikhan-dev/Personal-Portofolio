import ProjectCard from "../projectcard";
import styles from './projectsection.module.css';
import project from '../../assets/project.png';
import ProjectCardleft from "../projectcardleft";
import Button from "../button";
import { FaAngleRight } from "react-icons/fa";

function ProjectSection() {
    return (
        <section id="project">
            <div className={`container-fluid col-sm-12 col-md-10 col-lg-10`}>
                <div className={`${styles.projectSectionContainer}`}>
                    <div className={`${styles["pro-container"]}`}>
                        <h4 className={`${styles["subheadlines"]}`}>Latest Works</h4>
                        <h1 className={`${styles["Headline"]} text-center`}>Explore My Popular <span>Projects</span></h1>
                    </div>
                </div>
                <div className={`${styles.projectCardsContainer}`}>
                    <ProjectCard
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} 
                    />
                    <ProjectCardleft
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} 
                    />
                    <ProjectCard
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} 
                    />
                    <ProjectCardleft
                        src={project}
                        title={"Product Design"}
                        name={"Mobile Application UI/UX Design"}
                        description={"Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis architecto beatae"} 
                    />
                </div>
                <div className={styles.pro_button}>
                    <Button
                        Name={"View More Project"}
                        Icon={<FaAngleRight />} 
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
