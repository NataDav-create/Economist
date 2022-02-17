import React from 'react';

import { Subtitle } from '../Text/Subtitle';
import styles from './Paragraph.styles';

const Paragraph = ({ data, title, marginSize }) => (
    <>
      {title && <Subtitle>{title}</Subtitle>}
      <p className="article-text" dangerouslySetInnerHTML={{ __html: data }} css={styles(marginSize)} />
    </>
  );

export default Paragraph;
