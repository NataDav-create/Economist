import React from 'react';

import styles from './MobileMenuBtn.style';

const MobileMenuBtn = ({toggleOpen}) => (
  <div css={styles} onClick={toggleOpen} className="menu-btnWrapper">
    <div className="menu-inner">
      <div className="menu-singleRow" />
      <div className="menu-singleRow" />
      <div className="menu-singleRow" />
    </div>
    <span>Menu</span>
  </div>
);

export default MobileMenuBtn;
