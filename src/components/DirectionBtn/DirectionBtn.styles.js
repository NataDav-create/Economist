import { css } from '@emotion/react';

import { breakpoints, colors } from '../../styles';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = (direction, styleText, prevImg, nextImg) => css`
  position: relative;
  margin-bottom: ${p2r(16)};
  ${PrimaryProps};
  font-size: ${p2r(16)};
  line-height: ${p2r(22)};
  font-weight: 400;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: ${styleText === 'prev' ? 'right' : 'left'};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${p2r(14)};
    line-height: ${p2r(18)};
    margin-bottom: ${p2r(16)};
  }

  &::after {
    position: absolute;
    content: '';
    width: 12px;
    height: ${p2r(22)};
    right: ${styleText === 'prev' ? '27%' : '80%'};
    top: 0;
    background-image: url(${styleText === 'prev' ? prevImg : nextImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: ${breakpoints.medium}px) {
      right: ${styleText === 'prev' ? '35%' : '70%'};
    }

    @media (max-width: ${breakpoints.tablet}px) {
      right: ${styleText === 'prev' ? '50%' : '60%'};
      top: -20%;
    }
`;

export default styles;
