import React from 'react';

import classes from './HeroText.module.css';
import CustomButton from '../custom-button/CustomButton';


const HeroText: React.FC = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>We crush your competitors, goals, and sales records - without the B.S.</h1>
            <div>
                <CustomButton title='GET FREE CONSULTATION' />
            </div>
        </div>
    )
}

export default HeroText;