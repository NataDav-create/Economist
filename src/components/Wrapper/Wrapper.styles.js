import { css } from '@emotion/react';

import { breakpoints } from '../../styles';

const styles = ({ maxWidth, width, mobileMaxWidth, mobileWidth }) => css`
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .wrapper__child {
    width: ${width};
    max-width: ${maxWidth};
  }

  @media (max-width: ${breakpoints.hugeMobile}px) {
    .wrapper__child {
      width: ${mobileWidth};
      max-width: ${mobileMaxWidth};
    }
  }
`;

export default styles;
