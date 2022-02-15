import React from 'react';

import { Article } from '../Article';
import { DownloadButton } from '../DownloadButton';
import NavigationBlock from '../NavigationBlock/NavigationBlock';
import NavigationCard from '../NavigationBlock/NavigationCard';
import { Paragraph } from '../Paragraph';
import { QuoteBlock } from '../QuoteBlock';
import styles from './MainSection.styles';

const MainSection = (props) => {
  const { intro, article1, article2, article3, article4, quote1, common, navNext, navPrev } = props;
  const { arrowWhite, prevArrow, nextArrow } = common;

  return (
    <div css={styles}>
      <div className="container">
        <div className="articles-wrapper">
          <div className="menu-inner">sidebar</div>
          <div className="article-inner">
            <Paragraph data={intro.text} marginSize={'big'} />
            <Article data={article1.text} marginSize={'small'} title={article1.title} image={article1.articleImage} />
            <Paragraph data={article1.conclusion} marginSize={'big'} />
            <Article data={article2.text} marginSize={'small'} title={article2.title} image={article2.articleImage} />
            <Article data={article3.text} marginSize={'small'} title={article3.title} image={article3.articleImage} />
            <Paragraph data={article3.conclusion} marginSize={'big'} />
            <Article data={article4.text} marginSize={'small'} title={article4.title} />
            <QuoteBlock data={quote1.text} quoteTitle={quote1.authorTitle} image={quote1.quoteImg} />
            <Paragraph data={article4.conclusion} marginSize={'big'} />
            <DownloadButton arrowWhite={arrowWhite} className="main-btn" styleBg={'secondary'} />
            <NavigationBlock>
              <NavigationCard
                data={navPrev.navigationImage}
                title={navPrev.title}
                text={navPrev.text}
                styleText={'prev'}
                direction={navPrev.direction}
                prevImg={prevArrow}
                prevMob={navPrev.prevMobile}
                mobText={navPrev.mobileText}
              />
              <NavigationCard
                data={navNext.navigationImage}
                title={navNext.title}
                text={navNext.text}
                styleText={'next'}
                direction={navNext.direction}
                nextImg={nextArrow}
                nextMob={navNext.nextMobile}
                mobText={navNext.mobileText}
              />
            </NavigationBlock>
          </div>
        </div>
      </div>
      <div className="final-block"></div>
    </div>
  );
};

export default MainSection;
