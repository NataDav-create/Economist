import { css } from '@emotion/react';

import { p2r } from '../../styles/fonts';

const styles = () => css`
  width: 100%;

  .image-article {
    margin-bottom: ${p2r(30)};
    width: 100%;
    height: ${p2r(320)};
    object-fit: cover;
  }
`;

export default styles;
