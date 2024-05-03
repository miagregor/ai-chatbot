// tailwind.d.ts

import 'tailwindcss/colors';

interface CustomColors {
  primary: string;
  secondary: string;
  tertiary: string;
  dark: string;
  mediumDark: string;
  medium: string;
  mediumLight: string;
  light: string;
}

// Merge the DefaultColors and CustomColors interfaces
type ExtendedColors = DefaultColors & CustomColors;

// Extend the Colors interface with the extended colors
declare module 'tailwindcss/colors' {
  interface Colors extends ExtendedColors {}
}
