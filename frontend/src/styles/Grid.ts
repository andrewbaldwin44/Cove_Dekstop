import { createGlobalStyle } from 'styled-components';

import breakpoints from 'styles/breakpoints';
import { objectToCssVariables } from 'utils/string';

export const spacing = {
  spaceInsetXs: '4px 4px 4px 4px',
  spaceInsetS: '8px 8px 8px 8px',
  spaceInset: '16px 16px 16px 16px',
  spaceInsetL: '32px 32px 32px 32px',
  spaceInsetXl: '64px 64px 64px 64px',

  spaceStackXs: '0 0 4px 0',
  spaceStackS: '0 0 8px 0',
  spaceStack: '0 0 16px 0',
  spaceStackL: '0 0 32px 0',
  spaceStackXl: '0 0 64px 0',

  spaceVerticalXs: '4px 0',
  spaceVerticalS: '8px 0',
  spaceVertical: '16px 0',
  spaceVerticalL: '32px 0',
  spaceVerticalXl: '64px 0',

  spaceHorizontalXs: '0 4px',
  spaceHorizontalS: '0 8px',
  spaceHorizontal: '0 16px',
  spaceHorizontalL: '0 32px',
  spaceHorizontalXl: '0 64px',

  spaceXs: '4px',
  spaceS: '8px',
  space: '16px',
  spaceL: '32px',
  spaceXl: '64px',
};

const createSizingVariables = () => `
  ${objectToCssVariables(spacing)}
`;

export default createGlobalStyle`
  :root {
    --grid-padding: 25px;
    --navbar-height: 80px;

    ${breakpoints('mid')`
      --grid-padding: 40px;
    `};

    ${breakpoints('large')`
      --grid-padding: 120px;
    `};

    ${breakpoints('xlarge')`
      --grid-padding: 250px;
    `};

    ${createSizingVariables()};
  }

  .o-container {
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
  }

  .f-container {
    min-height: calc(100vh - var(--navbar-height) - var(--verify-email-banner-height, 0px));
  }

  .m-container {
    padding-top: 45px;
    padding-bottom: 45px;

    ${breakpoints('large')`
      padding-top: 120px;
      padding-bottom: 120px;
    `};
  }

  .s-m-container {
    padding-bottom: 45px;
    padding-top: 45px;

    ${breakpoints('large')`
      padding-top: 0;
      padding-bottom: 100px;
    `};
  }

  .centered-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
