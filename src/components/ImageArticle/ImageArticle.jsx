import React from 'react';

import styles from './ImageArticle.styles';

const ImageArticle = ({ image, titleImg }) => (
  <div css={styles(image)}>
    <img className="image-article" src={image} alt={titleImg} />
  </div>
);

export default ImageArticle;
