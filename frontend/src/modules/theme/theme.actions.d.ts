import { IThemeColors } from "styles/config/themes";
export declare const THEME: {
    [key: string]: string;
};
interface IChangeThemePayload {
    colors: IThemeColors;
}
export interface IThemeAction {
    type: typeof THEME[keyof typeof THEME];
    payload: IChangeThemePayload;
}
export declare const themeActions: {
    changeTheme: (payload: IChangeThemePayload) => {
        type: string;
        payload: {};
    };
};
export {};
