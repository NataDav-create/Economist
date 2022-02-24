import { css } from '@emotion/react';

import { breakpoints, colors } from '../../styles';
import { p2r } from '../../styles/fonts';

const styles = () => css`
  .main {
    overflow: visible;

    .wrapper__child {
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}px) {
      overflow: hidden;
    }
  }

  .container {
    position: relative;

    div {
      border-top: none;
      border-bottom: none;
    }
  }

  .headadv-container {
    //max-width: 1440px;
    max-width: 100%;
    margin: 0 auto;
  }

  .headEconSec-wrapper {
    & > div > header > div > div {
      border-top: none;
      border-bottom: none;
    }
  }

  .foot-container {
    background-color: ${colors.footerGrey};
    padding: 0 0 ${p2r(20)};

    div {
      max-width: 1440px;
    }
  }
`;

export default styles;
