import styles from './skillssection.module.css'
import SkillsCard from '../skillscard';
import Button from '../button'
import Bootstrap from "../../assets/LogosBootstrap.png"
import Tailwind from "../../assets/LogosTailwindcssIcon.png"
import Redux from "../../assets/LogosRedux.png"
import Html from "../../assets/Html5.png"
import Css from '../../assets/Css3.png'
import Js from '../../assets/Javascript.png'
import Rjs from '../../assets/React.png'
import { FaAngleRight } from "react-icons/fa";

function SkillsSection() {
    return (
        <section id="skills">
            <div className={`${styles["skills"]} align-items-center container-fluid col-sm-10 mt-5 col-lg-10`}>
                <div className={`${styles["container"]}`}>
                    <div className=" row align-items-center">
                        <div className={`${styles["skills-contianer"]} col-sm-5 `}>
                            <h4 className={styles["title"]}>My Skills</h4>
                            <h1 className={styles["heading"]}>Let’s Explore Popular<span ><br />Skills & Experience</span>
                            </h1>
                            <p className={styles["text"]}>I focus on UI/UX design to create easy-to-use experiences. I build mobile apps with React Native and web apps with React JS. I design effective e-commerce sites and offer helpful consultation for digital growth. I also do wireframing and prototyping to plan ideas and create engaging social media posters.
                            </p>
                            <div className={`${styles.btn}`}>
                                <Button Name="Learn More"
                                    Icon= <FaAngleRight /> />
                            </div>
                        </div>

                        <div className={`${styles["skills-items"]} col-sm-7`}>
                        
                            <SkillsCard
                                src={Html}
                                Name={"Html"}
                                progress={"90%"} />
                            <SkillsCard
                                src={Css}
                                Name={"CSS"}
                                progress={"90%"} />
                            <SkillsCard
                                src={Js}
                                Name={"Java Script"}
                                progress={"75%"} />
                            <SkillsCard
                                src={Rjs}
                                Name={"React Js"}
                                progress={"80%"} />
                                    <SkillsCard
                                src={Bootstrap}
                                Name={"Bootstrap"}
                                progress={"95%"} />
                            <SkillsCard
                                src={Tailwind}
                                Name={"Tailwind"}
                                progress={"80%"} />
                            <SkillsCard
                                src={Rjs}
                                Name={"React Native"}
                                progress={"75%"} />
                            <SkillsCard
                                src={Redux}
                                Name={"Redus"}
                                progress={"85%"} />
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}
export default SkillsSection;