import React, { useMemo } from 'react';

import { isHTML } from '../../../utils/common';
import styles from './Subtitle.styles';

/**
 * @param text - used as content text in HTML tags for component
 * @param children - used as content for component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Subtitle = ({ text, children, ...styleProps }) => {
  const isDangerouslySetInnerHTML = useMemo(() => isHTML(text), [text]);

  return isDangerouslySetInnerHTML ? (
    <h2 className="text-subtitle" css={styles(styleProps)} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <h2 className="text-subtitle" css={styles(styleProps)}>
      {children || text}
    </h2>
  );
};
export default Subtitle;
