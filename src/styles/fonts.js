import { css } from '@emotion/react';

export const Primary = `'EconSans', sans-serif`;

export const PrimaryProps = css`
  font-family: 'EconSans', sans-serif;
`;

export const Secondary = `'MiloTE', sans-serif`;

export const SecondaryProps = css`
  font-family: 'MiloTE', sans-serif;
`;

export const BasicFontForEconomistComponentsQ = css`
  font-family: 'EconSansOS', sans-serif;
`;

export const BasicFontForEconomistComponents = `'EconSansOS', sans-serif`;

const fontBaseSize = 16;
export const p2r = (v) => `${v / fontBaseSize}rem`;
