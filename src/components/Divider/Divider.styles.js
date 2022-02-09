import { css } from '@emotion/react';

import { breakpoints } from '../../styles/index';

const MULTIPLIER = 8;
const MULTIPLIER_MOBILE = 4;

const calculator = (height, multiplier) => (typeof height === 'number' ? `${multiplier * height}px` : height);

const styles = ({ height, heightMobile }) => css`
  width: 100%;
  height: ${calculator(height, MULTIPLIER)};

  @media (max-width: ${breakpoints.hugeMobile}px) {
    height: ${calculator(heightMobile || height, MULTIPLIER_MOBILE)};
  }
`;

export default styles;
