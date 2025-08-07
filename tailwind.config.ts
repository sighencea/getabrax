import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-300': 'oklch(.808 .114 19.571)',
        'red-400': 'oklch(.704 .191 22.216)',
        'red-600': 'oklch(.577 .245 27.325)',
        'yellow-50': 'oklch(.987 .026 102.212)',
        'yellow-400': 'oklch(.852 .199 91.936)',
        'yellow-600': 'oklch(.681 .162 75.834)',
        'green-50': 'oklch(.982 .018 155.826)',
        'green-400': 'oklch(.792 .209 151.711)',
        'green-500': 'oklch(.723 .219 149.579)',
        'green-600': 'oklch(.627 .194 149.214)',
        'blue-50': 'oklch(.97 .014 254.604)',
        'blue-100': 'oklch(.932 .032 255.585)',
        'blue-200': 'oklch(.882 .059 254.128)',
        'blue-300': 'oklch(.809 .105 251.813)',
        'blue-400': 'oklch(.707 .165 254.624)',
        'blue-500': 'oklch(.623 .214 259.815)',
        'blue-600': 'oklch(.546 .245 262.881)',
        'blue-700': 'oklch(.488 .243 264.376)',
        'blue-800': 'oklch(.424 .199 265.638)',
        'indigo-100': 'oklch(.93 .034 272.788)',
        'purple-600': 'oklch(.558 .288 302.321)',
        'slate-50': 'oklch(.984 .003 247.858)',
        'gray-50': 'oklch(.985 .002 247.839)',
        'gray-200': 'oklch(.928 .006 264.531)',
        'gray-300': 'oklch(.872 .01 258.338)',
        'gray-400': 'oklch(.707 .022 261.325)',
        'gray-500': 'oklch(.551 .027 264.364)',
        'gray-600': 'oklch(.446 .03 256.802)',
        'gray-700': 'oklch(.373 .034 259.733)',
        'gray-800': 'oklch(.278 .033 256.848)',
        'gray-900': 'oklch(.21 .034 264.665)',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      }
    },
  },
  plugins: [],
}
export default config
