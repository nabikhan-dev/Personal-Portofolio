import styles from './ClientProjectSection.module.css'
import logo1 from '../../assets/client-logo 1.png'
import logo2 from '../../assets/client-logo 2.png'
import logo3 from '../../assets/client-logo 3.png'
import logo4 from '../../assets/client-logo 4.png'
import logo5 from '../../assets/client-logo 5.png'
import logo6 from '../../assets/client-logo 6.png'
import logo7 from '../../assets/client-logo 7.png'
import logo8 from '../../assets/client-logo 8.png'
import logo9 from '../../assets/client-logo 9.png'
import logo10 from '../../assets/client-logo 10.png'
function ClientProject() {
    return (
        <>
            <div className="container-fluid col-sm-10 col-lg-10 col-md-10 mt-4  ">
                <div className="row ">
                  <h4 className= {`${styles.h4} col-sm-7 col-md-5  `} > I’ve <span>1253+ Global Clients</span> & lot’s of Project Complete </h4> 
                    <div className={`${styles.container}`}>
                       
                        <div className={`${styles.logo}`}>
                            <img src={logo1} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo2} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo3} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo4} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo5} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo6} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo7} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo8} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo9} alt="" />
                        </div>
                        <div className={`${styles.logo}`}>
                            <img src={logo10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default ClientProject;