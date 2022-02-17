import { css } from '@emotion/react';

import { breakpoints, colors } from '../../styles';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (styleText, mobText, mobImg) => css`
  .nav-mobile-text {
    display: none;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: block;
      padding-left: ${styleText === 'prev' ? '25px' : '0px'};
      padding-right: ${styleText === 'prev' ? '0px' : '25px'};
      position: relative;
      width: 138px;
      height: ${p2r(64)};
      border-radius: 40px;
      background-color: ${colors.darkBeige};
      ${SecondaryProps};
      font-size: ${p2r(18)};
      font-weight: 400;
      line-height: ${p2r(26)};
      text-transform: uppercase;
      color: ${colors.btnGrey};
      outline: none;
      border: none;
      cursor: pointer;
      &:after {
        position: absolute;
        content: '';
        width: 30px;
        height: 100%;
        left: ${styleText === 'prev' ? '30px' : '85px'};
        top: -2%;
        background-image: url(${mobImg});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export default styles;
