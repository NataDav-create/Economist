import React from 'react';

import { ImageArticle } from '../ImageArticle';
import { Paragraph } from '../Paragraph';
import styles from './ParagraphWrap.styles';

const ParagraphWrap = ({ data, title, image }) => (
  <div className="paragraph-wrapper" css={styles}>
    <Paragraph data={data} title={title} />
    {image && <ImageArticle image={image} titleImg={title} />}
  </div>
);

export default ParagraphWrap;
