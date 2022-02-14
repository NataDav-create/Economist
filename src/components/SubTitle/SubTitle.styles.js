import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
// eslint-disable-next-line import/named
import { primaryProps } from '../../styles/fonts';

const styles = () => css`
  max-width: 100%;
  overflow-x: hidden;

  .article-subtitle {
    padding: 0;
    margin: 0;
    ${primaryProps};
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: 0 16px;
      font-size: 18px;
    }
  }
`;

export default styles;
