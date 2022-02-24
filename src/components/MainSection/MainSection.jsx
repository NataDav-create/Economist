import React from 'react';

import componentIndex from '../componentIndex';
import NavigationBlock from '../NavigationBlock/NavigationBlock';
import NavigationCard from '../NavigationBlock/NavigationCard';
import { SideMenu } from '../SideMenu';
import styles from './MainSection.styles';

const MainSection = ({
  contentData,
  assets,
  menuData,
  futureMenuData,
  imageSideMenu,
  navigationPrev,
  navigationNext,
  mobileBtnPrev,
  mobileBtnNext,
}) => {
  const { prevArrow, nextArrow } = assets;

  return (
    <div css={styles} className="mainSect">
      <div className="container">
        <div className="articles-wrapper">
          <SideMenu image={imageSideMenu.url} alt={imageSideMenu.alt} menuData={menuData} futureMenuData={futureMenuData} />
          <div className="article-inner">
            {contentData.map((item, index) => {
              const Component = componentIndex[item.type];
              return <Component data={item.data} key={`${item.type}-${index}`} />;
            })}
          </div>
        </div>
      </div>
      <div className="navigation-wrap">
        <div className="navi-container">
          <div className="navigation-inner">
            <div className="blank"/>
            <NavigationBlock>
              <NavigationCard
                data={navigationPrev.navigationImage}
                title={navigationPrev.title}
                text={navigationPrev.text}
                styleText={'prev'}
                direction={navigationPrev.direction}
                link={navigationPrev.link}
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
                link={navigationNext.link}
                nextImg={nextArrow}
                mobText={mobileBtnNext.text}
                mobImage={mobileBtnNext.image}
              />
            </NavigationBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
