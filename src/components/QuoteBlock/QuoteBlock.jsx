import React from 'react';

import styles from './QuoteBlock.styles';

const QuoteBlock = ({ data, quoteTitle, image }) => (
  <div css={styles}>
    <div className="quote-circle">
      <img src={image} />
    </div>
    <div className="quote-wrapper">
      <p className="quote-text">{data}</p>
      <strong className="quote-author" dangerouslySetInnerHTML={{ __html: quoteTitle }} />
    </div>
  </div>
);

export default QuoteBlock;
