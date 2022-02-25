import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r } from '../../styles/fonts';

const styles = () => css`
  max-width: 100%;

  .container {
    max-width: 1440px;
    padding: ${p2r(50)} ${p2r(32)} 0;
    margin: 0 auto;

    @media (max-width: ${breakpoints.medium}px) {
      padding: ${p2r(50)} ${p2r(15)} ${p2r(70)};
    }
  }

  .articles-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 1440px;

    @media (max-width: ${breakpoints.tablet}px) {
      padding: 0 ${p2r(30)} ${p2r(0)};
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
    }
  }

  .article-inner {
    max-width: 800px;

    @media (max-width: ${breakpoints.medium}px) {
      max-width: 600px;
    }

    @media (max-width: ${breakpoints.tablet}px) {
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      max-width: 100%;
    }
  }

  .navigation-wrap {
    width: 100%;
    position: relative;
    margin-top: ${p2r(50)};
    padding-bottom: ${p2r(100)};
    background-color: ${colors.lightGold};
    box-shadow: rgb(255 255 255) 0px 210px inset;

  }

  .navi-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${p2r(50)} ${p2r(32)} 0;

    @media (max-width: ${breakpoints.medium}px) {
      padding: ${p2r(50)} ${p2r(15)} ${p2r(70)};
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
    }
  }

  .navigation-inner {
    display: flex;

    @media (max-width: ${breakpoints.smallTablet}px) {
      justify-content: center;
    }
  }

  .blank {
    width: 320px;
    margin-right: 100px;

    @media (max-width: ${breakpoints.medium}px) {
      margin-right: 70px;
    }

    @media (max-width: ${breakpoints.tablet}px) {
      display: none;
    }
  }
`;

export default styles;
