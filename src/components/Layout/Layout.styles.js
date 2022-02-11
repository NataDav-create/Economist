import { css } from '@emotion/react';

const styles = css`
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
