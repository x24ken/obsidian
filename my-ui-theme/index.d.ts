// TypeScript型定義

export interface ThemeColors {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  brand: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  success: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  warning: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  error: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  info: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeVariables {
  background: string;
  foreground: string;
  surface: string;
  surfaceSecondary: string;
  border: string;
  muted: string;
  accent: string;
  accentHover: string;
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  fontSize: ThemeFontSizes;
  borderRadius: ThemeRadius;
  boxShadow: ThemeShadows;
  variables: ThemeVariables;
}

// Tailwind CSS設定の型
export interface TailwindThemeConfig {
  content: string[];
  theme?: {
    extend?: Partial<Theme>;
  };
  plugins?: any[];
}

// ユーティリティ関数の型
export function getThemeColors(): ThemeColors;
export function getThemeVariables(mode?: 'light' | 'dark'): ThemeVariables;
export function createTailwindConfig(options?: Partial<TailwindThemeConfig>): TailwindThemeConfig;

// CSS変数の型
declare module '*.css' {
  const content: string;
  export default content;
}