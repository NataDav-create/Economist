import React from 'react';

import { Hero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { MainSection } from '../../components/MainSection';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const {
    hero,
    common,
    introArticle,
    articleOne,
    articleTwo,
    articleThree,
    articleFour,
    quoteOne,
    navigationPrev,
    navigationNext,
  } = PageData;

  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          <Hero data={hero} common={common} />
          <MainSection
            intro={introArticle}
            article1={articleOne}
            article2={articleTwo}
            article3={articleThree}
            article4={articleFour}
            quote1={quoteOne}
            common={common}
            navPrev={navigationPrev}
            navNext={navigationNext}
          />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
