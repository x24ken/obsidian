// メインエントリーポイント

// テーマカラーの定義
const themeColors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93bbfc',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  brand: {
    light: '#f0f9ff',
    DEFAULT: '#0ea5e9',
    dark: '#0c4a6e',
  },
  success: {
    light: '#d1fae5',
    DEFAULT: '#10b981',
    dark: '#064e3b',
  },
  warning: {
    light: '#fef3c7',
    DEFAULT: '#f59e0b',
    dark: '#78350f',
  },
  error: {
    light: '#fee2e2',
    DEFAULT: '#ef4444',
    dark: '#7f1d1d',
  },
  info: {
    light: '#dbeafe',
    DEFAULT: '#3b82f6',
    dark: '#1e3a8a',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
};

// テーマ変数を取得する関数
function getThemeVariables(mode = 'light') {
  if (mode === 'dark') {
    return {
      background: themeColors.gray[950],
      foreground: themeColors.gray[50],
      surface: themeColors.gray[900],
      surfaceSecondary: themeColors.gray[800],
      border: themeColors.gray[700],
      muted: themeColors.gray[400],
      accent: themeColors.primary[400],
      accentHover: themeColors.primary[300],
    };
  }

  return {
    background: themeColors.gray[50],
    foreground: themeColors.gray[900],
    surface: '#ffffff',
    surfaceSecondary: themeColors.gray[100],
    border: themeColors.gray[200],
    muted: themeColors.gray[600],
    accent: themeColors.primary[500],
    accentHover: themeColors.primary[600],
  };
}

// Tailwind設定を生成する関数
function createTailwindConfig(options = {}) {
  return {
    content: options.content || [],
    theme: {
      extend: {
        colors: themeColors,
        spacing: {
          xs: '0.25rem',
          sm: '0.5rem',
          md: '1rem',
          lg: '1.5rem',
          xl: '2rem',
          '2xl': '3rem',
          '3xl': '4rem',
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
        },
        borderRadius: {
          sm: '0.125rem',
          md: '0.375rem',
          lg: '0.5rem',
          xl: '0.75rem',
          '2xl': '1rem',
          full: '9999px',
        },
        boxShadow: {
          sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        },
        ...options.theme?.extend,
      },
    },
    plugins: options.plugins || [],
  };
}

// エクスポート
module.exports = {
  themeColors,
  getThemeColors: () => themeColors,
  getThemeVariables,
  createTailwindConfig,
};