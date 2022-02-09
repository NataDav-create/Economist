import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, PrimaryProps } from '../../styles/fonts';

const styles = ({
  width = '100%',
  maxWidth,
  fontSize = 18,
  lineHeight = 24,
  fontWeight = 300,
  color = colors.black,
}) => css`
  .text {
    width: ${width};
    max-width: ${maxWidth};
    font-size: ${p2r(fontSize)};
    font-weight: ${fontWeight};
    line-height: ${p2r(lineHeight)};
    color: ${color};
  }

  ${PrimaryProps}
`;

export default styles;
