import React from 'react';

import { DownloadButton } from '../DownloadButton';
import NavigationBlock from '../NavigationBlock/NavigationBlock';
import NavigationCard from '../NavigationBlock/NavigationCard';
import { Paragraph } from '../Paragraph';
import { ParagraphWrap } from '../ParagraphWrap';
import { QuoteBlock } from '../QuoteBlock';
import {SideMenu} from '../SideMenu';
import styles from './MainSection.styles';

const MainSection = ({ contentData, common }) => {
  const {
    textOne,
    textTwo,
    textThree,
    textFour,
    textFive,
    textSix,
    textSeven,
    textEight,
    imageOne,
    imageTwo,
    imageThree,
    imageSideMenu,
    quoteOne,
    navigationPrev,
    navigationNext,
    mobileBtnPrev,
    mobileBtnNext,
  } = contentData;

  const { arrowWhite, prevArrow, nextArrow } = common;

  return (
    <div css={styles}>
      <div className="container">
        <div className="articles-wrapper">
          <SideMenu image={imageSideMenu.url} alt={imageSideMenu.alt} />
          <div className="article-inner">
            <Paragraph data={textOne.text} marginSize={'big'} />
            <ParagraphWrap data={textTwo.text} marginSize={'small'} title={textTwo.title} image={imageThree.url} />
            <Paragraph data={textThree.text} marginSize={'big'} />
            <ParagraphWrap data={textFour.text} marginSize={'small'} title={textFour.title} image={imageOne.url} />
            <ParagraphWrap data={textFive.text} marginSize={'small'} title={textFive.title} image={imageTwo.url} />
            <Paragraph data={textSix.text} marginSize={'big'} />
            <ParagraphWrap data={textSeven.text} marginSize={'small'} title={textSeven.title} />
            <QuoteBlock data={quoteOne.text} quoteTitle={quoteOne.authorTitle} image={quoteOne.quoteImg} />
            <Paragraph data={textEight.text} marginSize={'big'} />
            <DownloadButton arrowWhite={arrowWhite} className="main-btn" styleBg={'secondary'} />
            <NavigationBlock>
              <NavigationCard
                data={navigationPrev.navigationImage}
                title={navigationPrev.title}
                text={navigationPrev.text}
                styleText={'prev'}
                direction={navigationPrev.direction}
                prevImg={prevArrow}
                mobText={mobileBtnPrev.text}
                mobImage={mobileBtnPrev.image}
              />
              <NavigationCard
                data={navigationNext.navigationImage}
                title={navigationNext.title}
                text={navigationNext.text}
                styleText={'next'}
                direction={navigationNext.direction}
                nextImg={nextArrow}
                mobText={mobileBtnNext.text}
                mobImage={mobileBtnNext.image}
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
