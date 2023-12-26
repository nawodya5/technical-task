import React from 'react';

import classes from './CustomButton.module.css';

const CustomButton: React.FC<{ title: string }> = ({ title }) => {
    return (
        <button className={classes.button}>{title}</button>
    )
}

export default CustomButton;