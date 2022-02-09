import React from 'react';

import styles from './Divider.styles';

/**
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Divider = ({ ...styleProps }) => <div className="divider" css={styles(styleProps)} />;

export default Divider;
