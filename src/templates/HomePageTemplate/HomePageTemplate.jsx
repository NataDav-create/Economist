import { withPrefix } from 'gatsby';
import React from 'react';

import { Divider } from '../../components/Divider';
import { Layout } from '../../components/Layout';
import { Text } from '../../components/Text';
import { Header } from '../../components/Text/Header';
import { Subheader } from '../../components/Text/Subheader';
import { Subtitle } from '../../components/Text/Subtitle';
import { Title } from '../../components/Text/Title';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => (
  <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
    <div css={styles}>
      <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
        <div className="template-container">
          <Title text={PageData.hero.title} width={'70%'} />
          <Text text={'Hello word'} maxWidth={'100px'} />
          <Divider height={6} />
          <Subtitle text={PageData.hero.subtitle} />
          <Text text={PageData.text.first} />
          <Divider height={'45px'} />
          <Header text={'Header'} width={'90%'} maxWidth={'300px'} fontWeight={500} />
          <Divider height={2} />
          <Subheader text={'Subheader'} maxWidth={'200px'} fontWeight={'normal'} />
          <Divider height={8} />
          <img src={withPrefix(PageData.hero.backgroundImage)} alt="heroImage" />
        </div>
      </Wrapper>
    </div>
  </Layout>
);

export default HomePageTemplate;
