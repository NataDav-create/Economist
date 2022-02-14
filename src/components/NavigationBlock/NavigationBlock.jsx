import React from 'react';

import styles from './NavigationBlock.styles';

const NavigationBlock = ({ children }) => (
  <div css={styles}>
    <div className="navigation-wrapper">{children}</div>
  </div>
);

export default NavigationBlock;
