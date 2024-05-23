import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors : {
      'desaturated-red': 'hsl(0, 36%, 70%)',
      'soft-red': 'hsl(0, 93%, 68%)',
      'dark-grayish-red': 'hsl(0, 6%, 24%)',
      'gradient-start': 'hsl(0, 80%, 86%)',
      'gradient-end': 'hsl(0, 74%, 74%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        josefin: ["Jorefin Sans", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['responsive'],
      boxDecorationBreak: ['responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
