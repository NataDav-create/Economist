import { css } from '@emotion/react';

import { belowHugeMobile, colors } from '../../styles';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = ({ width }) => css`
  ${PrimaryProps}
  .text {
    width: ${width};
    font-size: ${p2r(18)};
    font-weight: 300;
    line-height: ${p2r(24)};
    color: ${colors.black};

    ${belowHugeMobile(`
      width: 100%;
    `)}
  }
`;

export default styles;
