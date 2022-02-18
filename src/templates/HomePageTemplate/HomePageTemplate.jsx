import React from 'react';

import { Hero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { MainSection } from '../../components/MainSection';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const { hero, main: {contentData, imageSideMenu, navigationPrev, navigationNext, mobileBtnPrev, mobileBtnNext}, common } = PageData;

  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          <Hero data={hero} common={common} />
          <MainSection mobileBtnPrev={mobileBtnPrev} mobileBtnNext={mobileBtnNext} contentData={contentData} common={common} imageSideMenu={imageSideMenu} navigationPrev={navigationPrev} navigationNext={navigationNext} />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
