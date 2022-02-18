import FadeIn from '@economist/fabric-components/animation/FadeIn/FadeIn';
import SlideIn from '@economist/fabric-components/animation/SlideIn/SlideIn';
import React from 'react';

import styles from './QuoteBlock.styles';

const QuoteBlock = ({ data }) => (
  <div css={styles}>
    <SlideIn triggerOnce={true} translateY={'0'} duration={'0.5s'}>
      <div className="quote-circle">
        <img className="quote-img" src={data.quoteImg} />
      </div>
    </SlideIn>
    <div className="quote-wrapper">
      <FadeIn triggerOnce={true} duration={'1.5s'}>
        <p className="quote-text">{data.text}</p>
      </FadeIn>
      <strong className="quote-author" dangerouslySetInnerHTML={{ __html: data.authorTitle }} />
    </div>
  </div>
);

export default QuoteBlock;
