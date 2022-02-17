import { css } from '@emotion/react';

import { breakpoints } from '../../styles';
import colors from '../../styles/colors';
import { p2r, primaryProps } from '../../styles/fonts';

const styles = () => css`
  position: relative;
  margin-top: ${p2r(87)};

  .quote-wrapper {
    width: 100%;
    margin-bottom: ${p2r(33)};
    min-height: ${p2r(293)};
    padding: ${p2r(87)} ${p2r(30)} ${p2r(33)};
    background-color: ${colors.beige};

    @media (max-width: ${breakpoints.smallTablet}px) {
      padding: ${p2r(70)} ${p2r(15)} ${p2r(30)};
    }
  }

  .quote-text {
    margin-bottom: ${p2r(32)};
    ${primaryProps};
    font-size: ${p2r(24)};
    line-height: ${p2r(32)};
    font-weight: 400;
    font-style: normal;
    color: ${colors.btnGrey};

    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: ${p2r(20)};
      line-height: ${p2r(26)};
    }
  }

  .quote-author {
    ${primaryProps};
    font-size: ${p2r(18)};
    line-height: ${p2r(26)};
    font-weight: 700;
    font-style: normal;
    color: ${colors.btnGrey};

    @media (max-width: ${breakpoints.smallTablet}px) {
      font-size: ${p2r(16)};
      line-height: ${p2r(20)};
    }
  }

  .quote-circle {
    position: absolute;
    top: ${p2r(-55)};
    left: ${p2r(32)};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 108px;
    height: 108px;
    background-color: ${colors.darkBeige};
    border-radius: 50%;

    @media (max-width: ${breakpoints.smallTablet}px) {
      top: ${p2r(-35)};
      left: ${p2r(22)};
      width: 80px;
      height: 80px;
    }

    .quote-img {
      width: 60%;
      transform: translateY(15px);
    }
  }
`;

export default styles;
