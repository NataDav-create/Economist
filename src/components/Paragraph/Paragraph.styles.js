import { css } from '@emotion/react';

import {belowHugeMobile, breakpoints} from '../../styles';
import {p2r, PrimaryProps, Secondary} from '../../styles/fonts';

const styles = () => css`
  .article-title {
    ${Secondary}
    .text-subtitle {
      margin: 0;
      font-size: ${p2r(24)};
      font-weight: normal;
      line-height: ${p2r(28)};

      ${belowHugeMobile(`
        width: 100%;
     `)}
    }
  }

  .article-text {
    padding: 0;
    max-width: 800px;
    margin: 33px 0;
    ${PrimaryProps};
    font-size: ${p2r(18)};
    font-weight: 300;
    line-height: ${p2r(26)};

    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: ${p2r(16)};
      line-height: ${p2r(22)};
      margin: 0 0 ${p2r(33)};
    }
  }
`;

export default styles;
