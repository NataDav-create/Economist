import { css } from '@emotion/react';
import { withPrefix } from 'gatsby-link';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (styleBack, styleBg, arrow, arrowWhite, arrowWh) => css`
  .download-btn {
    position: relative;
    width: 299px;
    height: ${p2r(80)};
    padding-right: ${p2r(38)};
    ${SecondaryProps};
    font-size: ${p2r(18)};
    font-style: normal;
    font-weight: normal;
    line-height: ${p2r(26)};
    color: ${styleBg === 'primary' ? colors.btnGrey : colors.white};
    text-transform: uppercase;
    letter-spacing: ${p2r(0.36)};
    cursor: pointer;
    background: ${styleBg || styleBack === 'primary'
      ? 'linear-gradient(16deg, #bb9b66 0%, #c6aa71 48%, #e9d793 86%, #d9c184 100%)'
      : '#121212'};
    border: none;
    border-radius: ${p2r(40)};
    outline: none;
    transform: translateY(50%);

    &::after {
      position: absolute;
      right: ${p2r(20)};
      bottom: ${p2r(20)};
      width: 40px;
      height: ${p2r(40)};
      content: '';
      background-image: url(${styleBg || styleBack === 'primary' ? withPrefix(arrow) : withPrefix(arrowWhite) || withPrefix(arrowWh)});
      background-position: center;
      background-size: cover;
    }

    &:hover {
      background: ${styleBg === 'primary' ? colors.white : colors.gold};
      border-width: 2px;
      border-style: solid;
      border-color: ${styleBg === 'primary' ? colors.gold : ''};
      color: ${styleBg === 'primary' ? colors.btnGrey : colors.white};
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      max-width: 343px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    max-width: 270px;
  }
`;

export default styles;
