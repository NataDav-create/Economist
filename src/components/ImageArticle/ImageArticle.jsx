import React from 'react';

import styles from './ImageArticle.styles';

const ImageArticle = ({ data }) => (
  <div css={styles()}>
    <img className="image-article" src={data.url} alt={data.alt} />
  </div>
);

export default ImageArticle;
