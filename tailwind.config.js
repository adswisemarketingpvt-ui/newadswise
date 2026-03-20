/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"EB Garamond"', 'serif'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#111827',
        primary: '#3B82F6',
        muted: '#F3F4F6',
        'muted-foreground': '#6B7280',
       
      }
    },
  },
  plugins: [],
};
