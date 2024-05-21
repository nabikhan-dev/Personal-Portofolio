
import React from 'react';
import CardComponent from '../ServicesCard';
import styles from './servicessection.module.css'


const ServicesSection = () => {
    return (
        <section id='services'>
            
                <div className={`${styles["container"]} container-fluid  col-sm-10 col-lg-9  col-md-10 item-algin-center `}>
                    <div className={`${styles["text-container"]}`}>
                        <h4>Popular Services</h4>
                        <h1 className=' item-algin-center'>My <span style={{ color: 'rgba(201, 243, 29, 1)'}}>Special Service </span>
                            For your Business Development</h1>
                    </div>
                    <div className='row d-flex flex-wrap'>

                        <div className='col-md-6 col-lg-6   '>
                            <CardComponent
                                number="01."
                                title="Website Designing"
                                description="Description for card 1" />
                        </div>

                        <div className='col-md-6 col-lg-6 '>
                            <CardComponent
                                number="02."
                                title="App Designing"
                                description="Description for card 1" />
                        </div>
                        <div className='col-md-6 col-lg-6 '>
                            <CardComponent
                                number="03."
                                title="Graphic  Designing"
                                description="Description for card 1" />
                        </div>
                        <div className='col-md-6 col-lg-6 '>
                            <CardComponent
                                number="04."
                                title="UX Enhancement"
                                description="Description for card 1" />
                        </div>
                        <div className='col-md-6 col-lg-6 '>
                            <CardComponent
                                number="05."
                                title="Frontend Web Development"
                                description="Description for card 1" />
                        </div>
                        <div className='col-md-6 col-lg-6 '>
                            <CardComponent
                                number="06."
                                title="Prototyping & Wireframing"
                                description="Description for card 1" />
                        </div>

                    </div>
                </div>
            
        </section>



    );
};

export default ServicesSection;
