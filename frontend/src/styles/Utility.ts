import { createGlobalStyle } from 'styled-components';

import { objectToCssVariables } from 'utils/string';

export const shadow = {
  shadowXs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowS: '0px 0px 25px rgba(249, 34, 56, 0.1)',
  shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowM: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowMl: '0px 0px 25px rgba(249, 34, 56, 0.15)',
  shadowL: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  shadow2Xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

const createShadowVariables = () => `
   ${objectToCssVariables(shadow)}
`;

export default createGlobalStyle`
  :root {
    ${createShadowVariables()}
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .hide-scrollbar@under-lg {
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide {
    display: none;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
`;
