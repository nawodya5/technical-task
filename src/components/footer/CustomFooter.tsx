import React from 'react';

import Logo from '../../assets/Logo.png';
import classes from './CutomFooter.module.css';

const CustomFooter: React.FC = () => {
    return (
        <div className={classes.mainContaier}>
            <div className={classes.subContainers}>
                <div className={classes.mainLogo}>
                    <img src={Logo} />
                    <div className={classes.subHeading}>
                        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.sideOne}>
                        <h2 className={classes.heading}>Our Technologies</h2>
                        <div className={classes.subHeading}>
                            <p>ReactJS</p>
                            <p>Gatsby</p>
                            <p>NextJS</p>
                            <p>NodeJS</p>
                            <p>GraphQL</p>
                            <p>Laravel</p>
                        </div>

                    </div>
                    <div className={classes.sideTwo}>
                        <h2 className={classes.heading}>Our Services</h2>
                        <div className={classes.subHeading}>
                            <p>Social media Marketing</p>
                            <p>Web & Mobile App Development</p>
                            <p>Data & Analytics</p>
                            <p>Google Marketing solutions</p>
                            <p>Search Engine Optimization</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className={classes.footerEnd}>
                <div className={classes.line}></div>
                <p className={classes.footerEndText}>Privacy Policy &nbsp;|&nbsp; Terms & Conditions</p>
            </div>
        </div>

    )
}

export default CustomFooter;