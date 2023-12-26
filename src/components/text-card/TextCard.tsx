import React from 'react';

import classes from './TextCard.module.css';
import CustomButton from '../custom-button/CustomButton';

const TextCard: React.FC<{ title: string, subTitle: string, btnText: string }> = ({ title, subTitle, btnText }) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.subTitle}>{subTitle}</p>
            <CustomButton title={btnText} />
        </div>
    )
}

export default TextCard;