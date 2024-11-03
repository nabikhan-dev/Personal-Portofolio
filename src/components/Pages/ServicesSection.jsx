import CardComponent from '../ServicesCard';
import styles from './servicessection.module.css';

const ServicesSection = () => {
    return (
        <section id='services'>
            <div className={`${styles["container"]} container-fluid col-sm-10 col-lg-9 col-md-10 item-align-center`}>
                <div className={`${styles["text-container"]}`}>
                    <h4>Popular Services</h4>
                    <h1 className='item-align-center'>
                        My <span style={{ color: 'rgba(201, 243, 29, 1)' }}>Special Service</span>
                        For your Business Development
                    </h1>
                </div>
                <div className='row d-flex flex-wrap'>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="01."
                            title="UI/UX Design"
                            description="Creating user-friendly designs for seamless experiences." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="02."
                            title="React Native Development"
                            description="Building high-performance cross-platform mobile apps." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="03."
                            title="React JS Development"
                            description="Developing dynamic web applications with modular components." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="04."
                            title="Prototyping"
                            description="Rapidly creating interactive prototypes to visualize ideas." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="05."
                            title="Frontend Web Development"
                            description="Ensuring websites look great on all devices." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="06."
                            title="Custom API Integration"
                            description="Connecting applications with third-party services for enhanced functionality." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="07."
                            title="Social Media Poster Design"
                            description="Crafting eye-catching posters for effective social media engagement." />
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <CardComponent
                            number="08."
                            title="Wireframing"
                            description="Developing low-fidelity wireframes to outline app and website structures." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
