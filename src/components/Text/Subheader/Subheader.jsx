import React, { useMemo } from 'react';

import { isHTML } from '../../../utils/common';
import styles from './Subheader.styles';

/**
 * @param text - used as content text in HTML tags for component
 * @param children - used as content for component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Subheader = ({ text, children, ...styleProps }) => {
  const isDangerouslySetInnerHTML = useMemo(() => isHTML(text), [text]);

  return isDangerouslySetInnerHTML ? (
    <p className="text-subheader" css={styles(styleProps)} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <p className="text-subheader" css={styles(styleProps)}>
      {children || text}
    </p>
  );
};

export default Subheader;
