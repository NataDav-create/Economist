import React from 'react';

import styles from './NavigationBlock.styles';

const NavigationCard = ({ data, title, text, styleText, direction, prevImg, nextImg }) => (
  <div css={styles(styleText, prevImg, nextImg)}>
    <div className="navigation-card">
      <div className="image-wrapper">
        <img src={data} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="content-nav">{direction}</div>
        <h3 className="content-title">{title}</h3>
        <p className="content-text">{text}</p>
      </div>
    </div>
  </div>
);

export default NavigationCard;
