import React from 'react';

import styles from './SubTitle.styles';

const SubTitle = ({ data }) => (
  <div css={styles}>
      <h2 className={'article-subtitle'}>{data}</h2>
  </div>
);

export default SubTitle;
