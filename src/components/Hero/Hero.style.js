import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (image) => css`
  background-color: ${colors.bgWhite};
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .container {
    max-width: 1440px;
    padding: 0 ${p2r(32)};
    margin: 0 auto;
  }

  .content-inner {
    display: flex;
    justify-content: center;
    padding: ${p2r(52)} 0 0;
  }

  .social-inner {
    margin-right: ${p2r(80)};

    div {
      border: none;
    }
  }

  .content-text {
    width: 800px;
  }

  .content-title {
    padding: 0;
    margin: 0 0 ${p2r(7)};
    color: ${colors.gold};
    ${SecondaryProps};
    font-size: ${p2r(42)};
    line-height: ${p2r(56)};
    font-style: italic;
    font-weight: 500;
  }

  .bg-inner {
    width: 100%;
    min-height: ${p2r(450)};
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default styles;
