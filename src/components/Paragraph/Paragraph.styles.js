import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = (marginSize) => css`
  padding: 0;
  max-width: 800px;
  margin: ${marginSize === 'big' ? '0 0 52px' : '0 0 33px'};
  ${PrimaryProps};
  font-size: ${p2r(18)};
  font-weight: 300;
  line-height: ${p2r(26)};

  @media (max-width: ${breakpoints.smallTablet}px) {
    font-size: ${p2r(16)};
    line-height: ${p2r(22)};
    margin: 0 0 ${p2r(33)};
  }
`;

export default styles;
