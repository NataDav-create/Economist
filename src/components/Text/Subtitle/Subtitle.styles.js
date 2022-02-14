import { css } from '@emotion/react';

import { belowHugeMobile } from '../../../styles';
import { p2r, Secondary } from '../../../styles/fonts';

const styles = ({ width }) => css`
  ${Secondary}
  .text-subtitle {
    width: ${width};
    margin: 0;
    font-size: ${p2r(24)};
    font-weight: normal;
    line-height: ${p2r(28)};

    ${belowHugeMobile(`
        width: 100%;
     `)}
  }
`;

export default styles;
