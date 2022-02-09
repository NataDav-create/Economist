import { css } from '@emotion/react';

import { colors } from '../../../styles';
import { p2r, SecondaryProps } from '../../../styles/fonts';

const styles = ({
  width = '100%',
  maxWidth,
  fontSize = 48,
  lineHeight = 50,
  fontWeight = 'bold',
  color = colors.black,
}) => css`
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
