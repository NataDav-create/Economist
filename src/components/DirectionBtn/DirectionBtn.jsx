import React from 'react';

import styles from './DirectionBtn.styles';

const DirectionBtn = ({ direction, styleText, prevImg, nextImg }) => (
  <div className="content-nav" css={styles(direction, styleText, prevImg, nextImg)}>
    {direction}
  </div>
);

export default DirectionBtn;
