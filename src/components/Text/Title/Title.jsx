import React, { useMemo } from 'react';

import { isHTML } from '../../../utils/common';
import styles from './Title.styles';

/**
 * @param text - used as content text in HTML tags for component
 * @param children - used as content for component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Title = ({ text, children, ...styleProps }) => {
  const isDangerouslySetInnerHTML = useMemo(() => isHTML(text), [text]);

  return isDangerouslySetInnerHTML ? (
    <h1 className="text-header" css={styles(styleProps)} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <h1 className="text-header" css={styles(styleProps)}>
      {children || text}
    </h1>
  );
};

export default Title;
