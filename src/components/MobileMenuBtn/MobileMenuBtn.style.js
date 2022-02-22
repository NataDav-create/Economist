import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = () => css`
  display: none;
  position: absolute;
  right: ${p2r(15)};
  top: 5%;
  z-index: 20;
  max-width: 70px;
  cursor: pointer;

  @media (max-width: ${breakpoints.smallTablet}px) {
    display: flex;
  }

  .menu-inner {
    margin-right: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu-singleRow {
    width: 18px;
    height: ${p2r(2)};
    background-color: ${colors.menuColor};
  }

  span {
    font-size: ${p2r(16)};
    color: ${colors.menuColor};
    ${PrimaryProps};
  }
`;

export default styles;
