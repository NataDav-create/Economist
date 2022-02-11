export { default as colors } from './colors.js';

export const breakpoints = {
  mobile: 440,
  hugeMobile: 600,
  smallTablet: 768,
  tablet: 960,
  medium: 1440,
  large: 1920,
};

export const getBelowBP = (width) => (content) =>
  `
  @media (max-width: ${width}px) {
    ${content}
  }
`;

export const getIsBP = (minWidth, maxWidth) => (content) =>
  `
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    ${content}
  }
`;

export const getAboveBP = (width) => (content) =>
  `
  @media (min-width: ${width + 1}px) {
    ${content}
  }
`;
export const belowMobile = getBelowBP(breakpoints.mobile);
export const aboveMobile = getAboveBP(breakpoints.mobile);

export const belowHugeMobile = getBelowBP(breakpoints.hugeMobile);
export const aboveHugeMobile = getAboveBP(breakpoints.hugeMobile);

export const belowSmallTablet = getBelowBP(breakpoints.smallTablet);

export const belowTablet = getBelowBP(breakpoints.tablet);
export const aboveTablet = getAboveBP(breakpoints.tablet);

export const belowMedium = getBelowBP(breakpoints.medium);
export const aboveMedium = getAboveBP(breakpoints.medium);
