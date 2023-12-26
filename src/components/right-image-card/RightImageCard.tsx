import React from 'react';

import TextCard from '../text-card/TextCard';
import ImageOne from '../../assets/image_1.png';
import classes from './RightImageCard.module.css';

const RightImageCard: React.FC = () => {
    return (
        <div className={classes.contaier}>
            <TextCard
                title='Digital Strategy Consulting'
                subTitle='Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.'
                btnText='LEARN MORE'
            />
            <img src={ImageOne} />
        </div>
    )
}

export default RightImageCard;