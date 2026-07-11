/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#34d399',
          dim: '#10b981',
        },
        ink: {
          950: '#0a0d12',
          900: '#0f1319',
          800: '#161b22',
          700: '#1f2630',
          600: '#2a323e',
          400: '#8b96a5',
          300: '#aab2bd',
          100: '#e6e9ed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
