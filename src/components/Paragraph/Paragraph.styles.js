import { css } from '@emotion/react';

import { p2r, SecondaryProps } from '../../styles/fonts';

const styles = (marginSize) => css`
  padding: 0;
  margin: ${marginSize === 'big' ? '0 0 52px' : '0 0 33px'};
  ${SecondaryProps};
  font-size: ${p2r(18)};
  font-weight: 300;
  line-height: ${p2r(26)};
`;

export default styles;
