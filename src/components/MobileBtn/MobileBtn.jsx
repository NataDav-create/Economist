import React from 'react';

import styles from './MobileBtn.styles';

const MobileBtn = ({ styleText, mobText, mobImg }) => (
  <div css={styles(styleText, mobText, mobImg)}>
    <button className="nav-mobile-text">{mobText}</button>
  </div>
);
export default MobileBtn;
