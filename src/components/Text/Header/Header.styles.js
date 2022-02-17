import { css } from '@emotion/react';

import { belowHugeMobile } from '../../../styles';
import { p2r,Secondary } from '../../../styles/fonts';

const styles = ({ width }) => css`
  ${Secondary}
  .text-header {
    width: ${width};
    font-size: ${p2r(36)};
    font-weight: normal;
    line-height: ${p2r(36)};

    ${belowHugeMobile(`
      width: 100%;
    `)}
  }
`;

export default styles;
