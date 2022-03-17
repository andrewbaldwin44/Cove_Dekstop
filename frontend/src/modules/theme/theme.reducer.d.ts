import { IThemeAction } from 'modules/theme/theme.actions';
export default function themeReducer(state: {
    colors: {
        mainHeaders: string;
        secondaryHeaders: string;
        mainBackground: string;
    };
} | undefined, { type, payload }: IThemeAction): {
    colors: {
        mainHeaders: string;
        secondaryHeaders: string;
        mainBackground: string;
    };
};
