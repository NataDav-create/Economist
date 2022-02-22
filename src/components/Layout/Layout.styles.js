import { css } from '@emotion/react';

import {breakpoints} from '../../styles';

const styles = () => css`
  .main {
    overflow: visible;

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
    max-width: 1440px;
    margin: 0 auto;
  }

  .headEconSec-wrapper {
    & > div > header > div > div {
      border-top: none;
      border-bottom: none;
    }
  }
`;

export default styles;
