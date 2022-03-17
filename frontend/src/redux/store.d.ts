export default function configureStore(initialState?: {
    [key: string]: any;
}): import("redux").Store<import("redux").EmptyObject & {
    theme: {
        colors: {
            mainHeaders: string;
            secondaryHeaders: string;
            mainBackground: string;
        };
    };
}, import("../modules/theme/theme.actions").IThemeAction>;
