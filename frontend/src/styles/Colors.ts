import { createGlobalStyle } from 'styled-components';

import { IThemeColors } from 'styles/config/themes';

interface IColors {
  colors: IThemeColors;
}

const Colors = createGlobalStyle<IColors>`
  :root {
    //theme colors
    --main-headers: ${({ colors }) => colors.mainHeaders};
    --secondary-headers: ${({ colors }) => colors.secondaryHeaders};
    --main-background: ${({ colors }) => colors.mainBackground};
    --main-font: ${({ colors }) => colors.fontColor || colors.mainHeaders};

    --light-green: ${({ colors }) => colors.overwrite || '#00e676'};
    --secondary-green: ${({ colors }) => colors.secondaryOverwrite || '#69f0ae'};
    --red-highlight: #f44336;
    --main-red: ${({ colors }) => colors.overwrite || '#f44336'};
  }
`;

export default Colors;
