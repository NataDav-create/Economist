import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (styleText, prevImg, nextImg) => css`
  .navigation-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${p2r(128)};
    z-index: 5;
  }

  .navigation-card {
    display: flex;
    flex-direction: column;
    width: 380px;
    height: ${p2r(390)};
    background-color: ${colors.btnGrey};
  }

  .image-wrapper {
    width: 100%;
    height: 368px;
  }

  .content-wrapper {
    diplay: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${p2r(32)};
    color: white;
  }

  .content-title {
    margin-bottom: ${p2r(5)};
    color: ${colors.gold};
    ${SecondaryProps};
    font-size: ${p2r(20)};
    line-height: ${p2r(30)};
    font-weight: 300;
    text-align: ${styleText === 'prev' ? 'right' : 'left'};
  }

  .content-text {
    ${SecondaryProps};
    font-size: ${p2r(16)};
    line-height: ${p2r(22)};
    font-weight: 400;
    color: ${colors.bgWhite};
    opacity: 0.5;
    text-align: ${styleText === 'prev' ? 'right' : 'left'};
  }

  .content-nav {
    position: relative;
    margin-bottom: ${p2r(16)};
    ${SecondaryProps};
    font-size: ${p2r(16)};
    line-height: ${p2r(22)};
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.white};
    text-align: ${styleText === 'prev' ? 'right' : 'left'};
    cursor: pointer;
    &::after {
      position: absolute;
      content: '';
      width: 12px;
      height: ${p2r(22)};
      right: ${styleText === 'prev' ? '27%' : '80%'};
      top: 0;
      background-image: url(${styleText === 'prev' ? prevImg : nextImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export default styles;
