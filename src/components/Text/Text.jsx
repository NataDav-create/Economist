import React, { useMemo } from 'react';

import { isHTML } from '../../utils/common';
import styles from './Text.styles';

/**
 * @param text - used as content text in HTML tags for component
 * @param children - used as content for component
 * @param styleProps - used as styles properties which component can have
 * @returns {JSX.Element}
 * @constructor
 */

const Text = ({ text, children, ...styleProps }) => {
  const isDangerouslySetInnerHTML = useMemo(() => isHTML(text), [text]);

  return (
    <div css={styles(styleProps)}>
      {isDangerouslySetInnerHTML ? (
        <p className="text" dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p className="text">{children || text}</p>
      )}
    </div>
  );
};

export default Text;
