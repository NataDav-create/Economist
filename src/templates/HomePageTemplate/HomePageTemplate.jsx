import { withPrefix } from 'gatsby';
import React from 'react';
import { Hero } from '../../components/Hero';
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
        <Hero />
      </Wrapper>{' '}
    </div>{' '}
  </Layout>
);

export default HomePageTemplate;
