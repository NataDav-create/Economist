import {
  css
} from '@emotion/react';

const styles = css `
.container {
  div {
    border-top: none;
    border-bottom: none;
  }
}

.headEconSec-wrapper {
  & > div > header > div > div {
    border-top: none;
    border-bottom: none;
  }
}
`;

export default styles;
