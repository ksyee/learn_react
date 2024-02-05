import { range } from 'lodash';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(1, 1000),
      },
      inset: {
        ...pxToRemFunc(1, 1000),
      },
      fontSize: {
        ...pxToRemFunc(1, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(1, 1000),
      },
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
    },
    fontFamily: {
      sans: ['Pretandard Variable', 'Pretendard', 'noto-sans-kr', 'sans-serif'],
    },
  },
  plugins: [],
};
