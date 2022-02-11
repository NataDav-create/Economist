import { css } from '@emotion/react';

import { p2r } from '../../styles/fonts';

const styles = () => css`
  position: relative;
  overflow-x: hidden;

  .container {
    max-width: 1440px;
    padding: ${p2r(50)} ${p2r(32)} ${p2r(100)};
    margin: 0 auto;
  }

  .article-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .menu-inner { //delete later
    background-color: azure; //delete later
    position: sticky; //delete later
    width: 18%; //delete later
    height: 100px; //delete later
  } //delete later

  .article-inner {
    padding: 0 ${p2r(130)} 0 ${p2r(100)};
    width: 80%;
  }
`;

export default styles;
