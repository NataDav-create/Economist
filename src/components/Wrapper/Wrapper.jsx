import React from 'react';

import styles from './Wrapper.styles';

/**
 * @param children - used as content for this component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Wrapper = ({ children, ...styleProps }) => (
  <div css={styles(styleProps)}>
    <div className="wrapper">
      <div className="wrapper__child">{children}</div>
    </div>
  </div>
);

export default Wrapper;
