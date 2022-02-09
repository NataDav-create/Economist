import { css } from '@emotion/react';

import { colors } from '../../../styles';
import { p2r, SecondaryProps } from '../../../styles/fonts';

const styles = ({ width, maxWidth, fontSize = 32, lineHeight = 36, fontWeight, color = colors.black }) => css`
  width: ${width};
  max-width: ${maxWidth};
  margin: 0;
  font-size: ${p2r(fontSize)};
  font-weight: ${fontWeight};
  line-height: ${p2r(lineHeight)};
  color: ${color};

  ${SecondaryProps}
`;

export default styles;
