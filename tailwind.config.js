import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        success: 'var(--aw-color-success)',
        warning: 'var(--aw-color-warning)',
        purple: 'var(--aw-color-purple)',
        lavender: 'var(--aw-color-lavender)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        'pastel-pink': 'rgb(255 182 217)',
        'pastel-blue': 'rgb(168 216 234)',
        'pastel-yellow': 'rgb(255 229 180)',
        'pastel-green': 'rgb(180 231 206)',
        'pastel-purple': 'rgb(216 180 254)',
        'pastel-lavender': 'rgb(230 224 255)',
        'pastel-peach': 'rgb(255 203 164)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-pink': '6px 6px 0px 0px rgb(255, 182, 217)',
        'brutal-blue': '6px 6px 0px 0px rgb(168, 216, 234)',
        'brutal-yellow': '6px 6px 0px 0px rgb(255, 229, 180)',
        'brutal-green': '6px 6px 0px 0px rgb(180, 231, 206)',
        'brutal-purple': '6px 6px 0px 0px rgb(216, 180, 254)',
      },
      animation: {
        fade: 'fadeInUp 1s both',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
