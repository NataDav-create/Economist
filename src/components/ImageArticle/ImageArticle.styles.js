import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import { p2r } from '../../styles/fonts';

const styles = () => css`
  max-width: 800px;

  @media (max-width: ${breakpoints.smallTablet}px) {
    max-height: ${p2r(378)};
  }

  .image-article {
    margin-bottom: ${p2r(30)};
    width: 100%;
    max-height: ${p2r(378)};
    object-fit: contain;
  }
`;

export default styles;
