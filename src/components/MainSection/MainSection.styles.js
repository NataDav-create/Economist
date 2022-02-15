import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r } from '../../styles/fonts';

const styles = () => css`
  position: relative;
  overflow-x: hidden;

  .container {
    max-width: 1440px;
    padding: ${p2r(50)} ${p2r(32)} ${p2r(100)};
    margin: 0 auto;

    @media (max-width: ${breakpoints.medium}px) {
      padding: ${p2r(50)} ${p2r(15)} ${p2r(70)};
    }
  }

  .articles-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 ${p2r(140)} ${p2r(0)};

    @media (max-width: ${breakpoints.tablet}px) {
      padding: 0 ${p2r(60)} ${p2r(0)};
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
    }
  }

  .menu-inner {
    //delete later
    background-color: azure; //delete later
    position: sticky; //delete later
    width: 18%; //delete later
    height: 100px; //delete later

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .article-inner {
    max-width: 800px;

    @media (max-width: ${breakpoints.medium}px) {
      max-width: 600px;
    }

    @media (max-width: ${breakpoints.tablet}px) {
      max-width: 500px;
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      max-width: 100%;
    }
  }

  .final-block {
    margin-top: -22%;
    width: 100%;
    height: ${p2r(338)};
    background-color: ${colors.lightGold};

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }
`;

export default styles;
