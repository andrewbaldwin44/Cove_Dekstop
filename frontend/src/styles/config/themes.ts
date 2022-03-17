export interface IThemeColors {
  mainHeaders: string;
  secondaryHeaders: string;
  mainBackground: string;
  fontColor?: string;
  overwrite?: string;
  secondaryOverwrite?: string;
}

export const themes = {
  default: {
    name: 'Default',
    colors: {
      mainHeaders: '#444146',
      secondaryHeaders: '#4B515D',
      mainBackground: 'white',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      mainHeaders: '#444146',
      secondaryHeaders: '#2E2E2E',
      mainBackground: '#4B515D',
      fontColor: '#212121',
    },
  },
  vampire: {
    name: 'Vampire',
    colors: {
      mainHeaders: '#C33C54',
      secondaryHeaders: '#2E2E2E',
      mainBackground: '#4B515D',
      fontColor: '#f44336',
    },
  },
  glacial: {
    name: 'Glacial',
    colors: {
      mainHeaders: '#006064',
      secondaryHeaders: '#00838f',
      mainBackground: '#80deea',
      overwrite: '#A18276',
      secondaryOverwrite: '#b69e95',
    },
  },
  lavendar: {
    name: 'Lavendar',
    colors: {
      mainHeaders: '#6a1b9a',
      secondaryHeaders: '#8e24aa',
      mainBackground: '#9575cd',
    },
  },
  hotPink: {
    name: 'Hot Pink',
    colors: {
      mainHeaders: '#c51162',
      secondaryHeaders: '#f50057',
      mainBackground: '#f8bbd0',
    },
  },
};
