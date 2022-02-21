import React from 'react';

import { Hero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { MainSection } from '../../components/MainSection';
import { Wrapper } from '../../components/Wrapper';
import styles from './SecondArticlePageTemplate.styles';

const secondArticlePage = ({ pageContext: { PageData, CommonInfo } }) => {
  const {
    hero,
    main: { contentData, imageSideMenu, navigationPrev, navigationNext, mobileBtnPrev, mobileBtnNext },
  } = PageData;
  const { menuData, assets, futureMenuData } = CommonInfo;

  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          <Hero data={hero} assets={assets} />
          <MainSection
            mobileBtnPrev={mobileBtnPrev}
            mobileBtnNext={mobileBtnNext}
            contentData={contentData}
            assets={assets}
            imageSideMenu={imageSideMenu}
            navigationPrev={navigationPrev}
            navigationNext={navigationNext}
            menuData={menuData}
            futureMenuData={futureMenuData}
          />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default secondArticlePage;
