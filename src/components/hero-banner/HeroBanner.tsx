import React from 'react';

import classes from './HeroBanner.module.css';
import HeroText from '../hero-text/HeroText';
import Banner from '../../assets/hero_image.png';

const HeroBanner: React.FC = () => {
    return (
        <div className={classes.container}>
            <img className={classes.image} width={'100%'} height={700} src={Banner} />
            <div className={classes.heroText}>
                <HeroText />
            </div>
        </div>
    )
}

export default HeroBanner;