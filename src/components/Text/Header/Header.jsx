import React, { useMemo } from 'react';

import { isHTML } from '../../../utils/common';
import styles from './Header.styles';

/**
 * @param text - used as content text in HTML tags for component
 * @param children - used as content for component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Header = ({ text, children, ...styleProps }) => {
  const isDangerouslySetInnerHTML = useMemo(() => isHTML(text), [text]);
  return isDangerouslySetInnerHTML ? (
    <p className="text-header" css={styles(styleProps)} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <p className="text-header" css={styles(styleProps)}>
      {children || text}
    </p>
  );
};

export default Header;
