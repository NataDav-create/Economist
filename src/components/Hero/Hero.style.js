import { css } from '@emotion/react';
import { withPrefix } from 'gatsby-link';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (image) => css`
  background-color: ${colors.bgWhite};
  width: 100%;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.hugeMobile}px) {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1440px;
    padding: 0 ${p2r(32)};
    margin: 0 auto;

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0;
    }
  }

  .content-inner {
    display: flex;
    justify-content: center;
    padding: ${p2r(52)} 0 ${p2r(50)};

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: ${p2r(35)} ${p2r(16)} 0;
    }

    @media (max-width: ${breakpoints.hugeMobile}px) {
      padding: ${p2r(35)} 0 0;
    }
  }

  .social-inner {
    margin-right: ${p2r(80)};

    div {
      border: none;
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .social-mobile {
    display: none;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: block;
      padding-top: 16px;
      background-color: ${colors.white};
    }
  }

  .content-text {
    width: 800px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      width: 100%;
    }
  }

  .content-title {
    padding: 0;
    margin: 0 0 ${p2r(50)};
    color: ${colors.gold};
    ${SecondaryProps};
    font-size: ${p2r(42)};
    line-height: ${p2r(56)};
    font-style: italic;
    font-weight: 500;

    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: ${p2r(32)};
      line-height: ${p2r(42)};
      text-align: left;
    }
  }

  .bg-inner {
    margin-top: -50px;
    width: 100%;
    min-height: ${p2r(450)};
    background-image: url(${withPrefix(image)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: ${breakpoints.smallTablet}px) {
      min-height: ${p2r(256)};
    }
  }
`;

export default styles;
