// Arquivo para adicionar os types com maior facilidade

import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{}
}