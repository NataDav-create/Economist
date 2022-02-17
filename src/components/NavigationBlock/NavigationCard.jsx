import React from 'react';

import { DirectionBtn } from '../DirectionBtn';
import MobileBtn from '../MobileBtn/MobileBtn';
import styles from './NavigationBlock.styles';

const NavigationCard = ({ data, title, text, styleText, direction, prevImg, nextImg, mobText, mobImage }) => (
  <>
    <div className="navigation-card" css={styles(styleText, prevImg, nextImg)}>
      <div className="image-wrapper">
        <img className="image-nav" src={data} alt={title} />
      </div>
      <div className="content-wrapper">
        <DirectionBtn direction={direction} styleText={styleText} prevImg={prevImg} nextImg={nextImg} />
        <h3 className="content-title">{title}</h3>
        <p className="content-text">{text}</p>
      </div>
    </div>
    <MobileBtn styleText={styleText} mobImg={mobImage} mobText={mobText}>
      {mobText}
    </MobileBtn>
  </>
);

export default NavigationCard;
