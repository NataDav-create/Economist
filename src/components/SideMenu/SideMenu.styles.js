import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = (open) => css`
  position: relative;
  overflow: visible;
  margin-right: 100px;
  top: 37px;
  max-width: 320px;
  width: 100%;
  max-height: calc(600vh - 64px);

  .menu-nav {
    z-index: 100;
    position: sticky;
    top: 20px;
    margin-bottom: 450px;
    padding: ${open ? `${p2r(22)} ${p2r(22)} ${p2r(80)}` : `${p2r(22)} ${p2r(22)} ${p2r(0)}`};
    background-color: ${open ? colors.beige : 'transparent'};
    border-radius: ${p2r(32)};
  }

  .menu-top {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: ${p2r(22)};
    left: 0;
    top: 0;
    width: 100%;
    height: ${p2r(64)};
    border-top-left-radius: ${p2r(32)};
    border-top-right-radius: ${p2r(32)};
    border-bottom-left-radius: ${open ? 0 : `${p2r(32)}`};
    border-bottom-right-radius: ${open ? 0 : `${p2r(32)}`};
    background-color: ${colors.darkBeige};
    text-align: left;
    text-transform: uppercase;
    ${PrimaryProps};
    font-size: ${p2r(18)};
    font-weight: 400;
    color: ${colors.btnGrey};
  }

  .menu-top-img {
    margin-left: auto;
    cursor: pointer;
    padding: 5px;
    transform: ${open ? 'scale(1)' : 'scaleY(-1)'};
  }

  .menu-list, .menu-list-second {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: ${open ? `${p2r(64)}` : 0};
    padding-left: 0;
    max-width: 320px;
    max-height: ${open ? '100%' : 0};
    transition: all 0.3s ease-in;
    transform: ${open ? 'scale(1)' : 'scale(0)'};
    li {
      display: ${open ? 'block' : 'none'};
    }
  }

  .menu-list-second {
    padding-top: ${p2r(32)};
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
    transition: color 0.3s ease-in;
    &:hover {
      color: ${colors.darkBeige}
    }
  }

  .active {
    font-weight: 700;
    text-decoration: underline;
  }

  .menu-bottom {
    position: absolute;
    display: ${open ? 'flex' : 'none'};
    justify-content: flex-start;
    align-items: center;
    bottom: 0;
    right: 0;
    width: 64px;
    height: 64px;
    background-color: ${colors.darkBeige};
    border-radius: ${p2r(32)} 0 ${p2r(32)} 0;
    outline: none;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: ${colors.white};
      border: 2px solid ${colors.darkBeige};
    }
  }

  .gold-divider {
    display: ${open ? 'block' : 'none'};
    margin-top: ${p2r(12)};
    margin-bottom: ${p2r(12)};
    height: 2px;
    width: 100%;
    background-color: ${colors.darkBeige};
  }

  .menu-date {
    display: block;
    font-size: ${p2r(14)};
    color: ${colors.btnGrey};
    opacity: 0.8;
  }
`;

export default styles;
