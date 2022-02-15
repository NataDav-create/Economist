import React from 'react';

import styles from './NavigationBlock.styles';

const NavigationCard = ({ data, title, text, styleText, direction, prevImg, nextImg, prevMob, nextMob, mobText }) => (
  <div className="navigation-card" css={styles(styleText, prevImg, nextImg, prevMob, nextMob)}>
    <p className="nav-mobile-text">{mobText}</p>
    <div className="image-wrapper">
      <img className="image-nav" src={data} alt={title} />
    </div>
    <div className="content-wrapper">
      <div className="content-nav">{direction}</div>
      <h3 className="content-title">{title}</h3>
      <p className="content-text">{text}</p>
    </div>
  </div>
);

export default NavigationCard;
