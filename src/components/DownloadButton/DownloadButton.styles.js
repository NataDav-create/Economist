import { css } from '@emotion/react';

import colors from '../../styles/colors';
import { SecondaryProps } from '../../styles/fonts';

const styles = (styleBg, arrow) => css`
  position: relative;
  width: 299px;
  height: 80px;
  padding-right: 38px;
  ${SecondaryProps};
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  color: ${styleBg === 'primary' ? colors.btnGrey : colors.white};
  text-transform: uppercase;
  letter-spacing: 0.36px;
  cursor: pointer;
  background: ${styleBg === 'primary'
    ? 'linear-gradient(16deg, #bb9b66 0%, #c6aa71 48%, #e9d793 86%, #d9c184 100%)'
    : '#121212'};
  border: none;
  border-radius: 40px;
  outline: none;
  transform: translateY(50%);

  &::after {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    content: '';
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
  }
`;

export default styles;
