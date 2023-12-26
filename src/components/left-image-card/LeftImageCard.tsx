import React from 'react';

import TextCard from '../text-card/TextCard';
import ImageOne from '../../assets/image_2.png';
import classes from './LeftImageCard.module.css';

const LeftImageCard: React.FC = () => {
    return (
        <div className={classes.contaier}>
            <img src={ImageOne} />
            <TextCard
                title='Web & Mobile App Development'
                subTitle='Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.'
                btnText='LEARN MORE'
            />
        </div>
    )
}

export default LeftImageCard;