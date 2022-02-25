import { css } from '@emotion/react';

import colors from '../../styles/colors';
import {p2r, PrimaryProps} from '../../styles/fonts';

const styles = (isOpen) => css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: ${isOpen ? '100%' : '0'};
  visibility: ${isOpen ? 'visible' : 'hidden'};
  background-color: ${colors.beige};

  .close-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 64px;
    height: 64px;
    background-color: ${colors.darkBeige};
    border: none;
    outline: none;
    cursor: pointer;
  }

  .closeEl {
    width: 2px;
    height: 20px;
    background-color: ${colors.black};

    &:first-child {
      margin-right: -1px;
      transform: rotate(45deg);
    }

    &:last-child {
      margin-left: -1px;
      transform: rotate(-45deg);
    }
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 80px 48px 50px;
  }

  .menu-item {
    margin-bottom: 25px;
    color: ${colors.btnGrey};
    ${PrimaryProps};
    font-weight: 400;
    font-size: ${p2r(18)};
  }

  .menu-link {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${colors.darkBeige}
    }
  }

  .mobile-menu-list, .menu-list-second {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: ${p2r(30)};
    padding-left: 0;
    max-width: 320px;
    max-height: 100%;
  }

  .gold-divider {
    margin-top: ${p2r(6)};
    margin-bottom: ${p2r(6)};
    height: 2px;
    width: 100%;
    background-color: ${colors.darkBeige};
  }

  .menu-date {
    font-size: ${p2r(14)};
    color: ${colors.btnGrey};
    opacity: 0.8;
  }
`;

export default styles;
