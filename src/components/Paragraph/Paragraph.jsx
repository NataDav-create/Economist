import React from 'react';

import styles from './Paragraph.styles';

const Paragraph = ({ data, marginSize }) => (
  <p className="article-text" css={styles(marginSize)}>
    {data}
  </p>
);

export default Paragraph;
