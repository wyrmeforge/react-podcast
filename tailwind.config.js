/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      grey: '#4D4D4D',
      champagne: '#F7EDE8',
      vermillion: '#CD4631',
      blue: '#81ADC8',
      alice: '#EDF3F7',
    },
    fontSize: {
      12: '12px',
      14: '14px',
      16: '16px',
      23: '23px',
      37: '37px',
      60: '60px',
      96: '96px',
    },
    fontFamily: {
      montsalt: 'MontserratAlternates',
    },
    extend: {
      fontSize: {
        30: '30px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        sparkle: "url('src/assets/images/Sparkle.svg')",
      },
      maxWidth: {
        content: '1160px',
      },
      spacing: {
        6: '24px',
        9: '36px',
        15: '60px',
        19: '76px',
        25: '100px',
        30: '120px',
        33: '132px',
        35: '140px',
        40: '160px',
        52: '208px',
        80: '320px',
        90: '360px',
        290: '1160px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        12: '12px',
      },
      lineHeight: {
        120: '1.2em',
        140: '1.4em',
        160: '1.6em',
      },
      dropShadow: {
        hover: '3px 3px 0 rgba(0,0,0,.25)',
        hoverXl: '6px 6px 0 rgba(0,0,0,.25)',
        hoverXlRed: '6px 6px 0 #CD4631',
        cover: '12px 12px 0 #81ADC8',
        card: '10px 10px 0 #81ADC8',
        dark: '10px 10px 0 #000',
      },
    },
  },
};
