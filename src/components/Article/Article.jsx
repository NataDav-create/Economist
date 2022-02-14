import React from 'react';

import { ImageArticle } from '../ImageArticle';
import { Paragraph } from '../Paragraph';
import { Subtitle } from '../Text/Subtitle';
import styles from './Article.styles';

const Article = ({ data, title, image }) => (
  <div className="article-wrapper" css={styles}>
    <Subtitle>{title}</Subtitle>
    <Paragraph data={data} />
    {image && <ImageArticle image={image} titleImg={title} />}
  </div>
);

export default Article;
