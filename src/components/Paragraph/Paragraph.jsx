import React from 'react';

import styles from './Paragraph.styles';

const Paragraph = ({ data }) => (
  <div css={styles()}>
    {data.title && <h2 className="article-title">{data.title}</h2>}
    <p className="article-text" dangerouslySetInnerHTML={{ __html: data.text }} />
  </div>
);

export default Paragraph;
