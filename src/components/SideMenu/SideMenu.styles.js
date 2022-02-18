import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = () => css`
  position: relative;
  overflow: visible;
  margin-right: 100px;
  top: 20px;
  max-width: 320px;
  width: 100%;

  .menu-nav {
    z-index: 100;
    position: sticky;
    top: 20px;
    padding: ${p2r(22)} ${p2r(22)} ${p2r(80)};
    background-color: ${colors.beige};
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
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: ${p2r(64)};
    padding-left: 0;
    max-width: 320px;
    height: 100%;
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
  }
`;

export default styles;
