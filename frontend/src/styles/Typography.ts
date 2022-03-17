import { createGlobalStyle } from 'styled-components';

import breakpoints from 'styles/breakpoints';
import { objectToCssVariables } from 'utils/string';

export const textSizeSteps = {
  text64: '64px',
  text56: '56px',
  text48: '48px',
  text36: '36px',
  text28: '28px',
  text24: '24px',
  text22: '22px',
  text20: '20px',
  text18: '18px',
  text16: '16px',
  text14: '14px',
  text12: '12px',
};

export const fontWeights = {
  weight100: 100,
  weight300: 300,
  weight400: 400,
  weight600: 600,
  weight700: 700,
  weight800: 800,
};

export const lineHeights = {
  lineNormal: 1,
  lineQuarter: 1.25,
  lineHalf: 1.5,
  lineDouble: 2,
  line1: '0.75rem',
  line2: '1rem',
  line3: '1.25rem',
  line4: '1.5rem',
  line5: '1.75rem',
  line6: '2rem',
  line7: '2.25rem',
  line8: '2.5rem',
  line9: '2.75rem',
  line10: '3rem',
};

export const fontTracking = {
  trackTight: '-0.015em',
  trackNormal: 'normal',
  trackLoose: '0.015em',
};

export const text = ({
  fontSize = textSizeSteps.text16,
  fontWeight = fontWeights.weight400,
  lineHeight = lineHeights.lineNormal,
  color = 'black',
  letterSpacing = fontTracking.trackNormal,
} = {}) => `
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  color: ${color};
  letter-spacing: ${letterSpacing};
`;

const createTypographyVariables = () => `
  ${objectToCssVariables(textSizeSteps)}
  ${objectToCssVariables(fontWeights)}
  ${objectToCssVariables(lineHeights)}
  ${objectToCssVariables(fontTracking)}
`;

export default createGlobalStyle`
  :root {
    ${createTypographyVariables()}
  }

  h1, h2, h3, h4, h5, h6, span, p, a, button, label, textarea {
    color: black;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${fontWeights.weight400};
  }

  h1 {
    font-size: ${textSizeSteps.text24};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text36};
    `)}
  }

  h2 {
    font-size: ${textSizeSteps.text22};
    line-height: ${lineHeights.line6};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text28};
      line-height: ${lineHeights.line10};
    `)}
  }

  h3 {
    font-size: ${textSizeSteps.text18};
    line-height: ${lineHeights.line7};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text24};
      line-height: ${lineHeights.lineDouble};
    `)}
  }

  h4 {
    font-size: ${textSizeSteps.text16};
    font-weight: ${fontWeights.weight700};
    line-height: ${lineHeights.line6};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text22};
      line-height: ${lineHeights.line9};
    `)}
  }

  h5 {
    font-size: ${textSizeSteps.text12};
    font-weight: ${fontWeights.weight400};
    line-height: ${lineHeights.line2};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text20};
      line-height: ${lineHeights.line6};
    `)}
  }

  p, a, li  {
    font-size: ${textSizeSteps.text16};
    line-height: ${lineHeights.line3};
    font-weight: ${fontWeights.weight400};
    color: black;

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text18};
      line-height: ${lineHeights.line4};
    `)}
  }

  span, button {
    font-size: ${textSizeSteps.text12};
    line-height: ${lineHeights.line4};
    font-family: inherit;
    font-weight: ${fontWeights.weight600};

    ${breakpoints('large')(`
      font-size: ${textSizeSteps.text18};
      line-height: ${lineHeights.line4};
    `)}
  }

  label {
    font-size: ${textSizeSteps.text14};
    line-height: ${lineHeights.line3};
    margin-bottom: 10px;
    display: inline-block;
    color: black;
  }
`;

export const TypographyUtils = createGlobalStyle`
  .bold {
    font-weight: ${fontWeights.weight700};
  }

  .italic {
    font-style: italic;
  }

  .body-text {
    ${text()}
  }
`;

export const bodyText = text();
