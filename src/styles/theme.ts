// Theme configuration
export const theme = {
  colors: {
    primary: {
      dark: '#121212',
      black: '#000000',
      white: '#FFFFFF',
      accent: '#FF0000',
    },
    secondary: {
      gray: {
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
    functional: {
      error: '#DC2626',
      success: '#22C55E',
      warning: '#F59E0B',
      info: '#3B82F6',
    },
  },
  typography: {
    fontFamily: {
      primary: '"SF Pro Display", system-ui, sans-serif',
      secondary: '"SF Pro Text", system-ui, sans-serif',
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
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    base: 'all 0.3s ease',
    expand: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fade: 'opacity 0.2s ease-in-out',
    slide: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;