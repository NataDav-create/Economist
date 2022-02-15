import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, PrimaryProps, SecondaryProps } from '../../styles/fonts';

const styles = (styleText, prevImg, nextImg, prevMob, nextMob) => css`
  .navigation-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: ${p2r(128)};
    z-index: 5;

    @media (max-width: ${breakpoints.smallTablet}px) {
      justify-content: center;
    }
  }

  .navigation-card {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width: 50%;
    min-height: ${p2r(390)};
    background-color: ${colors.btnGrey};

    @media (max-width: ${breakpoints.smallTablet}px) {
      position: relative;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 138px;
      min-height: 0;
      height: ${p2r(64)};
      border-radius: 40px;
      background-color: ${colors.darkBeige};
      border: none;
      cursor: pointer;
    }
  }

  .image-wrapper {
    max-width: 100%;
    max-height: 368px;
    overflow: hidden;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .image-nav {
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }

  .content-wrapper {
    diplay: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${p2r(32)};
    color: white;

    @media (max-width: ${breakpoints.medium}px) {
      padding: ${p2r(20)};
    }

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: none;
    }
  }

  .content-title {
    margin-bottom: ${p2r(5)};
    color: ${colors.gold};
    ${SecondaryProps};
    font-size: ${p2r(20)};
    line-height: ${p2r(30)};
    font-weight: 300;
    text-align: ${styleText === 'prev' ? 'right' : 'left'};

    @media (max-width: ${breakpoints.medium}px) {
      font-size: ${p2r(18)};
      line-height: ${p2r(22)};
    }
  }

  .content-text {
    ${PrimaryProps};
    font-size: ${p2r(16)};
    line-height: ${p2r(22)};
    font-weight: 400;
    color: ${colors.bgWhite};
    opacity: 0.5;
    text-align: ${styleText === 'prev' ? 'right' : 'left'};

    @media (max-width: ${breakpoints.medium}px) {
      font-size: ${p2r(14)};
      line-height: ${p2r(18)};
    }
  }

  .content-nav {
    position: relative;
    margin-bottom: ${p2r(16)};
    ${PrimaryProps};
    font-size: ${p2r(16)};
    line-height: ${p2r(22)};
    font-weight: 400;
    text-transform: uppercase;
    color: ${colors.white};
    text-align: ${styleText === 'prev' ? 'right' : 'left'};
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${p2r(14)};
      line-height: ${p2r(18)};
      margin-bottom: ${p2r(16)};
    }

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

      @media (max-width: ${breakpoints.medium}px) {
        right: ${styleText === 'prev' ? '35%' : '70%'};
      }

      @media (max-width: ${breakpoints.tablet}px) {
        right: ${styleText === 'prev' ? '50%' : '60%'};
        top: -20%;
      }
    }

    .content-wrapper-mobile {
      display: none;

      @media (max-width: ${breakpoints.smallTablet}px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      div {
        width: 150px;
        height: 80px;
        background-color: yellow;
      }
    }
  }

  .nav-mobile-text {
    display: none;

    @media (max-width: ${breakpoints.smallTablet}px) {
      display: block;
      padding-left: ${styleText === 'prev' ? '25px' : '0px'};
      padding-right: ${styleText === 'prev' ? '0px' : '25px'};
      ${SecondaryProps};
      font-size: ${p2r(18)};
      font-weight: 400;
      line-height: ${p2r(26)};
      text-transform: uppercase;
      color: ${colors.btnGrey};
      &:after {
        position: absolute;
        content: '';
        width: 30px;
        height: 100%;
        left: ${styleText === 'prev' ? '30px' : '85px'};
        top: -2%;
        background-image: url(${styleText === 'prev' ? prevMob : nextMob});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export default styles;
